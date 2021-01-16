"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./utils/http");
var base58 = require('bs58');
var User = /** @class */ (function () {
    function User(config) {
        this.generateLedgerObjectJson = function (didDoc, signature, pubKey, fee) {
            return {
                msg: [{ type: "did/AddDid", value: didDoc }],
                fee: fee,
                signatures: [{
                        signature: signature,
                        pub_key: {
                            type: "tendermint/PubKeyEd25519",
                            value: base58.decode(pubKey).toString('base64'),
                        }
                    }]
                // memo: "this is an optional memo",
            };
        };
        this.config = config;
    }
    User.prototype.registerUserDid = function (data, signature, fee, mode) {
        var signatureValue = signature.signatureValue, publicKey = signature.publicKey;
        var tx = this.generateLedgerObjectJson(data, signatureValue, publicKey, fee);
        return http_1.sendPostJSON(this.config.getBlockSyncUrl() + '/api/blockchain/txs', {
            tx: tx,
            mode: mode || "block"
        });
    };
    User.prototype.getDidDoc = function (did) {
        return http_1.sendGetJSON(this.config.getBlockSyncUrl() + '/api/did/getByDid/' + did);
    };
    return User;
}());
exports.default = User;
