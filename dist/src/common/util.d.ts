import { Signature } from './models';
export declare function generateTxnId(): number;
export declare function generateJsonPayload(data: string, did: string, templateName?: string): string;
export declare function constructJsonSignRequest(method: string, templateName: string, signature?: Signature, data?: string): any;
export declare function constructJsonPartialSignRequest(method: string, templateName: string, signature?: Signature, data?: string): any;
export declare function constructJsonRequest(method: string, data: any, templateName?: string): any;
export declare function constructPublicJsonRequest(method: string, data?: any): any;
