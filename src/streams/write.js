import fs from 'fs';
import path from 'path';
import url from 'url';

const write = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();