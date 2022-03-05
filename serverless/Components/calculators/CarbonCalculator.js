import styles from "../../styles/Calculator.module.css";
import {Button, Form} from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import {useState} from "react";

const CarbonCalculator = (data) => {

  // Step 1: Calculator Categories, Step 2: Calculator Inputs, Step 3: Input Number
  const [step, setStep] = useState(1);

  // Selected option number from choices
  const [selectedNum, setSelectedNum] = useState(0);

  const type = data.type
  const value = data.value;
  const categories = data.category;
  const inputs = data.input;
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
              {step === 1 && (
                  <>
                    <div className={styles.formDiv}>
                      {
                        categories.map((category, i) => (
                            <Form.Check
                                className={styles.form}
                                type="radio"
                                id={`custom-radio item-`}
                                name={category.name}
                                label={category.name}
                                value={i}
                                onClick={(e) => setSelectedNum(e.target.value)}
                            />
                        ))
                      }
                    </div>
                  </>
              )}
              {step === 2 && (
                  <>
                    <div className={styles.formDiv}>
                      {
                        inputs[selectedNum].map((input, i) => (
                            <Form.Check
                                className={styles.form}
                                type="radio"
                                id={`custom-radio item-`}
                                name={input.name}
                                label={input.name}
                                value={i}
                            />
                        ))
                      }
                    </div>
                  </>
              )}
              {step === 3 && (
                  <>
                    <div className={styles.formDiv}>
                      <Form.Control className={styles.form} type="text" placeholder="Enter a value"/>
                    </div>
                  </>
              )}
              <div className={styles.btnContainer}>
                {step < 3 && (
                    <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        className={styles.button}
                        data-testid="next_btn"
                        onClick={((e) => setStep(step + 1))}
                    >
                      Next
                    </Button>
                )
                }
                {step === 3 && (
                    <Button
                        variant="primary"
                        size="lg"
                        type="submit"
                        className={styles.button}
                        data-testid="next_btn"
                    >
                      Next
                    </Button>
                )
                }
              </div>
            </div>
            <div className={styles.progressBarBody}>
              <div style={{width: "max-content"}}>
                <h3 style={{fontSize: "25px"}}>
                  Progress Bar
                </h3>
                <ProgressBar
                    value={value}
                    categories={categories}
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
