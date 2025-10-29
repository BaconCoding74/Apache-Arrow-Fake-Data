import { existsSync, mkdirSync, appendFileSync } from 'fs';
import { dirname } from 'path';

export const ensureDirExist = (dirPath: string) => {
    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
}

export const writeAppend = (filePath: string, text: string) => {
    // Ensure parent directory exists (dirname extract the directory part)
    ensureDirExist(dirname(filePath));

    // Append text to the file
    appendFileSync(filePath, `${text}\n`);
}
