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
exports.checkServerError = exports.sendGetJSON = exports.sendPostJSON = void 0;
var cross_fetch_1 = require("cross-fetch");
var debug = require('debug')('ixo-apimodule');
/** Utility method for sending a GET request to the specified URL */
function sendPostJSON(url, body, extraHeaders) {
    var opts = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: getJSONRequestHeaders(extraHeaders),
        credentials: 'same-origin'
    };
    debug('> Request', url, opts);
    return cross_fetch_1.default(url, opts)
        .then(function (response) {
        return response.json()
            .then(function (body) {
            debug('< Response', {
                status: response.status,
                headers: response.headers,
                body: body,
            });
            return checkServerError(body);
        });
    })
        .catch(function (error) {
        throw error;
    });
}
exports.sendPostJSON = sendPostJSON;
/** Utility method for sending a POST request to the specified URL */
function sendGetJSON(url, extraHeaders) {
    var opts = {
        method: 'GET',
        headers: getJSONRequestHeaders(extraHeaders),
        credentials: 'same-origin'
    };
    debug('> Request', url, opts);
    return cross_fetch_1.default(url, opts)
        .then(function (response) {
        return response.json()
            .then(function (body) {
            debug('< Response', {
                status: response.status,
                headers: response.headers,
                body: body,
            });
            return checkServerError(body);
        });
    })
        .catch(function (error) {
        throw error;
    });
}
exports.sendGetJSON = sendGetJSON;
/** Merge default JSON headers with any extra headers passed to it */
function getJSONRequestHeaders(extraHeaders) {
    var requestHeaders = { Accept: 'application/json', 'Content-Type': 'application/json' };
    if (extraHeaders) {
        requestHeaders = __assign(__assign({}, requestHeaders), extraHeaders);
    }
    return requestHeaders;
}
/**
 * Throw error when server returns a response with status 'error'
 * @param response - Response sent by server
 */
function checkServerError(response) {
    if (response.status === 'error') {
        throw response;
    }
    else {
        return response;
    }
}
exports.checkServerError = checkServerError;
