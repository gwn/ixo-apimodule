"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signature = void 0;
var Signature = /** @class */ (function () {
    function Signature(type, created, did, publicKey, signatureValue) {
        this.type = type;
        this.created = created;
        this.creator = did;
        this.publicKey = publicKey;
        this.signatureValue = signatureValue;
    }
    return Signature;
}());
exports.Signature = Signature;
