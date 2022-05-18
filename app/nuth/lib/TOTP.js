import TOTP from 'totp-generator';



const CHARS_STEAM = '23456789BCDFGHJKMNPQRTVWXY';
const SIZE_CHARS = CHARS_STEAM.length;


export default function totp(key, isOutStream = false) {
	let code = TOTP(key, { digits: isOutStream ? 10 : 6 });


	if(!isOutStream) { return code; }


	const digests = [];
	for(let i = 0; i < 5; i++) {
		const index = code % SIZE_CHARS;

		digests.push(CHARS_STEAM[index]);

		code = Math.trunc(code / SIZE_CHARS);
	}

	return digests.join('');
}
