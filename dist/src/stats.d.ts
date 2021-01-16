import Config from './config';
declare class Stats {
    config: Config;
    constructor(config: Config);
    getGlobalStats(): Promise<any>;
}
export default Stats;
