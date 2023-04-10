import fs from 'fs';
import path from 'path';
import url from 'url';
import zlib from 'zlib';

const compress = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(archivePath);
    const gzipStream = zlib.createGzip();
    readStream.pipe(gzipStream).pipe(writeStream);
};

await compress();