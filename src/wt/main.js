import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import url from 'url';

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];

    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const workerPath = path.join(__dirname, 'worker.js');

    for (let i = 0; i < numCores; i++) {
        const worker = new Promise((resolve, reject) => {
            const worker = new Worker (workerPath, i);
            worker.once('message', (data) => { 
                resolve({status: 'resolved', data}); 
                worker.terminate();
            });
            worker.once('error', (_) => { 
                resolve({status: 'error', data: null}); 
                worker.terminate(); 
            });
            worker.postMessage(i + 10);
        });
        workers.push(worker);
    }

    await Promise.all(workers).then((data) => { 
        console.log(data);
    });
};

await performCalculations();