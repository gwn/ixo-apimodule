import { Signature } from './common/models';
import Config from './config';
declare class User {
    config: Config;
    constructor(config: Config);
    generateLedgerObjectJson: (didDoc: any, signature: string, pubKey: string, fee: object) => {
        msg: {
            type: string;
            value: any;
        }[];
        fee: object;
        signatures: {
            signature: string;
            pub_key: {
                type: string;
                value: any;
            };
        }[];
    };
    registerUserDid(data: any, signature: Signature, fee: object, mode?: string): Promise<any>;
    getDidDoc(did: string): Promise<unknown>;
}
export default User;
