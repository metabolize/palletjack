import { promises as fs } from 'fs'
import BetterSet from 'betterset'
import Joi from 'joi'
import globby from 'globby'
import multimatch from 'multimatch'
import yaml from 'js-yaml'

export interface Rename {
  readonly from: string
  readonly to: string
}

export interface ManifestData {
  readonly include: string[]
  readonly exclude: string[]
  readonly includeOverridingGitignore: string[]
  readonly rename: Rename[]
}

export interface MatchOptions {
  respectGitignore?: boolean
}

export interface MatchResult {
  toRename: string[]
  includedByManifest: string[]
  excludedByManifest: string[]
  excludedByGitignore: string[]
  includedByManifestOverride: string[]
  notInManifest: string[]
  gitignoredAndNotInManifest: string[]
}

export interface GlobOptions {
  basedir?: string
}

export interface GlobResult {
  allPaths: string[]
  gitignoredPaths: string[]
}

function findDuplicates<T>(items: T[]): T[] {
  // Adapted from https://github.com/j-d-b/array-find-duplicates by Jacob Brady.
  return items.reduce((accum, element, i) => {
    if (items.slice(i + 1).includes(element) || accum.includes(element)) {
      accum.push(element)
    }
    return accum
  }, [] as T[])
}

function allIncludes({
  includedByManifest,
  includedByManifestOverride,
}: MatchResult) {
  return [...includedByManifest, ...includedByManifestOverride]
}

export default class Manifest {
  public readonly manifestData: ManifestData

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static validateManifestContents(contents: any): ManifestData {
    const optionalPatternArraySchema = Joi.array()
      .items(Joi.string().required())
      .default([])
    const schema = Joi.object({
      include: optionalPatternArraySchema,
      exclude: optionalPatternArraySchema,
      includeOverridingGitignore: optionalPatternArraySchema,
      rename: Joi.array()
        .items(
          Joi.object({
            from: Joi.string().required(),
            to: Joi.string().required(),
          })
        )
        .default([]),
    }).required()
    return Joi.attempt(contents, schema)
  }

  public constructor(contents: Partial<ManifestData>) {
    this.manifestData = Manifest.validateManifestContents(contents)
  }

  public static async load(manifestPath: string): Promise<Manifest> {
    let contents: string
    try {
      contents = await fs.readFile(manifestPath, 'utf8')
    } catch (e) {
      throw Error(`Unable to load manifest file: ${e.message}`)
    }
    const parsed = yaml.safeLoad(contents) as Partial<ManifestData>
    return new this(parsed)
  }

  public async glob({ basedir }: GlobOptions): Promise<GlobResult> {
    const matchEverything = ['**/*', '**/.?*', '!.git/**/*']
    const allPaths = await globby(matchEverything, { cwd: basedir, dot: true })
    const allPathsRespectingGitignore = await globby(matchEverything, {
      cwd: basedir,
      dot: true,
      gitignore: true,
    })
    const gitignoredPaths = Array.from(
      new BetterSet(allPaths).complement(
        new BetterSet(allPathsRespectingGitignore)
      )
    )
    return { allPaths, gitignoredPaths }
  }

