import { Signature } from './common/models';
declare class Agent {
    createAgent(agentData: any, signature: Signature, PDSUrl: string): Promise<any>;
    listAgentsForProject(data: any, signature: Signature, PDSUrl: string): Promise<any>;
    updateAgentStatus(agentData: any, signature: Signature, PDSUrl: string): Promise<any>;
}
export default Agent;
