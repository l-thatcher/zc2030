import ProgressB from "./ProgressB";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {useState} from "react";

function BuyCard(props) {
    const [tonnesBuying, setTonnesBuying] = useState(0);


    function handleTonnesChanged(event) {
        //If enters too much
        //alert "too high"
        const amount = event.target.value;
        if(amount > props.detailsProps.remainingsupply) {
            alert("Cannot purchase more than remaining supply")
            setTonnesBuying(props.detailsProps.remainingsupply)
        } else {
            setTonnesBuying(event.target.value).then(it=>
            console.log(it))
        }
    }


    return (
        <div className="w-96  px-4">
            <div
                className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-black border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12

               bg-white rounded-xl transform
             duration-300 shadow-lg
             hover:shadow-2xl hover:font-bold"
            >
                <h2 className="font-bold  mb-1 text-[34px] text-green-600 pb-3 ">
                    £{props.detailsProps.cptgbp}
                    <span className="text-base text-body-color text-black  font-medium">
            / tCo2e
          </span>
                </h2>
                <p className="font-semibold text-gray-400">
                    {" "}
                    Total Supply: {props.detailsProps.totalsupply}{" "}
                </p>
                <p className="font-semibold text-gray-400">
                    {" "}
                    Available Supply: {props.detailsProps.remainingsupply}{" "}
                </p>
                <p className="font-bold">
                    How many tonnes of carbon would you like to buy?
                </p>
                <input
                    className="w-full form-control border border-solid border-gray-300 rounded block px-6 py-2.5 mb-3"
                    type="number"
                    placeholder="tonnes"
                    onChange={(e) => handleTonnesChanged(e)}
                />
                {/*<button*/}
                {/*  type="button"*/}
                {/*  className="mb-2 w-full inline-block px-6 py-2.5 bg-green-500 text-white font-medium*/}
                {/*                                     text-xs leading-normal uppercase rounded shadow-md hover:bg-green-800 hover:shadow-lg*/}
                {/*                                    focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800*/}
                {/*                                      active:shadow-lg  duration-150 ease-in-out"*/}
                {/*>*/}
                {/*  Buy Carbon*/}
                {/*</button>*/}

                {/*Paypal Button*/}
                <PayPalScriptProvider
                    options={{
                        "client-id": "AXEtfxC428uLLJR3HGUzT5ZywDHc3XeGG_ZUdXN41yspvFPvl1fLmcvNYHJlgQdLW5L6elWYHIMxQ1RQ",
                        currency: "GBP"
                    }}>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: "GBP",
                                            value: `${props.detailsProps.cptgbp * tonnesBuying}`,
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                const name = details.payer.name.given_name;
                                alert(`Transaction completed by ${name}`);
                            });
                        }}
                    />
                </PayPalScriptProvider>

            </div>
        </div>
    );
}

export default BuyCard;
