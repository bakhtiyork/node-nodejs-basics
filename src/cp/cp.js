import { spawn } from 'child_process';
import path from 'path';
import url from 'url';

const spawnChildProcess = async (args) => {
    let __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const scriptPath = path.join(__dirname, 'files', 'script.js');
    const child = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', 'inherit', 'ipc'] });
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
