import {Fragment, useState} from "react";
import styles from "../../styles/Calculator.module.css";
import {Nav} from "react-bootstrap";
import CarbonCalculator from "./CarbonCalculator";


const ListOfCalculators = (props) => {

    const [value, setValue] = useState([0]);
    // console.log(value)

    return <Fragment>
        <div className={styles.containerMargin5}>
            <div className={styles.main}>
                <Nav
                    className={styles.nav}
                    onSelect={(e) => setValue(e)}
                    fill
                    variant="tabs"
                    defaultActiveKey={props.value}
                >
                    {props.types.map((name, i) => (
                        <Nav.Item>
                            <Nav.Link
                                data-testid={props.types[i].name}
                                className={styles.navItems}
                                eventKey={i}
                            >
                                {props.types[i].name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </div>
        </div>

        <CarbonCalculator

            value={value}
            data={props}
            type={props.types[value].name}
            category={props.inputs[value].category}
            results={0}
        />
    </Fragment>
}

export default ListOfCalculators