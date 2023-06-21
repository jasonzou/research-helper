/************************************************
 * :last read/modified: 2023-06-21 [by jason]
 */

import { db, AppState } from '../database';
import { join, dirname, basename, documentDir } from '@tauri-apps/api/path';
import {
  createDir,
  removeDir,
  writeTextFile,
  writeBinaryFile,
  removeFile,
  renameFile as reFile,
  copyFile as cpFile,
} from '@tauri-apps/api/fs';

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
    const dir = await documentDir();
    let projectPath = join(dir, projectId);
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
    const dir = await documentDir();
    let projectPath = join(dir, projectId);
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
