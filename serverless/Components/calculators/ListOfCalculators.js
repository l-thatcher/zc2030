import {Fragment, useState} from "react";
import styles from "../../styles/Calculator.module.css";
import {Nav} from "react-bootstrap";
import CarbonCalculator from "./CarbonCalculator";


const ListOfCalculators = (props) => {

    const [value, setValue] = useState(0);
    const inputs = [];

    const types = props.types;
    const categories = props.categories;
    const allInputs = props.inputs[0];

    // Add inputs for a specific calculator type
    categories[value].map((category, i) => (
        inputs.push(allInputs[category.id - 1])
    ))

    return <Fragment>
        <div className={styles.containerMargin5}>
            <div className={styles.main}>
                <Nav
                    className={styles.nav}
                    onSelect={(e) => {
                        setValue(e)
                    }}
                    fill
                    variant="tabs"
                    defaultActiveKey={value}
                >
                    {props.types.map((name, i) => (
                        <Nav.Item>
                            <Nav.Link
                                data-testid={types[i].name}
                                className={styles.navItems}
                                eventKey={i}
                            >
                                {types[i].name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </div>
        </div>
        <CarbonCalculator
            value={value}
            data={props}
            type={types[value].name}
            category={categories[value]}
            input={inputs}
            results={0}
        />
    </Fragment>
}

export default ListOfCalculators