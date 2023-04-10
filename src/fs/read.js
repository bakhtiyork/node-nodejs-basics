import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const read = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    if (!existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    const contents = await fs.readFile(filePath, 'utf8');
    console.log(contents);
};

await read();