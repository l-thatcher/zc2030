import Web3 from "web3";
import HDWalletProvider from "@truffle/hdwallet-provider";
import {abiJson} from "../utils/constants";
import log from "tailwindcss/lib/util/log";
import * as fs from "fs";
import {decryptWallet} from "./Web3jsService";
import {getPrivateKeys} from "@truffle/hdwallet-provider/dist/constructor/getPrivateKeys";
import {errorParser} from "tedious/lib/token/infoerror-token-parser";
import {getMaticBalance, transferMatic} from "./MaticService";

const childRPC = "https://polygon-mumbai.infura.io/v3/35b570830e7b48d5952f5d976d7c05a0"
    // 'https://rpc-mumbai.maticvigil.com/'
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
        pollingInterval: 8000,
        reconnect: {
            auto: true,
            delay: 5000,
        }
    })
);


const tokenAddress = "0x26B82ef7812D5D2f4Ca3bD8140FC5642702D9e0e";
web3.eth.transactionPollingTimeout = 5000;
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

export const gasInFarmWallet = async (from, to) => {


}


//Transfers tokens from one address to another. Request sent by dev wallet so dev wallet pays gas fees.
export const transferZCT = async (from, to, amount) => {
    const fromWallet = decryptWallet(from)
    const fromAddress = fromWallet.address
    const gasLimit = ("10000000108")
    console.log("123")
    const gasEstimate = web3.eth.getGasPrice()
    console.log("456")
    const localWeb3Connection = new Web3(
        new HDWalletProvider({
            privateKeys: [fromWallet.privateKey],
            providerOrUrl: childRPC,
            pollingInterval: 8000
        })
    );
    console.log("1111")
    const localErc20Contract = new localWeb3Connection.eth.Contract(abiJson().abi, tokenAddress);


    console.log("Matic Balance: " + await getMaticBalance(fromAddress))

    console.log("Matic Balance: " + await getMaticBalance(devWallet))

    const farmBalance = await getMaticBalance(fromAddress)
    const devBalance = await getMaticBalance(devWallet)

    if (farmBalance <= "0.5") {
        console.log("Farm does not have enough Gas, attempting to transfer gas")
        await transferMatic(fromAddress, "0.5")
        console.log(`Dev balance: ${devBalance}`)
    }
    localErc20Contract.methods // Approve Farm to User
        .approve(fromAddress, Web3.utils.toWei(amount))
        .send({from: fromAddress}).then
    {
        (await localErc20Contract.methods // Transfer Farm to user
            .transferFrom(fromAddress, to, Web3.utils.toWei(amount))
            .send({from: fromAddress}));
    }
    console.log("Matic Balance: " + await getMaticBalance(fromAddress))


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



