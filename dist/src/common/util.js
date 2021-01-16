"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPublicJsonRequest = exports.constructJsonRequest = exports.constructJsonPartialSignRequest = exports.constructJsonSignRequest = exports.generateJsonPayload = exports.generateTxnId = void 0;
function generateTxnId() {
    return Math.floor(Math.random() * 100000 + 1);
}
exports.generateTxnId = generateTxnId;
function generateJsonPayload(data, did, templateName) {
    var response = {
        did: did,
        data: data
    };
    if (templateName) {
        return JSON.stringify(__assign(__assign({}, response), { template: {
                name: templateName
            } }));
    }
    else {
        return JSON.stringify(response);
    }
}
exports.generateJsonPayload = generateJsonPayload;
function constructJsonSignRequest(method, templateName, signature, data) {
    var jsonRequest = {
        jsonrpc: '2.0',
        method: method,
        id: generateTxnId(),
        params: {
            payload: {
                data: data ? data : {}
            }
        }
    };
    if (templateName) {
        var jsonRequestTemp = __assign(__assign({}, jsonRequest), { params: __assign(__assign({}, jsonRequest.params), { payload: __assign(__assign({}, jsonRequest.params.payload), { template: { name: templateName } }) }) });
        jsonRequest = jsonRequestTemp;
    }
    if (signature) {
        var jsonRequestTemp2 = __assign(__assign({}, jsonRequest), { params: __assign(__assign({}, jsonRequest.params), { signature: {
                    type: signature.type,
                    created: signature.created,
                    creator: signature.creator,
                    signatureValue: signature.signatureValue
                } }) });
        jsonRequest = jsonRequestTemp2;
    }
    return jsonRequest;
}
exports.constructJsonSignRequest = constructJsonSignRequest;
function constructJsonPartialSignRequest(method, templateName, signature, data) {
    var jsonRequest = {
        jsonrpc: '2.0',
        method: method,
        id: generateTxnId(),
        params: {
            payload: {
                data: data ? data : {}
            }
        }
    };
    if (templateName) {
        var jsonRequestTemp = __assign(__assign({}, jsonRequest), { params: __assign(__assign({}, jsonRequest.params), { payload: __assign(__assign({}, jsonRequest.params.payload), { template: { name: templateName } }) }) });
        jsonRequest = jsonRequestTemp;
    }
    if (signature) {
        var jsonRequestTemp = __assign(__assign({}, jsonRequest), { params: __assign(__assign({}, jsonRequest.params), { signature: {
                    created: signature.created,
                    creator: signature.creator,
                } }) });
        jsonRequest = jsonRequestTemp;
    }
    return jsonRequest;
}
exports.constructJsonPartialSignRequest = constructJsonPartialSignRequest;
function constructJsonRequest(method, data, templateName) {
    var jsonRequest = {
        jsonrpc: '2.0',
        method: method,
        id: generateTxnId(),
        params: {
            payload: {
                data: data
            }
        }
    };
    if (templateName) {
        return __assign(__assign({}, jsonRequest), { params: __assign(__assign({}, jsonRequest.params), { payload: __assign(__assign({}, jsonRequest.params.payload), { template: templateName }) }) });
    }
    else {
        return jsonRequest;
    }
}
exports.constructJsonRequest = constructJsonRequest;
function constructPublicJsonRequest(method, data) {
    var jsonRequest = {
        jsonrpc: '2.0',
        method: method,
        id: generateTxnId(),
        params: {}
    };
    if (data) {
        var updatedJson = Object.assign(jsonRequest);
        updatedJson.params = data;
        return updatedJson;
    }
    return jsonRequest;
}
exports.constructPublicJsonRequest = constructPublicJsonRequest;
