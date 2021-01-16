import Network from './src/network';
import Project from './src/project';
import Agent from './src/agent';
import Claim from './src/claim';
import User from './src/user';
import Stats from './src/stats';
import Config from './src/config';
import Utils from './src/utils/utils';
export declare class Ixo {
    network: Network;
    project: Project;
    agent: Agent;
    claim: Claim;
    user: User;
    stats: Stats;
    config: Config;
    utils: Utils;
    constructor(BLOCK_SYNC_URL: string);
}
