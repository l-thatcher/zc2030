import {useEffect, useState} from "react";
import {Alert, Button, Form, FormControl, FormLabel, InputGroup} from "react-bootstrap";
import {FaEdit} from "react-icons/fa";
import styles from "../../../styles/Calculator.module.css";
import {CgAddR} from "react-icons/cg";

const CalculatorInput = (data) => {

    const [type, setType] = ([{id: 1, name: 'Individual'}])
    // const [input, setInput] = useState([{"id":4,"name":"Bus","factor":20,"unit":"Miles travelled"},{"id":5,"name":"Petrol Car","factor":200,"unit":"Miles travelled"}]);
    const [input, setInput] = useState(data.input);
    const [name, setName] = useState();
    const [factor, setFactor] = useState();
    const [unit, setUnit] = useState();
    const inputTitles = ["name", "factor", "unit"];
    const [category, setCategory] = useState([data.category]);
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState()

    // "Add" button handler
    function handleAdd(newInput) {
        if (input.length < 3) {
            setInput([...input, newInput]);
        } else {
            setErrorMsg("You reached the maximum number of inputs.")
            setError(true)
        }
    }

    // onChange handler
    function handleChange(e, indexCategory, indexInput, inputField){

        let InputClone = [...input]; // Category clone data

        if (inputField === "name") {
            InputClone[indexCategory] = {id: input[indexCategory].id, name: e.target.value, factor: factor, unit: unit};
            setName(e.target.value)
        } else if (inputField === "factor") {
            InputClone[indexCategory] = {id: input[indexCategory].id, name: name, factor: e.target.value, unit: unit};
            setFactor(e.target.value)
        } else if (inputField === "unit") {
            InputClone[indexCategory] = {id: input[indexCategory].id, name: name, factor: factor, unit: e.target.value};
            setUnit(e.target.value)
        }
        setInput(InputClone);
    }

    function handleCreate(){
        for (let i =0; i < category.length; i++){
            let num = i + 1;
            if (category[i].name === undefined){
                setErrorMsg("You might have forgotten to add a value on Category " + num)
                setError(true)
                break;
            }
        }
    }

    return (
       <div>
                <Form>
                    {error === true && (
                        <Alert variant="danger" onClose={() => setError(false)} dismissible>
                            <Alert.Heading>We have a little problem.</Alert.Heading>
                            <p>
                                {errorMsg}
                            </p>
                        </Alert>
                    )
                    }
                    <Form.Group className="mt-5" controlId="exampleForm.ControlInput1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control size="lg" type="text" placeholder={category[0].name} disabled readOnly/>
                    </Form.Group>
                    {input.map((inputVal, i) =>
                        <div>
                            <Form.Group className="mt-5" controlId="exampleForm.ControlInput1">
                                <FormLabel className="mt-4" style={{width: "100%"}}>Input {i + 1}</FormLabel>
                            </Form.Group>

                            { inputTitles.map((inputTitle, b) =>
                            <InputGroup style={{width:"100%"}} size="lg" className="mt-2">
                            <InputGroup.Text>{inputTitle}</InputGroup.Text>
                            <FormControl aria-describedby="inputGroup-sizing-sm" value={input[i][inputTitle]}
                                         onChange={(e) => handleChange(e, i, b, inputTitle)}/>
                            </InputGroup>
                            )}
                        </div>
                        )
                    }
                    <Button type={"button"} className={styles.buttonAdd} variant="outline-secondary" id="button-addon2" size={"md"} style={{width:"100%", marginTop:"10px"}} onClick={(e) => handleAdd(e)}>
                        Add <CgAddR size={20} style={{marginBottom:"4px"}}/>
                    </Button>

                </Form>
                <div style={{width:"100%", textAlign:"center"}}>
                    <Button
                        style={{ width: "125px", marginTop: "40px"}}
                        variant="secondary"
                        size="lg"
                        type="submit"
                        className={styles.button}
                        data-testid="next_btn"
                        onClick={(e) => console.log(input)}
                    >
                        Create
                    </Button>
                </div>
    </div>
    )
};

export default CalculatorInput;