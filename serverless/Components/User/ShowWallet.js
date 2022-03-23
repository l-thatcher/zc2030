import Image from "@material-tailwind/react/Image";

const logo = "/cz2030_logo.png";
import Icon from "@material-tailwind/react/Icon";
import {FaEthereum} from "react-icons/fa";
import H6 from "@material-tailwind/react/Heading6";
import {useSession} from "next-auth/react";
import {data} from "autoprefixer";
import {useState, useEffect} from "react";
import Link from "next/link";

const ShowWallet = (props) => {
    const balance= props.balance;
    const {data: session} = useSession();
    const logo = "/cz2030_logo.png";
    const [view, setView] = useState("create");
    const setToWallet = () => {
        setView("wallet");
    };
    const setToHistory = () => {
        setView("history");
    };
    if (session) {

        return (
            <>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                            <div className="bg-white w-40 -mt-20 border rounded-full ">
                                <Image
                                    className="w-96"
                                    src={session?.user.image}
                                    alt="Profile picture"
                                    raised
                                    rounded
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                        <button className="btn border-blue-500 " type="button">
                            <Icon size="lg"/> Settings
                        </button>
                    </div>

                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className=" flex justify-center py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center ">
                                <div className="inline-flex rounded-md shadow-sm" role="group">
                                    <button
                                        type="button"
                                        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200  "
                                    >
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                    {balance}
                  </span>
                                        <span className="text-sm text-gray-700">
                    Zero Carbon Credits
                  </span>
                                    </button>

                                    <button
                                        type="button"
                                        className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200   "
                                    >
                  <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                    1
                  </span>
                                        <span className="text-sm text-gray-700">Projects</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-8">
                    <H6 color="gray">{session?.user.name}</H6>
                    <div className="mt-0 mb-2 text-gray-700  flex items-center justify-center gap-2">
                        <FaEthereum name="place" size=""/>
                        <span className="text-tahiti truncate ... text-cyan-400 ">
              <a
                  target="_blank"
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href={"https://etherscan.io/address/0x" + session?.user.walletAddress}
              >
                0x{session?.user.walletAddress}
              </a>
          </span>
                    </div>
                </div>
                <div className="flex justify-center gap-x-40 ">
                    <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                        <button
                            className="font-medium text-center text-gray-500 rounded-t-lg border-b-2
                                                border-transparent hover:text-blue-700 hover:border-blue-700 "
                            aria-current="page"
                            onClick={() => setToWallet()}
                        >
                            Wallet
                        </button>
                    </div>
                    <div className="mb-3 text-gray-700 text-center  gap-6">
          <span>
            <button
                className="font-medium text-center text-gray-500 rounded-t-lg border-b-2
                                              border-transparent hover:text-blue-700 hover:border-blue-700 "
                onClick={() => setToHistory()}
            >
              History
            </button>
          </span>
                    </div>
                </div>

                <div className="mb-10 py-2 border-t border-gray-200 text-center">
                    {/*//show create item*/}
                    <>
                        {view === "wallet" && (
                            // <AddTripButton addTrip={() => setState('add-trip') } />

                            <></>
                        )}
                    </>

                    {/*//show wallet*/}
                    <>
                        {view === "history" && (
                            <div className="container mx- justify-center">
                                {/*<div*/}
                                {/*  className="px-3 py-10 gap-y-10 sm:grid*/}
                                {/*                               mdsm2:grid-cols mdsm1:grid-cols-3*/}

                                {/*                               md:grid-cols-3 xl:grid-cols-3"*/}
                                {/*>*/}
                                {/*  /!*{*!/*/}
                                {/*  /!*    itemData.map((item) =>  (*!/*/}
                                {/*  /!*        <ItemCard key={item._id} item ={item}  />*!/*/}
                                {/*  /!*    ))*!/*/}
                                {/*  /!*}*!/*/}
                                {/*</div>*/}
                            </div>
                        )}
                    </>

                    <table className="table-fixed">
                        <thead>
                        <tr>
                            <th>Transaction</th>
                            <th>Provider</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>#42069</td>
                            <td>Paypal</td>
                            <td>£500</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </>
        );
    } else{
        return (<div>Error</div>)
    }
};

export default ShowWallet;
