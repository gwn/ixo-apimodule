import Config from "../config";
declare class Utils {
    config: Config;
    constructor(config: Config);
    getSignData(data: any, msgType: string, pubKey: string): Promise<any>;
}
export default Utils;
