import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const list = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const dirPath = path.join(__dirname, 'files');

    if (!existsSync(dirPath)) {
        throw new Error('FS operation failed');
    }

    const files = await fs.readdir(dirPath);
    console.log(files);
};

await list();