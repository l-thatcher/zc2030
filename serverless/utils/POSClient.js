// import {POSClient, use} from "@maticnetwork/maticjs"
// import {Web3ClientPlugin} from '@maticnetwork/maticjs-web3'
// import HDWalletProvider from "@truffle/hdwallet-provider"
//
// // install web3 plugin
// use(Web3ClientPlugin);
//
// const posClient = new POSClient();
// const mainRPC = 'https://rpc-mumbai.maticvigil.com/'
// const childRPC = 'https://rpc-mumbai.maticvigil.com/'
// posClient.init({
//     network: 'testnet',
//     version: 'mumbai',
//     parent: {
//         provider: new HDWalletProvider(process.env.DEV_PRIVATE_KEY, mainRPC),
//         defaultConfig: {
//             from: 0xB36769Be0C63B8b8593b59dEb684Ce2f7e77ef29
//         }
//     },
//     child: {
//         provider: new HDWalletProvider(process.env.DEV_PRIVATE_KEY, childRPC),
//         defaultConfig: {
//             from: process.env.DEV_CRYPTO_ADDRESS
//         }
//     }
// });
// const erc20ParentToken = posClient.erc20(0xc3FdbadC7c795EF1D6Ba111e06fF8F16A20Ea539, true);
//
//
//
// Import Matic sdk
import Matic from 'maticjs'
import log from "tailwindcss/lib/util/log";

// Create sdk instance
const matic = new Matic({

    // Set Matic provider - string or provider instance
    // Example: 'https://testnet.matic.network' OR new Web3.providers.HttpProvider('http://localhost:8545')
    maticProvider: 'https://testnet.matic.network',

    // Set Mainchain provider - string or provider instance
    // Example: 'https://kovan.infura.io' OR new Web3.providers.HttpProvider('http://localhost:8545')
    parentProvider: "https://kovan.infura.io",

    // Set rootchain contract. See below for more information
    rootChainAddress: "0x70AC6620F9d06847E379a5308A745F1416973696",

    // Set withdraw-manager Address. See below for more information
    withdrawManagerAddress: "0x70AC6620F9d06847E379a5308A745F1416973696",

    // Set deposit-manager Address. See below for more information
    depositManagerAddress: "0x70AC6620F9d06847E379a5308A745F1416973696",

    // Set matic network's WETH address. See below for more information
    maticWethAddress: "0x70AC6620F9d06847E379a5308A745F1416973696",

    // Syncer API URL
    // Fetches tx/receipt proof data instead of fetching whole block on client side
    syncerUrl: 'https://matic-syncer2.api.matic.network/api/v1', // (optional)

    // Watcher API URL
    // Fetches headerBlock info from mainchain & finds appropriate headerBlock for given blockNumber
    watcherUrl: 'https://ropsten-watcher2.api.matic.network/api/v1', // (optional)
})

export async function getBalance(address) {
    matic.balanceOfERC20(
        address, //User address
        address, // Token address
        {from:address} // transaction fields
    ).then(balance =>
    console.log("hi ",balance))
}
