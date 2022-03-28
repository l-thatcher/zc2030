import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import {abiJson} from "../utils/constants";
import log from "tailwindcss/lib/util/log";
import * as fs from "fs";
import {decryptWallet} from "./Web3jsService";
import {getPrivateKeys} from "@truffle/hdwallet-provider/dist/constructor/getPrivateKeys";
import {errorParser} from "tedious/lib/token/infoerror-token-parser";

const childRPC = 'https://rpc-mumbai.maticvigil.com/'
// https://polygon-mumbai.infura.io/v3/579ec05cfce44d31854d6f693d5fa907
// const childRPC =
//     "wss://ropsten.infura.io/ws/v3/579ec05cfce44d31854d6f693d5fa907";
const mnemonic = fs.readFileSync(".secret").toString().trim();
const devWallet = "0x427897086E5Ac14561a7559B694617EaF5e0c1d8"
const web3 = new Web3(
    new HDWalletProvider({
        mnemonic: {
            phrase:
            mnemonic,
        },
        providerOrUrl: childRPC,
        pollingInterval: 8000
    })
);


const tokenAddress = "0x26B82ef7812D5D2f4Ca3bD8140FC5642702D9e0e";

const erc20Contract = new web3.eth.Contract(abiJson().abi, tokenAddress);

export const getZCTBalance = async (address) => {
    return erc20Contract.methods
        .balanceOf(address)
        .call()
        .then((balance) => {
            return Web3.utils.fromWei(balance);
        });
};

export const getZCTBalances = async (addresses) => {
    for (let i = 0; i < addresses.length; i++) {
        addresses[i].balance = await getZCTBalance(`0x${addresses[i].publicAddress}`)
    }
    return addresses
};


//Transfers tokens from one address to another. Request sent by dev wallet so dev wallet pays gas fees.
export const transferZCT = async (from, to, amount) => {
    const fromWallet = decryptWallet(from)

    const gasLimit = Web3.utils.toWei("5")

    console.log(fromWallet)

    const tx = {
        from: fromWallet.address,
        to: to,
        gas: gasLimit,
        value: Web3.utils.toWei(amount),
        data: erc20Contract.methods.transferFrom(fromWallet.address, to, Web3.utils.toWei(amount)).encodeABI()
    };

    console.log(tx);


    const signPromise = (web3.eth.accounts.signTransaction(tx, "0xbfbe13a0ebe33125893018b6bfe5d6474bd990260d4cc5404ade1804b68d7326"));

    signPromise.then((signedTx) => {
        const sentTx = web3.eth.sendSignedTransaction(
            signedTx.raw || signedTx.rawTransaction);

        sentTx.on("receipt", receipt => {
            // do something when receipt comes back
            console.log("333 " + (signPromise).v);
        });
        sentTx.on("error", err => {
            // do something on transaction error
        });
    }).catch((err) => {
        // do something when promise fails
    });




    const localWeb3Connection = new Web3(
        new HDWalletProvider({
            privateKeys: [fromWallet.privateKey],
            providerOrUrl: childRPC,
            pollingInterval: 8000
        })
    );
    const fromAddress = fromWallet.address
    const localErc20Contract = new localWeb3Connection.eth.Contract(abiJson().abi, tokenAddress);
    // Called from the farm wallet

    await localErc20Contract.methods
        .permit(devWallet, fromWallet.address, 1, 9999999999999)
        .send({from: devWallet.address});

    (await localErc20Contract.methods
        .approve(devWallet, Web3.utils.toWei(amount))
        .send({from: fromAddress})).then
    {
        erc20Contract.methods
            .transferFrom(fromAddress, to, Web3.utils.toWei(amount))
            .send({from: devWallet})
            .then((balance) => {
                return Web3.utils.fromWei(balance.toString());
            });
    }
};




export const mintZCT = async (address, amount) => {
    return erc20Contract.methods
        .mint(address, Web3.utils.toWei(amount))
        .send({from: devWallet, value: "0"})
        .then((balance) => {
            return Web3.utils.fromWei(balance.toString());
        });
};



