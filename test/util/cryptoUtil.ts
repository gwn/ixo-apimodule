import {ISovrinDidModel} from '../../src/common/models';

const sovrin = require('sovrin-did');

class CryptoUtil {
  getSignatureFromSignatureValue(sovrinDid: ISovrinDidModel, signatureValue: any) {
    return {
      type: 'ed25519-sha-256',
      created: new Date(),
      creator: sovrinDid.did,
      publicKey: sovrinDid.encryptionPublicKey,
      signatureValue: Buffer.from(signatureValue)
        .slice(0, 64)
        .toString('base64')
    };
  }

  getSignatureForPayload(sovrinDid: ISovrinDidModel, payload: object) {
    const payloadSig = sovrin.signMessage(JSON.stringify(payload), sovrinDid.secret.signKey, sovrinDid.verifyKey);
    return this.getSignatureFromSignatureValue(sovrinDid, payloadSig)
  }

  getSignatureForSignBytes(sovrinDid: ISovrinDidModel, signBytes: string) {
    const signBytesSig = sovrin.signMessage(signBytes, sovrinDid.secret.signKey, sovrinDid.verifyKey);
    return this.getSignatureFromSignatureValue(sovrinDid, signBytesSig)
  }
}

export default CryptoUtil;
