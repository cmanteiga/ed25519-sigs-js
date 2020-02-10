
const path = require('path').join(__dirname, 'ed25519_sigs_bg.wasm');
const bytes = require('fs').readFileSync(path);
let imports = {};
imports['./ed25519_sigs.js'] = require('./ed25519_sigs.js');

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
module.exports = wasmInstance.exports;
