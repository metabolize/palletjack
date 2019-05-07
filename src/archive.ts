import * as pathLib from 'path'
import { promises as fs } from 'fs'
import del from 'del'
import Manifest, { GlobResult, MatchResult } from './manifest'

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

  public async collectPaths() {
    const { respectGitignore, basedir } = this
    this.globResult = await this.manifest.glob({ basedir })
    this.matchResult = this.manifest.match(this.globResult, {
      respectGitignore,
    })
  }

  private async getMatchResult() {
    if (!this.matchResult) {
      await this.collectPaths()
    }
    return this.matchResult as MatchResult
  }

  public async export(target: string) {
    const { overwrite, basedir } = this

    const {
      includedByManifest,
      includedByManifestOverride,
    } = await this.getMatchResult()
    const allIncludes = [...includedByManifest, ...includedByManifestOverride]

    if ((await fs.lstat(target)).isDirectory()) {
      if ((await fs.readdir(target)).length > 0) {
        if (overwrite) {
          await del(target)
        } else {
          throw Error(
            `Target directory ${target} exists and is not empty. Delete it yourself, pick a non-existent directory, or use --overwrite.`
          )
        }
      }
    } else {
      await fs.mkdir(target, { recursive: true })
    }

    for (const path in allIncludes) {
      const src = pathLib.join(basedir, path)
      const dst = pathLib.join(target, path)
      // TODO Perform the copy
      console.log(`${src} -> ${dst}`)
    }
  }
}
