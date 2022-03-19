import {POSClient, use} from "@maticnetwork/maticjs"
import {Web3ClientPlugin} from '@maticnetwork/maticjs-web3'
import HDWalletProvider from "@truffle/hdwallet-provider"

// install web3 plugin
use(Web3ClientPlugin);

//Setting up MaticJS
const posClient = new POSClient();
const parentRPC = 'https://rpc-mumbai.maticvigil.com/' //Matic chain
posClient.init({
    network: 'testnet',
    version: 'mumbai',
    parent: {
        provider: new HDWalletProvider({
            mnemonic: {
                phrase: "labor evoke bounce thank discover badge history great peasant isolate jazz ahead" //TODO: Make new wallet and store securely
            },
            providerOrUrl: parentRPC
        }),
    },
});

const erc20ParentToken = posClient.erc20("0000000000000000000000000000000000001010", true);

export async function getMaticBalance(userAddress) {
    return await erc20ParentToken.getBalance("0xDb6C1E3eE0370Abfc240Df451Ddd72FD05315F4B")/1000000000000000000;
}

