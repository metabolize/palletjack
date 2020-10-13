#!/usr/bin/env ts-node-script

'use strict'

import { ArgumentParser } from 'argparse'
import Manifest, { MatchResult } from './manifest'
import Archive from './archive'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json')

export default async function main(inArgs?: string[]) {
  // TODO Improve this interface using subcommands.
  const parser = new ArgumentParser({
    version,
    prog: 'palletjack',
    description: 'Zip paths using globs from a manifest file',
  })
  parser.addArgument(['--export'], {
    help: 'Perform the export',
    metavar: 'TARGET',
  })
  parser.addArgument(['--overwrite'], {
    help: 'Overwrite target even if it already exists',
    action: 'storeTrue',
  })
  parser.addArgument(['--basedir'], {
    help: 'Base directory (default to .)',
  })
  parser.addArgument(['--verbose'], {
    help: 'Be extra verbose',
    action: 'storeTrue',
  })
  parser.addArgument('manifest', {
    help: 'Path to a yaml file containing glob patterns',
  })

  const args = parser.parseArgs(inArgs)

  const manifest = await Manifest.load(args.manifest)
  const archive = new Archive({
    manifest,
    basedir: args.basedir || undefined,
    overwrite: args.overwrite,
  })
  await archive.collectPaths()

  if (archive.renameErrors && archive.renameErrors.length) {
    // eslint-disable-next-line no-console
    console.error(archive.renameErrors)
    process.exit(1)
  }

  if (args.export) {
    if (args.verbose) {
      Manifest.logMatches(archive.matchResult as MatchResult, {
        verbose: true,
      })
      manifest.logRename({ verbose: true })
    }
    await archive.export(args.export, { verbose: args.verbose })
  } else {
    Manifest.logMatches(archive.matchResult as MatchResult, {
      verbose: args.verbose,
    })
    manifest.logRename({ verbose: args.verbose })
  }
}

if (require.main === module) {
  ;(async () => {
    try {
      await main()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      process.exit(1)
    }
  })()
}
