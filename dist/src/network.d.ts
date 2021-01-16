import Config from './config';
declare class Network {
    config: Config;
    constructor(config: Config);
    pingIxoExplorer(): Promise<any>;
}
export default Network;
