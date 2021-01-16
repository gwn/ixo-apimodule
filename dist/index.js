"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ixo = void 0;
var network_1 = require("./src/network");
var project_1 = require("./src/project");
var agent_1 = require("./src/agent");
var claim_1 = require("./src/claim");
var user_1 = require("./src/user");
var stats_1 = require("./src/stats");
var config_1 = require("./src/config");
var utils_1 = require("./src/utils/utils");
var Ixo = /** @class */ (function () {
    function Ixo(BLOCK_SYNC_URL) {
        this.config = new config_1.default(BLOCK_SYNC_URL);
        this.network = new network_1.default(this.config);
        this.project = new project_1.default(this.config);
        this.agent = new agent_1.default();
        this.claim = new claim_1.default();
        this.user = new user_1.default(this.config);
        this.stats = new stats_1.default(this.config);
        this.utils = new utils_1.default(this.config);
    }
    return Ixo;
}());
exports.Ixo = Ixo;
