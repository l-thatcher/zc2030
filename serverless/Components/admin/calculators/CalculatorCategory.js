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
import {
  deleteCalculatorCategory, deleteCalculatorInputs,
  saveCalculatorCategories, saveCalculatorInputs,
  updateCalculatorCategories, updateCalculatorInputs
} from "../../../services/CalculatorService";

const CalculatorCategory = (data) => {
  const [optionSelected, setOptionSelected] = useState(0);
  const [type, setType] = [{ id: 2, name: "Business" }];
  const [showInput, setShowInput] = useState(false);
  const [category, setCategory] = useState(data.categories);
  const [input, setInput] = useState(data.inputs);
  // const [category, setCategory] = useState([]);
  // const [input, setInput] = useState([]);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  let newCategoryId = category[category.length - 1].id + 1

  console.log(newCategoryId)
  console.log(Number(newCategoryId))
  console.log(Math.floor(newCategoryId))
  // Receives data back from CalculatorInput
  const getCalculatorInputData = (optionSelected, newInput, newCategory) => {

    let InputClone = [...input]; // Input clone data
    InputClone[optionSelected] = newInput
    setInput(InputClone)

    let CategoryClone = [...category]; // Input clone data
    CategoryClone[optionSelected] = newCategory
    setCategory(CategoryClone)

    setShowInput(false);
  };

  // "Add" button handler
  function handleAdd(input) {
    if (category.length < 3) {
      setCategory([...category, input]);
      setOptionSelected(category.length);
      setShowInput(true)
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

  // "Create" button handler
  async function handleCreate() {
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
    for (let i = 0; i < category.length; i++) {
      if (category[i].id === undefined) {
        const data = [2, category[i].name]
        await saveCalculatorCategories(type.id, data);

        for (let b = 0; b < input[optionSelected].length; b++) {

          if (input[optionSelected][b].id === undefined) {
            const data = [Number(category[category.length - 1].id + 1), input[i][b]?.name, input[i][b]?.factor, input[i][b]?.unit]
            console.log(category[category.length - 1].id + 1)
            console.log(Number(category[category.length - 1].id + 1))
            console.log(data)
            await saveCalculatorInputs(type.id, Number(category[category.length - 1].id + 1), data);

          } else {
            const data = [Number(category[category.length - 1].id + 1), input[i][b]?.name, input[i][b]?.factor, input[i][b]?.unit, input[i][b]?.id]
            console.log(data)
            await updateCalculatorInputs(type.id, Number(category[category.length - 1].id + 1), data);
          }
        }


      } else {
        const data = [2, category[i].name, category[i].id]
        await updateCalculatorCategories(type.id, data);

        for (let b = 0; b < input[optionSelected].length; b++) {

          if (input[optionSelected][b].id === undefined) {
            const data = [category[i].id, input[i][b]?.name, input[i][b]?.factor, input[i][b]?.unit]
            console.log(data)
            await saveCalculatorInputs(type.id, category[i].id, data);

          } else {
            const data = [category[i].id, input[i][b]?.name, input[i][b]?.factor, input[i][b]?.unit, input[i][b]?.id]
            console.log(data)
            await updateCalculatorInputs(type.id, category[i].id, data);
          }
        }

      }
    }

    // for (let i = 0; i < category.length; i++){
    //
    //   for (let b = 0; b < input[optionSelected].length; b++) {
    //
    //     if (input[optionSelected][b].id === undefined) {
    //       const data = [category[i].id, input[i][b]?.name, input[i][b]?.factor, input[i][b]?.unit]
    //       console.log(data)
    //       await saveCalculatorInputs(type.id, category[i].id, data);
    //
    //     } else {
    //       const data = [category[i].id, input[i][b]?.name, input[i][b]?.factor, input[i][b]?.unit, input[i][b]?.id]
    //       console.log(data)
    //       await updateCalculatorInputs(type.id, category[i].id, data);
    //     }
    //   }
    // }



  }

  // "Edit" button handler
  function handleEdit(i) {
    setOptionSelected(i);
    setShowInput(true);
  }

  // "Delete" button handler
  async function handleDelete(idToRemove) {

    for (let i = 0; i < input[idToRemove].length; i++){
      const categoryId = category[idToRemove].id
      const inputId = input[idToRemove][i].id
      const data = [2, inputId]
      await deleteCalculatorInputs(2, categoryId, data)
    }

    if (category[idToRemove].id !== undefined) {
      const categoryId = category[idToRemove].id
      const data = [2, categoryId]
      await deleteCalculatorCategory(type.id, data);
    }

    setCategory((prevCategories) =>
        prevCategories.filter((value, i) => i !== idToRemove)
    );
    setInput((prevInputs) =>
        prevInputs.filter((value, i) => i !== idToRemove)
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
                  disabled
                  readOnly
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
              calculatorInputData={getCalculatorInputData}
              optionSelected={optionSelected}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorCategory;
