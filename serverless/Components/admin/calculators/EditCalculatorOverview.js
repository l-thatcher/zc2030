import {Button, Col, Container, Form, Row} from "react-bootstrap";
import UserList from "./UserList";
import CalculatorCategory from "./CalculatorCategory";
import {useState} from "react";

const EditCalculatorOverview = (data) => {
    const [details, setDetails] = useState(data.details);
    const users = data.users;
    const [categories, setCategories] = useState(data.categories)
    const [inputs, setInputs] = useState(data.inputs)
    const [overviewShowing, setOverviewShowing] = useState(true);
    const [showCategory, setShowCategory] = useState(false);

    function handleEdit(){
        setOverviewShowing(false)
        setShowCategory(true)
    }

    function handleReturnToOverview(){
        setOverviewShowing(true)
        setShowCategory(false)
    }

    function handleNameChange(event) {
        let temp;
        temp = {id: details.id, name: event.target.value, public: details.public };
        setDetails(temp);
    }

    function handleVisibilityChange(event) {
        let temp;
        temp = {id: details.id, name: details.name, public: event.target.value==="true" };
        setDetails(temp);
    }

    // Receives data back from CalculatorInput
    const getCalculatorCategoryData = (newInput, newCategory) => {

        let InputClone = [...inputs]; // Input clone data
        InputClone = newInput
        setInputs(InputClone)

        let CategoryClone = [...categories]; // Category clone data
        CategoryClone = newCategory
        setCategories(CategoryClone)

    };

    console.log(categories)
    console.log(inputs)

    return (
        <div>
            { overviewShowing === true && (
                <Form>
                    <Form.Group controlId="form.Name">
                        <Form.Label>Calculator Name</Form.Label>
                        <Form.Control data-testid="nameInput" type="text" placeholder="Enter name" onChange={e => handleNameChange(e)} value={details ? details.name : ""}/>
                    </Form.Group>
                    <Form.Group controlId="form.Visibility">
                        <Form.Label>Calculator Visibility</Form.Label>
                        <div key={`default-radio`} className="mb-3">
                            <Form.Check
                                type="radio"
                                id={`public`}
                                label={`Public`}
                                checked={details ? details.public : false}
                                name="visibility"
                                data-testid="publicCheck"
                                value={true}
                                onClick={e => handleVisibilityChange(e)}
                            />
                            <Form.Check
                                type="radio"
                                id="private"
                                label="Private"
                                checked={details ? !details.public : true}
                                name="visibility"
                                data-testid="privateCheck"
                                value={false}
                                onClick={e => handleVisibilityChange(e)}
                            />
                        </div>
                    </Form.Group>
                    <UserList details={details} users={users} data-testid="userList"/>
                    <Button
                        style={{ width: "125px", marginTop: "40px" }}
                        variant="secondary"
                        size="lg"
                        type="submit"
                        data-testid="next_btn"
                        onClick={(e) => handleEdit()}
                    >
                        Next
                    </Button>
                </Form>
            )
            }
            { showCategory === true && (
                <CalculatorCategory type = {details} categories = {categories} inputs = {inputs} handleBackpress = {handleReturnToOverview}
                                    calculatorCategoryData={getCalculatorCategoryData}/>
            )}
        </div>
    )
}

export default EditCalculatorOverview;