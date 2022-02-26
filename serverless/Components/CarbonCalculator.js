import styles from "../styles/Calculator.module.css";
import {Button, Form} from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import {useEffect, useState} from "react";


const CarbonCalculator = (data) => {

    const categoryId = data.id
    const [backgroundColor, setBackgroundColor] = useState(["#D2EDE3"])


    // Sets pattern and changes the background color for each calculator
    function handleBackgroundColor() {
        if (isEven(categoryId) === false){
            setBackgroundColor("white")
        }
    }

    // Checks if a number is even
    function isEven(n) {
        return n % 2 == 0;
    }

    // useEffect handler
    useEffect(() => {
        handleBackgroundColor()
    }, []);

    return(
            <main className={styles.main}>
                <div className={styles.pageContent} style={{background: `${backgroundColor}`}}>
                    <h2 className={styles.h2}> {data.data} Calculator </h2>
                    <div className={styles.calculatorContainer}>
                        <div className={styles.calculatorBody}>
                            <h3 className={styles.h3}> Select a category:</h3>
                            <div className={styles.formDiv}>
                                <Form.Check
                                    className={styles.form}
                                    type="radio"
                                    id={`custom-radio item-`}
                                    name={data.category[0]}
                                    label={data.category[0]}
                                    value={data.category[0]}
                                />
                                <Form.Check
                                    className={styles.form}
                                    type="radio"
                                    id={`custom-radio item-`}
                                    name={data.category[1]}
                                    label={data.category[1]}
                                    value={data.category[1]}
                                />
                                <Form.Check
                                    className={styles.form}
                                    type="radio"
                                    id={`custom-radio item-`}
                                    name={data.category[2]}
                                    label={data.category[2]}
                                    value={data.category[2]}
                                />
                            </div>
                            <div style={{textAlign:"center", marginBottom:"20px"}}>
                                <Button variant="primary" size="lg" type="submit" className={styles.button}>
                                    Next
                                </Button>
                            </div>
                        </div>
                        <div className={styles.progressBarBody}>
                            <div style={{width: "max-content"}}>
                                <h3 style={{fontSize: "25px"}}>Progress Bar</h3>
                                <ProgressBar category = {data.category} results = {data.results}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default CarbonCalculator;