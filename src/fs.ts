import { promises as fs, constants as fsConstants } from 'fs'
import * as pathLib from 'path'

export async function createDirForTargetFile(dst: string) {
  await fs.mkdir(pathLib.dirname(dst), {
    recursive: true,
  })
}

export async function copyFile(src: string, dst: string) {
  await createDirForTargetFile(dst)
  await fs.copyFile(src, dst, fsConstants.COPYFILE_EXCL)
}
