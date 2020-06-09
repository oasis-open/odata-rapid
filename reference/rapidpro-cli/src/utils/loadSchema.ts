import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

/**
 * Loads the schema text from the model directory
 *
 * @export
 * @param {string} modelDir
 * @returns {string}
 */
export function loadSchema(rsdl: string): string {
    const modelPath = join(process.cwd(), rsdl);
    if (existsSync(modelPath)) {
        return readFileSync(modelPath, 'utf8');
    }

    return "";
}