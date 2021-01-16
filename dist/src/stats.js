"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./utils/http");
var Stats = /** @class */ (function () {
    function Stats(config) {
        this.config = config;
    }
    Stats.prototype.getGlobalStats = function () {
        return http_1.sendGetJSON(this.config.getBlockSyncUrl() + '/api/stats/listStats');
    };
    return Stats;
}());
exports.default = Stats;
