import { existsSync } from 'fs';
import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const calculateHash = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    if (!existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    const fileContents = await fs.readFile(filePath);
    const hash = crypto.createHash('sha256').update(fileContents).digest('hex');
    console.log(hash);
};

await calculateHash();