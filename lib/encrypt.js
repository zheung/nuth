import Cryptico from 'cryptico';



export default function encrypt(data, key) {
	const keyRSA = Cryptico.generateRSAKey(key, 1024);


	return encodeURIComponent(Cryptico.encrypt(
		encodeURIComponent(data),
		Cryptico.publicKeyString(keyRSA)
	).cipher);
}
