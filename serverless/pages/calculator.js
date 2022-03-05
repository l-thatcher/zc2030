import styles from "../styles/Calculator.module.css";
import {getCalculatorCategories, getCalculatorInputs, getCalculatorTypes} from "../services/CalculatorService";
import ListOfCalculators from "../Components/calculators/ListOfCalculators";

export default function Calculator(props) {

    const types = props.types;
    const categories = props.categories;
    const inputs = props.inputs;

    return (
        <div className={styles.container}>
            <h1
                className={styles.h1}
                data-testid="main_heading">
                Carbon Calculators
            </h1>
            <div className="container-md">
                <ListOfCalculators
                    categories={categories}
                    types={types}
                    inputs={[inputs]}
                />
            </div>
        </div>
    );
}
