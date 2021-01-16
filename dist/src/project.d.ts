import { Signature } from './common/models';
import Config from './config';
declare class Project {
    config: Config;
    constructor(config: Config);
    listProjects(): Promise<any>;
    getProjectByProjectDid(projectDid: any): Promise<any>;
    getProjectByUserDid(senderDid: any): Promise<any>;
    createProject(data: any, signature: Signature, PDSUrl: string): Promise<any>;
    updateProjectStatus(data: any, signature: Signature, PDSUrl: string): Promise<any>;
    fundProject(data: any, signature: Signature, PDSUrl: string): Promise<any>;
    createPublic(source: any, PDSUrl: string): Promise<unknown>;
    fetchPublic(key: any, PDSUrl: string): Promise<unknown>;
    generateWithdrawObjectJson: (data: any, signature: string, pubKey: string, fee: object) => {
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
    payOutToEthWallet(data: any, signature: Signature, fee: object, mode?: string): Promise<any>;
}
export default Project;
