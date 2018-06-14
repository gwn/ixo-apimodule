const bip39 = require('bip39');
const sovrin = require('sovrin-did');
const crypto = require('crypto');
const base58 = require('bs58');
const EC = require('elliptic').ec;
const hash = require('json-hash');

class CryptoUtil {
    generateMnemonic() {
        return bip39.generateMnemonic();
    }

    generateSovrinDID(mnemonic: string) {
        const seed = crypto.createHash('sha256').update(mnemonic).digest("hex");

        // Convert SHA256 hash to Uint8Array
        var didSeed = new Uint8Array(32);
        for (var i = 0; i < 32; ++i) {
            didSeed[i] = parseInt(seed.substring(i * 2, i * 2 + 2), 16)
        }

        // Create the Sovrin DID
        return sovrin.fromSeed(didSeed);
    }

    getDocumentSignature(privateKey: string, publicKey: string, inputFile: string) {
        return base58.encode(sovrin.signMessage(new Buffer(JSON.stringify(inputFile)), privateKey, publicKey));
    }

    verifyDocumentSignature(signature: string, publicKey: string) {
        return !(sovrin.verifySignedMessage(base58.decode(signature), publicKey) === false);
    }

    generateEcdsaKeyPair() {
        var ec = new EC('secp256k1');
        return ec.genKeyPair();
    }

    signPayloadUsingEcdsaKey(payload: any, ecdsaKey: any) {
        var payloadHash = hash.digest(payload);
        return ecdsaKey.sign(payloadHash);
    }

    verifyEcdsaSignature(key: any, signature: any, payload: any): boolean {
        var derSignature = signature.toDER();
        var payloadHash = hash.digest(payload);
        return key.verify(payloadHash, derSignature);
    }

}

export default CryptoUtil;

