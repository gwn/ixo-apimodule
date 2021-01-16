declare class Config {
    BLOCK_SYNC_URL: string;
    constructor(BLOCK_SYNC_URL: string);
    getBlockSyncUrl(): string;
}
export default Config;
