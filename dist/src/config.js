"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config(BLOCK_SYNC_URL) {
        this.BLOCK_SYNC_URL = BLOCK_SYNC_URL;
    }
    Config.prototype.getBlockSyncUrl = function () {
        return this.BLOCK_SYNC_URL;
    };
    return Config;
}());
exports.default = Config;
