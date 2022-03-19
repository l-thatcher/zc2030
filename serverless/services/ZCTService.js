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
const erc20Contract = new web3.eth.Contract(abiJson().abi,"0x4Ae72584552DC5704f3DFb00f79601c932E6813A")

export const getZCTBalance = async (address) => {
    return erc20Contract.methods
        .balanceOf("0x4Ae72584552DC5704f3DFb00f79601c932E6813A")
        .call()
        .then((balance) => {
            return Web3.utils.fromWei(balance);
        });
};
