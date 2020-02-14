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
* @returns {string} 
*/
export function new_mnemophrase(): string;
/**
* @param {string} phrase 
* @returns {any} 
*/
export function seed_from_phrase(phrase: string): any;
