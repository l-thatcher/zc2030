import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import { abiJson } from "../utils/constants";

// const childRPC = 'https://rpc-mumbai.maticvigil.com/'
const childRPC =
  "wss://ropsten.infura.io/ws/v3/579ec05cfce44d31854d6f693d5fa907";
const web3 = new Web3(
  new HDWalletProvider({
    mnemonic: {
      phrase:
        "labor evoke bounce thank discover badge history great peasant isolate jazz ahead", //TODO: Make new wallet and store securely
    },
    providerOrUrl: childRPC,
  })
);


const tokenAddress = "0x66e2a2b24a8f57b059042ee3532ac836b2bb1ae1";

const erc20Contract = new web3.eth.Contract(abiJson().abi, tokenAddress);

export const getZCTBalance = async (address) => {
  return erc20Contract.methods
    .balanceOf(address)
    .call()
    .then((balance) => {
      return Web3.utils.fromWei(balance);
    });
};

//Transfers tokens from one address to another. Request sent by dev wallet so dev wallet pays gas fees.
export const transferZCT = async (from, to, amount) => {
  await erc20Contract.methods
    .approve(from, String(BigInt(amount) * 1000000000000000000n))
    .send({ from: "0xDb6C1E3eE0370Abfc240Df451Ddd72FD05315F4B" });
  return erc20Contract.methods
    .transferFrom(from, to, String(BigInt(amount) * 1000000000000000000n))
    .send({ from: "0xDb6C1E3eE0370Abfc240Df451Ddd72FD05315F4B" })
    .then((balance) => {
      return Web3.utils.fromWei(balance.toString());
    });
};

export const mintZCT = async (address, amount) => {
  return erc20Contract.methods
    .mint(address, String(BigInt(amount) * 1000000000000000000n))
    .send({ from: "0xDb6C1E3eE0370Abfc240Df451Ddd72FD05315F4B", value: 0 })
    .then((balance) => {
      return Web3.utils.fromWei(balance);
    });
};
