import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

async function copyFolderRecursive(sourcePath, destPath) {
    await fs.mkdir(destPath);
    const files = await fs.readdir(sourcePath);
    for (const file of files) {
        const sourceFilePath = path.join(sourcePath, file);
        const destFilePath = path.join(destPath, file);
        const stats = await fs.stat(sourceFilePath);
        if (stats.isDirectory()) {
            await copyFolderRecursive(sourceFilePath, destFilePath);
        } else {
            fs.copyFile(sourceFilePath, destFilePath);
        }
    }
}

const copy = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, 'files');
    const destPath = path.join(__dirname, 'files_copy');

    if (!existsSync(sourcePath) || existsSync(destPath)) {
        throw new Error('FS operation failed');
    }

    await fs.mkdir(destPath);
    const files = await fs.readdir(sourcePath);
    
    for (const file of files) {
        const sourceFilePath = path.join(sourcePath, file);
        const destFilePath = path.join(destPath, file);
        const stats = await fs.stat(sourceFilePath);
        if (stats.isDirectory()) {
            await copyFolderRecursive(sourceFilePath, destFilePath);
        } else {
            fs.copyFile(sourceFilePath, destFilePath);
        }
    }
};

await copy();
