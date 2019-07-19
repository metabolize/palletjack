# palletjack

[![version](https://img.shields.io/npm/v/palletjack.svg?style=flat-square)][npm]
[![license](https://img.shields.io/npm/l/palletjack.svg?style=flat-square)][npm]
[![build](https://img.shields.io/circleci/project/github/metabolize/palletjack.svg?style=flat-square)][build]
[![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)][prettier]

[npm]: https://npmjs.com/palletjack/
[build]: https://circleci.com/gh/metabolize/palletjack/tree/master
[prettier]: https://prettier.io/

Pack up files for distribution with patterns from a manifest file.

In my contracting work, I'm often shipping code to a client that is maintained
in an internal repository. The client needs the production code, client-facing
readme, and scripts. They _don't_ need my internal developer notes, CI config,
test assets, and so on. They also don't need all the gitignored bits, like
generated code, caches, and .DS*Store, though occasionally it \_is* important to
ship a gitignored, generated file.

It's easy enough to write a script to select certain files and copy them into
a tarball or another git repository.

As the project evolve and matures, new files are added, and it's important to
correctly classify them – for inclusion or exclusion.

This program does three things:

- Interpret a tree, manifest file of glob patterns, and a gitignore file into a
  list of included files.
- Show you the reason each matched file is included, and the reason each unmatched
  file was excluded. The output of `palletjack --verbose` includes five lists:
  - Included by manifest
  - Excluded by manifest
  - Included by manifest override
  - Not in manifest
  - Gitignored and not in manfiest
- Export a project to another folder, using the interpreted manifest file.

**This project is experimental! It may not work perfectly, and the CLI will change.**

```console
npx palletjack manifest outdir
```

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
the local files. Then you can run `node /path/to/palletjack/dist/cli.js`.

## License

The project is licensed under the MIT license.
