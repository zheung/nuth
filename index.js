import { resolve } from 'path';

import Desire from '@nuogz/desire';

import './lib/global/init.js';
import { dirPackage } from './lib/global/dir.js';
import C from './lib/global/config.js';
import G from './lib/global/log.js';

import readRoute from './lib/route.js';



const { folds, faces } = await readRoute(resolve(dirPackage, 'app'));

new Desire({
	name: '服务',
	host: C.server.host,
	port: C.server.port,

	mare: {
		before: ['parseRaw'],
		after: ['toSuccess'],
	},

	facePrefix: '/api',

	faces,
	folds,

	logger: G,
}).start();
