"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./common/util");
var http_1 = require("./utils/http");
var Claim = /** @class */ (function () {
    function Claim() {
    }
    Claim.prototype.createClaim = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('submitClaim', 'submit_claim', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Claim.prototype.evaluateClaim = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('evaluateClaim', 'evaluate_claim', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Claim.prototype.listClaimsForProject = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('listClaims', 'list_claim', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    return Claim;
}());
exports.default = Claim;
