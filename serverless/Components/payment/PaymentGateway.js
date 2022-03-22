import React from "react";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

export default function PaymentGateway(props) {
    const orderDetails = props.orderDetails

    return (

        <div>

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
                                        value: `${orderDetails}`,
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

    );
}
