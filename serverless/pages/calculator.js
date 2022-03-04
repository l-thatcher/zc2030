import styles from "../styles/Calculator.module.css";
import {getCalculatorInputs, getCalculatorTypes} from "../services/CalculatorService";
import ListOfCalculators from "../Components/calculators/ListOfCalculators";

export default function Calculator(props) {

    const inputs = props.inputs;
    const types = props.types;

    return (
        <div className={styles.container}>
            <h1
                className={styles.h1}
                data-testid="main_heading">
                Carbon Calculators
            </h1>
            <div className="container-md">
                <ListOfCalculators
                    inputs={inputs}
                    types={types}
                />
            </div>
        </div>
    );
}
