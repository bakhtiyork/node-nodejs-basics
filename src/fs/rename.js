import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const rename = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destPath = path.join(__dirname, 'files', 'properFilename.md');

    if (!existsSync(sourcePath) || existsSync(destPath)) {
        throw new Error('FS operation failed');
    }

    await fs.rename(sourcePath, destPath);
};

await rename();