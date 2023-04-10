import fs from 'fs';
import path from 'path';
import url from 'url';

const read = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(process.stdout);
};

await read();