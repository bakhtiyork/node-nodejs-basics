import fs from 'fs';
import path from 'path';
import url from 'url';
import zlib from 'zlib';

const decompress = async () => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archivePath = path.join(__dirname, 'files', 'archive.gz');

    const readStream = fs.createReadStream(archivePath);
    const writeStream = fs.createWriteStream(filePath);
    const gunzipStream = zlib.createGunzip();
    readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();