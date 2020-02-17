/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} seed 
* @returns {any} 
*/
export function gen_pubKey(seed: Uint8Array): any;
/**
* @param {Uint8Array} seed 
* @returns {any} 
*/
export function gen_privKey(seed: Uint8Array): any;
/**
* @param {Uint8Array} message 
* @param {Uint8Array} privKey 
* @returns {any} 
*/
export function sign(message: Uint8Array, privKey: Uint8Array): any;
/**
* @param {Uint8Array} message 
* @param {Uint8Array} pubKey 
* @param {Uint8Array} signature 
* @returns {boolean} 
*/
export function verify(message: Uint8Array, pubKey: Uint8Array, signature: Uint8Array): boolean;
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
        