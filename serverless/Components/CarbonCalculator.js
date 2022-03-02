import styles from "../styles/Calculator.module.css";
import {Button, Form} from "react-bootstrap";
import ProgressBar from "./ProgressBar";

const CarbonCalculator = (data) => {
  return (
      <main className={styles.main}>
        <div className={styles.pageContentMain}>
          <h2 className={styles.h2} data-testid="calculator_heading">
            {" "}
            {data.type} Calculator{" "}
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
                <h3 style={{fontSize: "25px"}}>Progress Bar</h3>
                <ProgressBar
                    category={data.category}
                    results={data.results}
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
