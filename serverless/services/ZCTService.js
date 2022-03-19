import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import {abiJson} from "../utils/constants";

const childRPC = 'https://rpc-mumbai.maticvigil.com/'

const web3 = new Web3(new HDWalletProvider({
    mnemonic: {
        phrase: "labor evoke bounce thank discover badge history great peasant isolate jazz ahead" //TODO: Make new wallet and store securely
    },
    providerOrUrl: childRPC
}));

const tokenAddress = "0x4Ae72584552DC5704f3DFb00f79601c932E6813A"

const erc20Contract = new web3.eth.Contract(abiJson().abi,tokenAddress)

export const getZCTBalance = async (address) => {
    return erc20Contract.methods
        .balanceOf(address)
        .call()
        .then((balance) => {
            return Web3.utils.fromWei(balance);
        });
};

export const transferZCT = async (from, to, amount) => {
    return erc20Contract.methods
        .transferFrom(from, to, amount)
        .call()
        .then((balance) => {
            return Web3.utils.fromWei(balance);
        });
};

export const mintZCT = async (address, amount) => {
    return erc20Contract.methods
        .mint(address, amount)
        .send({from: "0xDb6C1E3eE0370Abfc240Df451Ddd72FD05315F4B", value: 0})
        .then((balance) => {
            return Web3.utils.fromWei(balance);
        });
};

