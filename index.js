import { writeFileSync } from 'fs';

import C from './lib/global/config.js';

import encrypt from './lib/encrypt.js';
import { resolve } from 'path';
import { dirPackage } from './lib/global/dir.js';



writeFileSync(resolve(dirPackage, 'app', 'public', 'data'), encrypt(JSON.stringify(C.data), C.auth));
