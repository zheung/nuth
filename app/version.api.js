import { readJSONSync } from '../lib/fs-extra.js';



export const method = 'get';
export const handle = () => {
	try {
		return readJSONSync('package.json', 'utf8').version;
	}
	catch {
		throw Error('读取版本失败');
	}
};
