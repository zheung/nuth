import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';



const dirSelf = dirname(fileURLToPath(import.meta.url));


export const dirPackage = resolve(dirSelf, '..', '..');


export const dirData = resolve(dirPackage, 'data');
export const dirDist = resolve(dirPackage, 'dist');
