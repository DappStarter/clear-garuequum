require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom glimpse flame tone stool radar six protect imitate produce forget genuine'; 
let testAccounts = [
"0x0f4cf7bbd2ee788a84f2a592b13acacca2e47ca95b0c4ac377c85a11b1c95cd7",
"0x8d9701d16136fd53d95c8f47d5515173d971edf8d66c887166e0187f077e5574",
"0xa0467064fe12b2db89a609b29374859c349e919ab2ed2fbc5e84ad41488cb234",
"0x2d6a16218fc58e68d4e5745042ee4ec34674c7663c384dbfeb5f3f823af84a45",
"0xa59c95a7dfdd7dfa0701f4dee1129fb6a4c8ed477023b45df4718eb61643579a",
"0xa7e2fb2bf1c40e7da3b238b2afc5e2a9934694f099312149abadc3db1d65dfde",
"0x136dc7bfd1d4a38a84688eeb92d8e3a2347bee7076bb97a2a4752b2fd520f467",
"0x8c521dbc42c2be85ba5ff636a86e93262c22dce415ce5006078fac593fa7de9f",
"0x2784683f563ff8bdcd2dcade924f80484ef63883e1773b0bbc806dc64043e3fa",
"0xc230e1fc9fa9d513c66db95052996e9c4a4c6e517224272e703fb213b12cec55"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

