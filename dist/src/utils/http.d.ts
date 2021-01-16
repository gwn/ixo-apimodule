import { IDictionary } from '../common/models';
/** Utility method for sending a GET request to the specified URL */
export declare function sendPostJSON<T>(url: string, body: IDictionary<any>, extraHeaders?: IDictionary<string>): Promise<T>;
/** Utility method for sending a POST request to the specified URL */
export declare function sendGetJSON<T>(url: string, extraHeaders?: IDictionary<string>): Promise<T>;
/**
 * Throw error when server returns a response with status 'error'
 * @param response - Response sent by server
 */
export declare function checkServerError(response: any): any;
