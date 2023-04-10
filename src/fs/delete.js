import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const remove = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    if (!existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    await fs.unlink(filePath);
};

await remove();