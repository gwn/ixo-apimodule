"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
var Utils = /** @class */ (function () {
    function Utils(config) {
        this.config = config;
    }
    Utils.prototype.getSignData = function (data, msgType, pubKey) {
        var msgJson = JSON.stringify({ type: msgType, value: data });
        var msgUppercaseHex = new Buffer(msgJson).toString('hex').toUpperCase();
        var postFormat = { msg: msgUppercaseHex, pub_key: pubKey };
        return http_1.sendPostJSON(this.config.getBlockSyncUrl() + '/api/sign_data', postFormat);
    };
    return Utils;
}());
exports.default = Utils;
