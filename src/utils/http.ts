import fetch from 'cross-fetch';
import {IDictionary} from '../common/models';
const debug = require('debug')('ixo-apimodule')

/** Utility method for sending a GET request to the specified URL */
export function sendPostJSON<T>(url: string, body: IDictionary<any>, extraHeaders?: IDictionary<string>): Promise<T> {
  const opts: any = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: getJSONRequestHeaders(extraHeaders),
    credentials: 'same-origin'
  }

  debug('> Request', url, opts)

  return fetch(url, opts)
    .then((response: any) => {
      return response.json()
        .then((body: any) => {
          debug('< Response', {
            status: response.status,
            headers: response.headers,
            body,
          })

          return checkServerError(body)
        })
    })
    .catch((error: any) => {
      throw error;
    });
}

/** Utility method for sending a POST request to the specified URL */
export function sendGetJSON<T>(url: string, extraHeaders?: IDictionary<string>): Promise<T> {
  const opts: any = {
    method: 'GET',
    headers: getJSONRequestHeaders(extraHeaders),
    credentials: 'same-origin'
  }

  debug('> Request', url, opts)

  return fetch(url, opts)
    .then((response: any) => {
      return response.json()
        .then((body: any) => {
          debug('< Response', {
            status: response.status,
            headers: response.headers,
            body,
          })

          return checkServerError(body)
        })
    })
    .catch((error: any) => {
      throw error;
    });
}

/** Merge default JSON headers with any extra headers passed to it */
function getJSONRequestHeaders(extraHeaders?: IDictionary<string>): IDictionary<string> {
  let requestHeaders: IDictionary<string> = {Accept: 'application/json', 'Content-Type': 'application/json'};
  if (extraHeaders) {
    requestHeaders = {...requestHeaders, ...extraHeaders}
  }
  return requestHeaders;
}

/**
 * Throw error when server returns a response with status 'error'
 * @param response - Response sent by server
 */
export function checkServerError(response: any) {
  if (response.status === 'error') {
    throw response;
  } else {
    return response;
  }
}
