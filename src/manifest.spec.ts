import { promises as fs } from 'fs'
import * as pathLib from 'path'
import { expect } from 'chai'
import 'mocha'
import * as tmp from 'tmp-promise'
import Manifest, { ManifestData } from './manifest'
import yaml from 'js-yaml'
import { createDirForTargetFile } from './fs'
import {
  exampleManifestData,
  examplePaths,
  examplePathsWithoutGlobalIgnores,
  exampleGitignore,
  expectedGitignoredPaths,
  globResult,
  expectedMatchResult,
} from './test-fixtures'

async function createExampleTree(targetPath: string) {
  for (const examplePath of examplePaths) {
    const target = pathLib.join(targetPath, examplePath)
    await createDirForTargetFile(target)
    await fs.writeFile(target, '', 'utf8')
  }
}

describe('Manifest', () => {
  describe('validation', () => {
    it('accepts valid input', () => {
      expect(() => new Manifest({})).not.to.throw()
      expect(
        () =>
          new Manifest({
            include: ['vg/**/*.py'],
          })
      ).not.to.throw()
      expect(() => new Manifest(exampleManifestData)).not.to.throw()
    })

    it('rejects invalid input', () => {
      expect(
        () =>
          new Manifest(({
            bogus: 'foo',
          } as unknown) as ManifestData)
      ).to.throw('"bogus" is not allowed')
    })
  })

  describe('load()', () => {
    it('loads yaml manifest', () =>
      tmp.withFile(async ({ path }) => {
        await fs.writeFile(path, yaml.safeDump(exampleManifestData), 'utf8')
        const manifest = await Manifest.load(path)
        expect(manifest.manifestData).to.deep.include(exampleManifestData)
      }))
  })

  describe('glob()', () => {
    let path: string
    let cleanup: () => void
    beforeEach(async () => {
      ;({ path, cleanup } = await tmp.dir({
        unsafeCleanup: true,
      }))
      await createExampleTree(path)
    })
    afterEach(() => cleanup())

    let manifest: Manifest
    beforeEach(() => {
      manifest = new Manifest(exampleManifestData)
    })

    context('when gitignore is empty', () => {
      it('globs all files', async () => {
        const { allPaths, gitignoredPaths } = await manifest.glob({
          basedir: path,
        })
        expect(allPaths).to.have.members(examplePathsWithoutGlobalIgnores)
        expect(gitignoredPaths).to.have.members([])
      })
    })

    context('when gitignore is not empty', () => {
      beforeEach(async () => {
        await fs.writeFile(
          pathLib.join(path, '.gitignore'),
          exampleGitignore,
          'utf8'
        )
      })

      it('globs all files and identifies ignored files', async () => {
        const { allPaths, gitignoredPaths } = await manifest.glob({
          basedir: path,
        })
        expect(allPaths).to.have.members(examplePathsWithoutGlobalIgnores)
        expect(gitignoredPaths).to.have.members(expectedGitignoredPaths)
      })
    })
  })

  describe('match()', () => {
    let manifest: Manifest
    beforeEach(() => {
      manifest = new Manifest(exampleManifestData)
    })

    context('respectGitignore is true', () => {
      it('each file is listed on exactly one list', () => {
        const {
          includedByManifest,
          excludedByManifest,
          excludedByGitignore,
          includedByManifestOverride,
          notInManifest,
          gitignoredAndNotInManifest,
        } = manifest.match(globResult, { respectGitignore: true })

        const allFiles = [
          ...includedByManifest,
          ...excludedByManifest,
          ...excludedByGitignore,
          ...includedByManifestOverride,
          ...notInManifest,
          ...gitignoredAndNotInManifest,
        ]

        expect(allFiles).to.have.members(examplePathsWithoutGlobalIgnores)
      })

      it('produces the expected result', () => {
        expect(
          manifest.match(globResult, { respectGitignore: true })
        ).to.deep.equal(expectedMatchResult)
      })
    })
  })
})
