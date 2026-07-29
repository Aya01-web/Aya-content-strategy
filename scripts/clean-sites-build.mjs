import { rm } from 'node:fs/promises';
import { basename, resolve } from 'node:path';

const buildDirectory = resolve(import.meta.dirname, '..', 'dist');

if (basename(buildDirectory) !== 'dist') {
  throw new Error(`Refusing to clean unexpected build directory: ${buildDirectory}`);
}

await rm(buildDirectory, { recursive: true, force: true });
