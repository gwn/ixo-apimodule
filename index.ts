import Network from './src/network';
import CryptoUtil from './src/cryptoUtil';
import Project from './src/project';
import Agent from './src/agent';
import Claim from './src/claim';
import { IxoCredentialProvider } from './src/common/models';
import Web3Provider from './src/providers/web3Provider';
import { resolveProvider } from './src/providers/providerResolver';

export class Ixo {
    credentialProvider: IxoCredentialProvider
    network: Network;
    cryptoUtil: CryptoUtil;
    project: Project;
    agent: Agent;
    claim: Claim;

    constructor(credentialProvider?: IxoCredentialProvider) {
        if (credentialProvider) {
            this.credentialProvider = credentialProvider;
        } else {
            this.credentialProvider = null
        }
        this.network = new Network(this);
        this.cryptoUtil = new CryptoUtil();
        this.project = new Project(this);
        this.agent = new Agent(this);
        this.claim = new Claim(this);
    }

    init(provider: any): Promise<any> {
        return new Promise((resolve, reject) => {
            resolveProvider(provider).then((provider: IxoCredentialProvider) => {
                this.credentialProvider = provider;
                return resolve(provider);
            }).catch((error: any) => {
                return reject(error);
            })
        })
    }
}

