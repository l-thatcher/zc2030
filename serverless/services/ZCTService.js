import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import {abiJson} from "../utils/constants";
import log from "tailwindcss/lib/util/log";
import * as fs from "fs";
import {decryptWallet} from "./Web3jsService";
import {getPrivateKeys} from "@truffle/hdwallet-provider/dist/constructor/getPrivateKeys";
import {errorParser} from "tedious/lib/token/infoerror-token-parser";

const childRPC = 'https://rpc-mumbai.maticvigil.com/'
// const childRPC = "https://polygon-mumbai.infura.io/v3/579ec05cfce44d31854d6f693d5fa907"
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
    const fromAddress = fromWallet.address
    const gasLimit = ("10000000108")
    console.log("123")
    const gasEstimate = web3.eth.getGasPrice()
    // const gasEstimate = await (erc20Contract.methods.transferFrom(fromWallet.address, to, Web3.utils.toWei(amount))).estimateGas();
    console.log("456")

    const signedTx = await web3.eth.accounts.signTransaction({
        to: to,
        gas: 2000000
    }, "0xbfbe13a0ebe33125893018b6bfe5d6474bd990260d4cc5404ade1804b68d7326");

    console.log("SIGNED TX IS: " + signedTx.messageHash)


    const localWeb3Connection = new Web3(
        new HDWalletProvider({
            privateKeys: [fromWallet.privateKey],
            providerOrUrl: childRPC,
            pollingInterval: 8000
        })
    );

    // Called from the farm wallet
    const localErc20Contract = new localWeb3Connection.eth.Contract(abiJson().abi, tokenAddress);
    const signedTxHash = signedTx.messageHash;
    const sigParams = getSignatureParameters(signedTxHash);
    console.log("here 54 " + sigParams.v)

    const permitValue = amount.toString()

    console.log(devWallet)
    console.log(fromWallet.address)
    console.log("5051" + permitValue)
    console.log(`0x${sigParams.v}`)
    console.log(`0x${sigParams.r}`)
    console.log(`0x${sigParams.s}`)

    const vSig = sigParams.v;
    const rSig = sigParams.r;
    const sSig = sigParams.s;

    console.log(vSig)
    console.log(rSig)
    console.log(sSig)

    await localErc20Contract.methods
        .permit(devWallet, devWallet, permitValue, "9999999999999", vSig, rSig, sSig)
        .send({from: fromWallet.address});


    // (await localErc20Contract.methods
    //     .approve(devWallet, Web3.utils.toWei(amount))
    //     .send({from: fromAddress})).then
    // {
    //     erc20Contract.methods
    //         .transferFrom(fromAddress, to, Web3.utils.toWei(amount))
    //         .send({from: devWallet})
    //         .then((balance) => {
    //             return Web3.utils.fromWei(balance.toString());
    //         });
    // }


};

// export const gaslessZCT = async (address)

const getSignatureParameters = signTxHash => {
    console.log("here9090")
    console.log(signTxHash)

    if (!web3.utils.isHexStrict(signTxHash)) {
        throw new Error(
            'Given value "'.concat(signTxHash, '" is not a valid hex string.')
        );
    }
    const r = signTxHash.slice(0, 66);
    const s = "0x".concat(signTxHash.slice(66, 130));
    let v = "0x".concat(signTxHash.slice(130, 132));
    v = web3.utils.hexToNumber(v);
    if (![27, 28].includes(v)) v += 27;
    return {
        r: r,
        s: s,
        v: v
    };
};


export const mintZCT = async (address, amount) => {
    return erc20Contract.methods
        .mint(address, Web3.utils.toWei(amount))
        .send({from: devWallet, value: "0"})
        .then((balance) => {
            return Web3.utils.fromWei(balance.toString());
        });
};



