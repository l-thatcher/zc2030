import {getSession, useSession} from "next-auth/react";
import CalculatorCategory from "../../Components/admin/calculators/CalculatorCategory";
import styles from "../../styles/Calculator.module.css";
import CalculatorInput from "../../Components/admin/calculators/CalculatorInput";
import {getCalculatorCategories, getCalculatorInputs} from "../../services/CalculatorService";
import EditCalculatorOverview from "../../Components/admin/calculators/EditCalculatorOverview";
import {useState} from "react";

export default function addCalculator(props) {

    const categories = props.categories;
    const inputs = props.inputs;

    const background3 = "/calculator_background_3.jpg";

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background3})` }}>
            <div className="container-md" >
            <h1>Create Calculator</h1>
            <EditCalculatorOverview details={{id: "", name: "", public: false}} users={[]} categories={[]} inputs={[]}/>
            </div>
        </div>
    );
}

// This gets called at build time
export async function getServerSideProps(context) {
    return {props: {}}
}
