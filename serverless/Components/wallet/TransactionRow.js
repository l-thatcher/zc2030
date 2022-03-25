import React from "react";

export default function TransactionRow(props) {
    // const project = props.project
    return (

        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div
                        className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img className="rounded-full"
                             src={props.imageurl}
                             width="40" height="40" alt="Alex Shatov"/>
                    </div>
                    <div className="font-medium text-gray-800">{props.name}
                    </div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{props.tonnes}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div
                    className="text-left font-medium text-green-500">£{props.cost}
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-center">{props.date}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-center">{props.status}</div>
            </td>
        </tr>


    );
}


