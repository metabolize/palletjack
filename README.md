# palletjack

[![version](https://img.shields.io/npm/v/palletjack.svg?style=flat-square)][npm]
[![license](https://img.shields.io/npm/l/palletjack.svg?style=flat-square)][npm]
[![build](https://img.shields.io/circleci/project/github/metabolize/palletjack.svg?style=flat-square)][build]
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)][prettier]

[npm]: https://npmjs.com/palletjack/
[build]: https://circleci.com/gh/metabolize/palletjack/tree/main
[prettier]: https://prettier.io/

Pack up files for distribution using a manifest file of glob patterns and a gitignore.

**This project is experimental! It may not work perfectly, and the CLI will change.**

Example manifest for a Python project:

```yml
include:
  - .dockerignore
  - LICENSE
  - MANIFEST.in
  - CHANGELOG.md
  - requirements.txt
  - setup.py
  - docker/standalone/*
  - mylib/**/*.py
  - mylib/extension/**/*.{h,cc,i}
  - examples/asset.obj
  - scripts/run_simulation.py

exclude:
  - '**/test_*.py'
  - mylib/testing_helpers.py
  - mylib/internal_diagnostics.py

rename:
  - from: README-client.md
    to: README.md
```

## Motivation

In my contracting work, I'm often shipping code to a client that is maintained
in an internal repository. The client needs the production code, client-facing
readme, and scripts. They _don't_ need my internal developer notes, CI config,
test assets, and so on. Generally they don't need all the gitignored bits, like
generated code, caches, and `.DS_Store`, though in certain cases I want to do
the code generation for them, and it _is_ important to ship a gitignored,
generated file.

It's easy enough to write a script to select certain files and copy them into
a tarball or another git repository.

As the project evolve and matures, new files are added, and it's important to
correctly classify them – for inclusion or exclusion.

This program does four things:

- Interpret a tree, manifest file of glob patterns, and a gitignore file into
  a list of included files.
- Show you the reason each matched file is included, and the reason each
  unmatched file was excluded. The output of `palletjack --verbose` includes
  five lists:
  - Included by manifest
  - Excluded by manifest
  - Included by manifest override
  - Not in manifest
  - Gitignored and not in manfiest
- Export a project to another folder, using the interpreted manifest file. When
  exporting to a Git repository, the contents of the working tree are replaced
  with the exported contents.
- Rename files during export. This is useful for having an internal readme
  that's different from the readme that gets shipped.

## Installation

Requires Node 10+.

Use without installing:

```console
npx palletjack --export outdir manifest.yml
```

Or install globally:

```console
npm install -g palletjack
```

## Contribute

Pull requests welcome!

## Development

Run `npm run dev` to start a development server which watches for changes in
the local files. Then you can run `/path/to/palletjack/dist/cli.js`, or with
sourcemap support:

```
node -r /path/to/palletjack/node_modules/source-map-support/register /path/to/palletjack/dist/cli.js
```

## License

The project is licensed under the MIT license.
