import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const create = async () => {
    const filename = 'fresh.txt';
    const content = 'I am fresh and young';

    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', filename);

    if (existsSync(filePath)) {
      throw new Error('FS operation failed');
    };
    
    await fs.writeFile(filePath, content); 
};

await create();