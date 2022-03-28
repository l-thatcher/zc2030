import ShowWallet from "../Components/User/ShowWallet";
import Image from "@material-tailwind/react/Image";
import {getSession} from "next-auth/react";
import {getZCTBalance} from "../services/ZCTService";
import {fetchTransactionsByAddress} from "../services/ProjectService";

export default function Wallet(props) {
  const logo = "/cz2030_logo.png";
  const balance = props.balance;
  const transactions = props.transactions;
  return (
    <div>
      <div className="relative block h-[450px] bg-green-300 ">
        <Image
          className=" h-[450px]"
          src="/background.jpg"
          alt="Profile picture"
          raised
          rounded
        />
      </div>

      <div>
        <section className="relative py-16 bg-gray-100">
          <div className="container max-w-7xl px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
              <div className="px-6">
                <ShowWallet balance={balance} transactions={transactions}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    let balance = 0;
    let transactions = []
    if (session){
        balance = await getZCTBalance(`0x${session.user.walletAddress}`)
        transactions = (await fetchTransactionsByAddress(session.user.id)).data;
    }
    return {props:{balance: balance, transactions:transactions}}
}