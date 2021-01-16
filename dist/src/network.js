"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = require("cross-fetch");
var Network = /** @class */ (function () {
    function Network(config) {
        this.config = config;
    }
    Network.prototype.pingIxoExplorer = function () {
        return cross_fetch_1.default(this.config.getBlockSyncUrl())
            .then(function (response) {
            return response.text();
        })
            .catch(function (error) {
            return error;
        });
    };
    return Network;
}());
exports.default = Network;
