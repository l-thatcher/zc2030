import styles from "../../styles/Calculator.module.css";
import {Button, Form} from "react-bootstrap";
import ProgressBar from "./ProgressBar";
import {useState} from "react";
import {saveCalculatorResult} from "../../services/CalculatorService";

const CarbonCalculator = (data) => {

  // Step 1: Calculator Categories, Step 2: Calculator Inputs, Step 3: Input Number
  const [step, setStep] = useState(1);

  const [inputValue, setInputValue] = useState();

  // Step  1 selected value from choices
  const [step1Value, setStep1Value] = useState(0);

  // Step  2 selected value from choices
  const [step2Value, setStep2Value] = useState(0);

  // result
  const [result, setResult] = useState(0);

  const type = data.type
  const value = data.value;
  const categories = data.category;
  const inputs = data.input;
  const results = data.data.results;

  // console.log(inputs[step1Value][step2Value].id)
  // console.log(inputs[step1Value][step2Value].factor)

  console.log(type.id)
  console.log(categories[step1Value].id)
  console.log(inputs[step1Value][step2Value].id)


  function handleCalculation(input) {
      const value = input * inputs[step1Value][step2Value].factor;
      setInputValue(input)
      setResult(value);
  }

  function saveCalculator() {

    const data = [result, inputValue]
    saveCalculatorResult(type.id, categories[step1Value].id, inputs[step1Value][step2Value].id, data).then((res) =>
    {
      console.log("Data added successfully", res.data);
    })
  }

  return (
      <main className={styles.main}>
        <div className={styles.pageContentMain}>
          <h2 className={styles.h2} data-testid="calculator_heading">
            {type.name} Calculator
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
                                onClick={(e) => setStep1Value(e.target.value)}
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
                        inputs[step1Value].map((input, i) => (
                            <Form.Check
                                className={styles.form}
                                type="radio"
                                id={`custom-radio item-`}
                                name={input.name}
                                label={input.name}
                                value={i}
                                onClick={(e) => setStep2Value(e.target.value)}
                            />
                        ))
                      }
                    </div>
                  </>
              )}
              {step === 3 && (
                  <>
                    <div className={styles.formDiv}>
                      <Form.Control
                          className={styles.form}
                          type="number"
                          placeholder={inputs[step1Value][step2Value].unit}
                          onChange={(e) => {handleCalculation(e.target.value)}}/>
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
                        onClick={((e) => {setStep(step + 1), saveCalculator(), setInputValue(e)})}
                    >
                      Next
                    </Button>
                )
                }
              </div>
              {step === 4 && (
                  <>
                    <div className={styles.formDiv}>
                      <Form.Control
                          className={styles.form}
                          type="number"
                          placeholder={result}/>
                    </div>
                  </>
              )}
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
