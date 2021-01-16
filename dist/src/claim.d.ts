import { Signature } from './common/models';
declare class Claim {
    createClaim(data: any, signature: Signature, PDSUrl: string): Promise<any>;
    evaluateClaim(data: any, signature: Signature, PDSUrl: string): Promise<any>;
    listClaimsForProject(data: any, signature: Signature, PDSUrl: string): Promise<any>;
}
export default Claim;
