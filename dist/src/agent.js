"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./common/util");
var http_1 = require("./utils/http");
var Agent = /** @class */ (function () {
    function Agent() {
    }
    Agent.prototype.createAgent = function (agentData, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('createAgent', 'create_agent', signature, agentData);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Agent.prototype.listAgentsForProject = function (data, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('listAgents', 'list_agent', signature, data);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    Agent.prototype.updateAgentStatus = function (agentData, signature, PDSUrl) {
        var json = util_1.constructJsonSignRequest('updateAgentStatus', 'agent_status', signature, agentData);
        return http_1.sendPostJSON(PDSUrl + 'api/request', json);
    };
    return Agent;
}());
exports.default = Agent;
