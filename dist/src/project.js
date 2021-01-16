"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./common/util");
var http_1 = require("./utils/http");
var base58 = require('bs58');
var Project = /** @class */ (function () {
    function Project(config) {
        this.generateWithdrawObjectJson = function (data, signature, pubKey, fee) {
            return {
                msg: [{ type: "project/WithdrawFunds", value: data }],
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
    Project.prototype.listProjects = function () {
        return http_1.sendGetJSON(this.config.getBlockSyncUrl() + '/api/project/listProjects');
    };
    Project.prototype.getProjectByProjectDid = function (projectDid) {
        return http_1.sendGetJSON(this.config.getBlockSyncUrl() + '/api/project/getByProjectDid/' + projectDid);
    };
    Project.prototype.getProjectByUserDid = function (senderDid) {
        var payload = { senderDid: senderDid };
        var request = util_1.constructPublicJsonRequest('listProjectBySenderDid', payload);
        return http_1.sendPostJSON(this.config.getBlockSyncUrl() + '/api/project/', request);
    };
    Project.prototype.createProject = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('createProject', 'create_project', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Project.prototype.updateProjectStatus = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('updateProjectStatus', 'project_status', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Project.prototype.fundProject = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonPartialSignRequest('fundProject', 'fund_project', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Project.prototype.createPublic = function (source, PDSUrl) {
        var srcParts = source.split(',');
        var data = srcParts[1];
        var contentType = srcParts[0].split(';')[0].split(':')[1];
        var payload = {
            data: data,
            contentType: contentType
        };
        var json = util_1.constructPublicJsonRequest('createPublic', payload);
        return http_1.sendPostJSON(PDSUrl + 'api/public', json);
    };
    Project.prototype.fetchPublic = function (key, PDSUrl) {
        var payload = {
            key: key
        };
        return new Promise(function (resolve, reject) {
            var json = util_1.constructPublicJsonRequest('fetchPublic', payload);
            http_1.sendPostJSON(PDSUrl + 'api/public', json)
                .then(function (response) {
                if (response.result.data) {
                    var obj = {
                        data: response.result.data,
                        contentType: response.result.contentType
                    };
                    resolve(obj);
                }
                else {
                    reject(null);
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    Project.prototype.payOutToEthWallet = function (data, signature, fee, mode) {
        var signatureValue = signature.signatureValue, publicKey = signature.publicKey;
        var tx = this.generateWithdrawObjectJson(data, signatureValue, publicKey, fee);
        return http_1.sendPostJSON(this.config.getBlockSyncUrl() + '/api/blockchain/txs', {
            tx: tx,
            mode: mode || "block"
        });
    };
    return Project;
}());
exports.default = Project;
