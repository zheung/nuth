import { cryptico as Cryptico } from '@daotl/cryptico';



export default function decrypt(text, password) {
	const keyRSA = Cryptico.generateRSAKey(password, 1024);

	const result = Cryptico.decrypt(decodeURIComponent(text), keyRSA);


	if(result.status == 'failure') { throw '解密失败'; }


	return decodeURIComponent(result.plaintext);
}
