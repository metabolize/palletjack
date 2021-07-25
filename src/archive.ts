import * as pathLib from 'path'
import { promises as fs } from 'fs'
import del from 'del'
import Manifest, { GlobResult, MatchResult } from './manifest.js'
import { copyFile, cleanGitRepo } from './fs.js'

interface ArchiveOptions {
  manifest: Manifest
  respectGitignore?: boolean
  basedir?: string
  overwrite?: boolean
}

export default class Archive {
  private readonly manifest: Manifest
  private readonly respectGitignore: boolean
  private readonly basedir: string
  private readonly overwrite: boolean

  public globResult?: GlobResult
  public matchResult?: MatchResult
  public renameErrors?: string[]

  public constructor({
    manifest,
    respectGitignore = true,
    basedir = '.',
    overwrite = false,
  }: ArchiveOptions) {
    this.manifest = manifest
    this.respectGitignore = respectGitignore
    this.basedir = basedir
    this.overwrite = overwrite
  }

  public async collectPaths(): Promise<void> {
    const { respectGitignore, basedir } = this
    this.globResult = await this.manifest.glob({ basedir })
    this.matchResult = this.manifest.match(this.globResult, {
      respectGitignore,
    })
    this.renameErrors = this.manifest.checkRenames(
      this.globResult,
      this.matchResult
    )
  }

  private async getMatchResult(): Promise<MatchResult> {
    if (!this.matchResult) {
      await this.collectPaths()
    }
    return this.matchResult as MatchResult
  }

  public async export(
    target: string,
    { verbose = true }: { verbose: boolean }
  ): Promise<void> {
    const { overwrite, basedir } = this

    const { includedByManifest, includedByManifestOverride } =
      await this.getMatchResult()
    const allIncludes = [...includedByManifest, ...includedByManifestOverride]

    let isDirectory
    try {
      isDirectory = (await fs.lstat(target)).isDirectory()
    } catch (e) {
      if (e.code === 'ENOENT') {
        isDirectory = false
      } else {
        throw e
      }
    }

    if (isDirectory) {
      const contents = await fs.readdir(target)
      if (contents.length > 0) {
        const isGitRepo = contents.includes('.git')
        if (isGitRepo) {
          await cleanGitRepo(target)
        } else if (overwrite) {
          await del(target, { force: true })
        } else {
          throw Error(
            `Target directory ${target} exists and is not empty. Delete it yourself, pick a non-existent directory, or use --overwrite.`
          )
        }
      }
    } else {
      await fs.mkdir(target, { recursive: true })
    }

    for (const path of allIncludes) {
      const src = pathLib.join(basedir, path)
      const dst = pathLib.join(target, path)
      await copyFile(src, dst)
      if (verbose) {
        // eslint-disable-next-line no-console
        console.log(`${src} -> ${dst}`)
      }
    }

    for (const rename of this.manifest.manifestData.rename) {
      const src = pathLib.join(basedir, rename.from)
      const dst = pathLib.join(target, rename.to)
      await copyFile(src, dst)
      if (verbose) {
        // eslint-disable-next-line no-console
        console.log(`${src} -> ${dst}`)
      }
    }
  }
}
