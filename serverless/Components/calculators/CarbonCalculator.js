import styles from "../../styles/Calculator.module.css";
import {Button, Form} from "react-bootstrap";
import ProgressBar from "./ProgressBar";

const CarbonCalculator = (data) => {

  const type = data.type
  const value = data.value;
  const inputs = data.data.inputs;
  const results = data.data.results;

  return (
      <main className={styles.main}>
        <div className={styles.pageContentMain}>
          <h2 className={styles.h2} data-testid="calculator_heading">
            {type} Calculator
          </h2>
          <div className={styles.calculatorContainer}>
            <div className={styles.calculatorBody}>
              <h3 className={styles.h3} data-testid="category_heading">
                Select a category:
              </h3>
              <div className={styles.formDiv}>
                <Form.Check
                    className={styles.form}
                    type="radio"
                    id={`custom-radio item-`}
                    name={inputs[value][0].name}
                    label={inputs[value][0].name}
                    value={inputs[value][0].name}
                />
                <Form.Check
                    className={styles.form}
                    type="radio"
                    id={`custom-radio item-`}
                    name={inputs[value][1].name}
                    label={inputs[value][1].name}
                    value={inputs[value][1].name}
                />
                <Form.Check
                    className={styles.form}
                    type="radio"
                    id={`custom-radio item-`}
                    name={inputs[value][2].name}
                    label={inputs[value][2].name}
                    value={inputs[value][2].name}
                />
              </div>
              <div className={styles.btnContainer}>
                <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className={styles.button}
                    data-testid="next_btn"
                >
                  Next
                </Button>
              </div>
            </div>
            <div className={styles.progressBarBody}>
              <div style={{width: "max-content"}}>
                <h3 style={{fontSize: "25px"}}>
                  Progress Bar
                </h3>
                <ProgressBar
                    value={value}
                    inputs={inputs}
                    results={results}
                    data-testid="category1_heading"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default CarbonCalculator;
