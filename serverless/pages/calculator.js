import styles from '../styles/Calculator.module.css'
import {
  Form, Button
} from 'react-bootstrap';

export default function Calculator() {
  return (
      <main className={styles.main}>
        <div className={styles.titleDiv}>
          <h1>
            Carbon Calculator
          </h1>
        </div>

        <div className={styles.pageContent}>
            <div className={styles.calculatorBody}>
                <h3>
                    Select a category:
                </h3>
                <div className={styles.formDiv}>
                    <Form.Check
                        className={styles.form}
                        type="radio"
                        id={`custom-radio item-`}
                        name="category"
                        label={"Dummy"}
                        value={"Dummy"}
                    />
                    <Form.Check
                        className={styles.form}
                        type="radio"
                        id={`custom-radio item-`}
                        name="category"
                        label={"Dummy"}
                        value={"Dummy"}
                    />
                    <Form.Check
                        className={styles.form}
                        type="radio"
                        id={`custom-radio item-`}
                        name="category"
                        label={"Dummy"}
                        value={"Dummy"}
                    />
                </div>
                <div>
                    <Button variant="primary" size="lg" type="submit" className={styles.button}>
                        Next
                    </Button>
                </div>
            </div>
            <div className={styles.progressBar}>
                <h3>progress component</h3>
            </div>
        </div>


      </main>
  )
}