  public match(
    {
      allPaths: allPathsArray,
      gitignoredPaths: gitignoredPathArray,
    }: GlobResult,
    { respectGitignore }: MatchOptions
  ): MatchResult {
    const match = (paths: BetterSet<string>, patterns: string[]) =>
      new BetterSet(multimatch(Array.from(paths), patterns, { dot: true }))

    const allPaths = new BetterSet(allPathsArray)
    const gitignoredPaths = new BetterSet(
      respectGitignore ? gitignoredPathArray : undefined
    )

    const pathsMatchingInclude = match(allPaths, this.manifestData.include)
    const pathsMatchingExclude = match(allPaths, this.manifestData.exclude)
    const pathsMatchingIncludeOverridingGitignore = match(
      allPaths,
      this.manifestData.includeOverridingGitignore
    )

    const toRename = new BetterSet(
      this.manifestData.rename.map(({ from }) => from)
    )

    const includedByManifest = pathsMatchingInclude
      .complement(toRename)
      .complement(pathsMatchingExclude)
      .complement(gitignoredPaths)

    const excludedByManifest = pathsMatchingInclude
      .complement(toRename)
      .intersection(pathsMatchingExclude)
      .complement(gitignoredPaths)

    const includedByManifestOverride = pathsMatchingIncludeOverridingGitignore
      .complement(toRename)
      .complement(excludedByManifest)
      .complement(includedByManifest)

    const excludedByGitignore = gitignoredPaths
      .complement(includedByManifestOverride)
      .intersection(pathsMatchingInclude.complement(toRename))

    const allNotInManifest = allPaths
      .complement(toRename)
      .complement(pathsMatchingInclude)
      .complement(pathsMatchingExclude)
      .complement(pathsMatchingIncludeOverridingGitignore)

    const notInManifest = allNotInManifest.complement(gitignoredPaths)

    const notInManifestAndGitignored = allNotInManifest.intersection(
      gitignoredPaths
    )

    return {
      toRename: Array.from(toRename),
      includedByManifest: Array.from(includedByManifest),
      excludedByManifest: Array.from(excludedByManifest),
      excludedByGitignore: Array.from(excludedByGitignore),
      includedByManifestOverride: Array.from(includedByManifestOverride),
      notInManifest: Array.from(notInManifest),
      gitignoredAndNotInManifest: Array.from(notInManifestAndGitignored),
    }
  }

  public static logMatches(
    matchResult: MatchResult,
    { verbose = false }: { verbose: boolean }
  ) {
    /* eslint-disable no-console */
    if (verbose) {
      ;[
        {
          label: 'Included by manifest',
          paths: matchResult.includedByManifest,
        },
        {
          label: 'Excluded by manifest',
          paths: matchResult.excludedByManifest,
        },
        {
          label: 'Excluded by gitignore',
          paths: matchResult.excludedByGitignore,
        },
        {
          label: 'Included by manifest override',
          paths: matchResult.includedByManifestOverride,
        },
        { label: 'Not in manifest', paths: matchResult.notInManifest },
        {
          label: 'Gitignored and not in manfiest',
          paths: matchResult.gitignoredAndNotInManifest,
        },
      ].forEach(({ label, paths }) => {
        console.log('\n')
        const formattedPaths = paths.length ? paths.join('\n') : '(none)'
        console.log([label, '='.repeat(40), formattedPaths].join('\n'))
      })
    } else {
      console.log(allIncludes(matchResult).join('\n'))
    }
    /* eslint-enable no-console */
  }

  /*
   * Check the renames declared in the manifest and return an array of error
   * messages. An empty array means no errors.
   */
  public checkRenames(
    { allPaths: allPathsArray }: GlobResult,
    matchResult: MatchResult
  ): string[] {
    const renameFrom = this.manifestData.rename.map(({ from }) => from)
    const missingSources = renameFrom.filter(
      from => !allPathsArray.includes(from)
    )

    const renameTo = this.manifestData.rename.map(({ to }) => to)
    const duplicateTargets = findDuplicates([
      ...allIncludes(matchResult),
      ...renameTo,
    ])

    return [
      ...missingSources.map(path => `Rename source is missing: ${path}`),
      ...duplicateTargets.map(
        path => `Rename target conflicts with a manifest include: ${path}`
      ),
    ]
  }

  public logRename({ verbose = false }: { verbose?: boolean }) {
    /* eslint-disable no-console */
    if (verbose) {
      console.log(['\n\nRename', '='.repeat(40)].join('\n'))
    }
    console.log(
      this.manifestData.rename
        .map(({ from, to }) => `${from} -> ${to}`)
        .join('\n')
    )
    /* eslint-enable no-console */
  }
}
