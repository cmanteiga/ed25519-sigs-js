/* tslint:disable */
/* eslint-disable */
/**
* @param {string} phrase 
* @returns {any} 
*/
export function gen_keypair(phrase: string): any;
/**
* @param {Uint8Array} message 
* @param {Uint8Array} keypair_bytes 
* @returns {any} 
*/
export function sign(message: Uint8Array, keypair_bytes: Uint8Array): any;
/**
* @param {Uint8Array} message 
* @param {Uint8Array} pubKey_bytes 
* @param {Uint8Array} sig_bytes 
* @returns {boolean} 
*/
export function verify(message: Uint8Array, pubKey_bytes: Uint8Array, sig_bytes: Uint8Array): boolean;
/**
* @param {string} phrase 
* @returns {any} 
*/
export function seed_from_phrase(phrase: string): any;

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        