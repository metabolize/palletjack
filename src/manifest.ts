import { promises as fs } from 'fs'
import BetterSet from 'betterset'
import Joi from '@hapi/joi'
import globby from 'globby'
import multimatch from 'multimatch'
import yaml from 'js-yaml'

export interface ManifestData {
  readonly include: string[]
  readonly exclude: string[]
  readonly includeOverridingGitignore: string[]
}

export interface MatchOptions {
  respectGitignore?: boolean
}

export interface MatchResult {
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

export default class Manifest {
  public readonly include: string[]
  public readonly exclude: string[]
  public readonly includeOverridingGitignore: string[]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static validateManifestContents(contents: any): ManifestData {
    const optionalPatternArraySchema = Joi.array()
      .items(Joi.string().required())
      .default([])
    const schema = Joi.object({
      include: optionalPatternArraySchema,
      exclude: optionalPatternArraySchema,
      includeOverridingGitignore: optionalPatternArraySchema,
    }).required()
    return Joi.attempt(contents, schema)
  }

  public constructor(contents: Partial<ManifestData>) {
    const {
      include,
      exclude,
      includeOverridingGitignore,
    } = Manifest.validateManifestContents(contents)

    this.include = include
    this.exclude = exclude
    this.includeOverridingGitignore = includeOverridingGitignore
  }

  public static async load(manifestPath: string): Promise<Manifest> {
    let contents: string
    try {
      contents = await fs.readFile(manifestPath, 'utf8')
    } catch (e) {
      throw Error(`Unable to load manifest file: ${e.message}`)
    }
    const parsed = yaml.safeLoad(contents)
    return new this(parsed)
  }

  public async glob({ basedir }: GlobOptions): Promise<GlobResult> {
    const matchEverything = ['**/*', '**/.?*']
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

    const pathsMatchingInclude = match(allPaths, this.include)
    const pathsMatchingExclude = match(allPaths, this.exclude)
    const pathsMatchingIncludeOverridingGitignore = match(
      allPaths,
      this.includeOverridingGitignore
    )

    const includedByManifest = pathsMatchingInclude
      .complement(pathsMatchingExclude)
      .complement(gitignoredPaths)

    const excludedByManifest = pathsMatchingInclude
      .intersection(pathsMatchingExclude)
      .complement(gitignoredPaths)

    const includedByManifestOverride = pathsMatchingIncludeOverridingGitignore
      .complement(excludedByManifest)
      .complement(includedByManifest)

    const excludedByGitignore = gitignoredPaths
      .complement(includedByManifestOverride)
      .intersection(pathsMatchingInclude)

    const allNotInManifest = allPaths
      .complement(pathsMatchingInclude)
      .complement(pathsMatchingExclude)
      .complement(pathsMatchingIncludeOverridingGitignore)

    const notInManifestAndGitignored = allNotInManifest.complement(
      gitignoredPaths
    )

    const notInManifest = allNotInManifest.intersection(gitignoredPaths)

    return {
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
        console.log([label, '='.repeat(40), paths.join('\n')].join('\n'))
      })
    } else {
      const { includedByManifest, includedByManifestOverride } = matchResult
      const allIncludes = [...includedByManifest, ...includedByManifestOverride]
      console.log(allIncludes.join('\n'))
    }
    /* eslint-enable no-console */
  }
}
