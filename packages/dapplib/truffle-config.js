require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rescue still around grid another army gate'; 
let testAccounts = [
"0xe2207414f88d692539cd5df974b4c213006e4a3274059c0dd807839e05f72d01",
"0x70f368380610eb6014bab86b53738f8839c3fc803887ec8c101839ee4ae82028",
"0xccffc536a1a73e1f97186a0e66af74b719437942a65d37013b05bedfc8f2d973",
"0xfb9674022ededd00f0eaf9ff234ea14b60e0141406ba4d1e4173d78aef5a4ac4",
"0x872089106f24454a533010e0c5a555bac4d4b21e3ca2bc53e7fb4214f3dd8ba7",
"0x8bea3cd390360a356e4b398bc83067aefbdbc91b46a66ed27b9d3084a71b487f",
"0xd425f06778bb904f81e5835eeca003d3c1ff41d133670ccf26887e5d48094875",
"0x42b589cd6d83481ba9d0e5469d78869c9d795a0742175d7e25b78cc80f7c58d3",
"0x77a69646cbeae9033bda26fe90e2316c173d7f56c8b48c9ed0c8277dcfb9c0e3",
"0x28a0ac785e40edcd3e883c682a3363fb9f01837b99542f7a7bf3ac3d9ab9f211"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


