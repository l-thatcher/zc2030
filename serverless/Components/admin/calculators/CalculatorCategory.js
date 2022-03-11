import {
  Alert,
  Button,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
} from "react-bootstrap";
import styles from "../../../styles/Calculator.module.css";
import { FaEdit } from "react-icons/fa";
import { CgAddR } from "react-icons/Cg";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import CalculatorInput from "./CalculatorInput";

const CalculatorCategory = (data) => {
  const [optionSelected, setOptionSelected] = useState(0);
  const [type, setType] = [{ id: 1, name: "Individual" }];
  const [showInput, setShowInput] = useState(false);
  const [category, setCategory] = useState(data.categories);

  const [input, setInput] = useState(data.inputs);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  // "Add" button handler
  function handleAdd(input) {
    if (category.length < 3) {
      setCategory([...category, input]);
    } else {
      setErrorMsg("You reached the maximum number of categories.");
      setError(true);
    }
  }

  // onChange handler
  function handleChange(e, index) {
    let categoryClone = [...category];
    categoryClone[index] = { id: index, name: e.target.value };

    setCategory(categoryClone);
  }

  function handleCreate() {
    for (let i = 0; i < category.length; i++) {
      let num = i + 1;
      if (category[i].name === undefined) {
        setErrorMsg(
          "You might have forgotten to add a value on Category " + num
        );
        setError(true);
        break;
      }
    }
  }

  function handleEdit(i) {
    setOptionSelected(i);
    setShowInput(true);
  }

  function handleDelete(idToRemove) {
    setCategory((prevCategories) =>
      prevCategories.filter((value, i) => i !== idToRemove)
    );
  }

  return (
    <div className="container-md" style={{ width: "100%" }}>
      <div className="main" style={{ backgroundColor: "white", padding: "3%" }}>
        {showInput === false && (
          <Form>
            {error === true && (
              <Alert
                variant="danger"
                onClose={() => setError(false)}
                dismissible
              >
                <Alert.Heading>We have a little problem.</Alert.Heading>
                <p>{errorMsg}</p>
              </Alert>
            )}
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ fontSize: "25px" }}>Type</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder={type.name}
                disabled
                readOnly
              />
            </Form.Group>
            <FormLabel style={{ width: "100%", fontSize: "25px" }}>
              Categories
            </FormLabel>
            {category.map((category, i) => (
              <InputGroup size="lg" className="mt-2">
                <FormControl
                  id={`category-${i + 1}`}
                  placeholder={`E.g. Category ${i + 1}`}
                  aria-label={`category-${i + 1}`}
                  aria-labelledby={`category-${i + 1}`}
                  value={category.name}
                  onChange={(e) => handleChange(e, i)}
                />
                <Button
                  variant="primary"
                  id="button-addon2"
                  onClick={(e) => handleEdit(i)}
                >
                  Edit <FaEdit size={20} style={{ marginBottom: "5px" }} />
                </Button>
                <Button
                  variant="danger"
                  id="button-addon2"
                  onClick={(e) => handleDelete(i)}
                >
                  <AiFillDelete size={20} />
                </Button>
              </InputGroup>
            ))}
            <Button
              type={"button"}
              className={styles.buttonAdd}
              variant="outline-secondary"
              id="button-addon2"
              size={"md"}
              style={{ width: "100%", marginTop: "10px" }}
              onClick={(e) => handleAdd("")}
            >
              Add <CgAddR size={20} style={{ marginBottom: "4px" }} />
            </Button>
          </Form>
        )}
        {showInput === false && (
          <div style={{ width: "100%", textAlign: "center" }}>
            <Button
              style={{ width: "125px", marginTop: "40px" }}
              variant="secondary"
              size="lg"
              type="submit"
              className={styles.button}
              data-testid="next_btn"
              onClick={(e) => handleCreate(e)}
            >
              Create
            </Button>
          </div>
        )}
        {showInput === true && (
          <div style={{ width: "100%" }}>
            <CalculatorInput
              category={category[optionSelected]}
              input={input[optionSelected]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorCategory;
