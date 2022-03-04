import {Fragment, useState} from "react";
import styles from "../../styles/Calculator.module.css";
import {Nav} from "react-bootstrap";
import CarbonCalculator from "./CarbonCalculator";


const ListOfCalculators = (props) => {

    const [value, setValue] = useState(0);
    const types = props.types;
    const inputs = props.inputs;

    return <Fragment>
        <div className={styles.containerMargin5}>
            <div className={styles.main}>
                <Nav
                    className={styles.nav}
                    onSelect={(e) => setValue(e)}
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
            category={inputs[value].category}
            results={0}
        />
    </Fragment>
}

export default ListOfCalculators