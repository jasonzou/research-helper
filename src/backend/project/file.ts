import { db, AppState } from '../database';
import { join, dirname, basename, appDataDir, appLocalDataDir } from '@tauri-apps/api/path';
import { createDir, removeDir, writeTextFile, writeBinaryFile, removeFile, renameFile as reFile, copyFile as cpFile } from '@tauri-apps/api/fs';

// const path = window.path;
// const fs = window.fs;

/**
 * Get storagePath from database
 * @returns storagePath
 */
async function storagePath(): Promise<string> {
  let state: AppState = await db.get('appState');
  return state.settings.storagePath;
}

/**
 * Create project folder in storage path
 * @param projectId
 */
async function createProjectFolder(projectId: string) {
  try {
    const appDataDirPath = await appDataDir();
    const dir = await dirname(appDataDirPath);
    console.log(dir);
    console.log('ooooooooooooooops')
    const appLocalDataDirPath = await appLocalDataDir();
    const dir1 = await dirname(appLocalDataDirPath);
    console.log(dir1);
    console.log('ooooooooooooooo--------------------ps')
    let projectPath = join(dir, 'app', 'data', projectId);
    console.log(projectPath);
    await createDir(await projectPath);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Delete the project folder in storage path
 * @param projectId
 */
async function deleteProjectFolder(projectId: string) {
  try {
    let dirPath = join(await storagePath(), projectId);
    removeDir(dirPath, { recursive: true });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Copy file to the corresponding project folder and returns the new file path
 * @param srcPath
 * @param projectId
 * @returns dstPath
 */
async function copyFile(
  srcPath: string,
  projectId: string
): Promise<string | undefined> {
  try {
    let fileName = basename(srcPath);
    console.log("________________________")
    console.log(fileName);
    const appDataDirPath = await appDataDir();
    const dir = await dirname(appDataDirPath);
    console.log(dir);
    console.log('ooooooo-=-=-=-=-===--oooooooops')
    let projectPath = join(dir, 'app', 'data', projectId);
    console.log(projectPath);
    let dstPath = join(await projectPath, await fileName);
    cpFile(srcPath, await dstPath);
    return dstPath;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Create a file inside project folder
 * @param projectId
 * @param fileName - the created file's name
 * @returns filePath - the created file's path
 */
async function createFile(
  projectId: string,
  fileName: string
): Promise<string | undefined> {
  try {
    if (!path || !fs) return;
    let filePath = join(await storagePath(), projectId, fileName);
    writeTextFile(filePath);
    return filePath;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Delete file
 * @param filePath
 */
function deleteFile(filePath: string) {
  try {
    if (!fs) return;
    // we can ignore this error since rmSync is there
    removeFile(filePath);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Rename a file
 * @param filePath - path to file
 * @param fileName - new file name
 */
function renameFile(filePath: string, fileName: string) {
  try {
    let dirname1 = dirname(filePath);
    let newPath = join(dirname1, fileName.replace('/', ''));
    reFile(filePath, newPath);
    return newPath;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Move folder
 * @param srcPath source path
 * @param dstPath destination path
 */
function changePath(srcPath: string, dstPath: string): Error | undefined {
  try {
    if (!fs) return;
    createDir(dstPath);
    // copy all content from srcPath to dstPath
    removeDir(srcPath);
  } catch (error) {
    console.log(error);
    return error as Error;
  }
}

export {
  createProjectFolder,
  deleteProjectFolder,
  copyFile,
  createFile,
  deleteFile,
  renameFile,
  changePath,
};
