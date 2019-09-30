import { promises as fs, constants as fsConstants } from 'fs'
import * as pathLib from 'path'
import del from 'del'

export async function createDirForTargetFile(dst: string) {
  await fs.mkdir(pathLib.dirname(dst), {
    recursive: true,
  })
}

export async function copyFile(src: string, dst: string) {
  await createDirForTargetFile(dst)
  await fs.copyFile(src, dst, fsConstants.COPYFILE_EXCL)
}

export async function cleanGitRepo(target: string) {
  await del(
    [
      pathLib.join(target, '*'),
      pathLib.join(target, '.*'),
      `!${pathLib.join(target, '.git')}`,
    ],
    { force: true }
  )
}
