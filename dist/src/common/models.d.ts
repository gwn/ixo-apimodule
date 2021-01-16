export interface IPingIxoNode {
    status: string;
}
export interface IDictionary<T> {
    [key: string]: T;
}
export interface ISovrinDidModel {
    did: string;
    verifyKey: string;
    encryptionPublicKey: string;
    secret: ISovrinDidSecretModel;
}
export interface ISovrinDidSecretModel {
    seed: string;
    signKey: string;
    encryptionPrivateKey: string;
}
export interface ICredentialProviderResult {
    provider: any;
    credentialProviderInstance: any;
}
export declare class Signature {
    type: string;
    created: Date | string;
    creator: string;
    signatureValue: string;
    publicKey: string;
    constructor(type: string, created: Date, did: string, publicKey: string, signatureValue: string);
}
export interface IxoCredentialProvider {
    sign(dataToSign: any, templateName?: string): Promise<Signature>;
    getDid(): string;
}
