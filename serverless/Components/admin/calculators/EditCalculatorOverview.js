import {Button, Col, Container, Form, Row} from "react-bootstrap";
import UserList from "./UserList";
import CalculatorCategory from "./CalculatorCategory";
import {useState} from "react";
import {
    getCalculatorCategories, getCalculatorInputs, getCalculatorTypes,
    saveCalculatorCategories,
    saveCalculatorInputs, saveCalculatorType,
    updateCalculatorCategories, updateCalculatorInputs, updateCalculatorType
} from "../../../services/CalculatorService";
import {useRouter} from "next/router";

const EditCalculatorOverview = (data) => {
    const router = useRouter()
    const [details, setDetails] = useState(data.details);
    const users = data.users;
    const [categories, setCategories] = useState(data.categories)
    const [inputs, setInputs] = useState(data.inputs)
    const [categoryId, setCategoryId] = useState()
    const [inputId, setInputId] = useState()
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

    // "Save" handler button
    async function handleSave() {
        //If type.id != "" THEN CREATE
        //Get all overview info, get all user list info, get all category info, get all inputs
        //One big create

        //ELSE SAVE
        // console.log(details)
        // await saveType();

        await saveCategories();
        const cat = await getCalculatorCategories(details.id)
        setCategories(cat.data)

        for (let i = 0; i < cat.data.length; i++){
            await saveInputs(cat.data[i].id, i)
        }
        await router.replace("http://localhost:3000/admin/showCalculators")
    }

    const saveType = async () => {
            const data = [ details.name,details.public];
            console.log(data, "here1234")
            setDetails(await saveCalculatorType(data))
    }

    // Save or Update Categories
    const saveCategories = async () => {
        for (let i = 0; i < categories.length; i++) {

            if (categories[i].id === undefined) {
                const data = [details.id, categories[i].name]
                await saveCalculatorCategories(details.id, data);

            } else {
                const data = [details.id, categories[i].name, categories[i].id]
                await updateCalculatorCategories(details.id, data);

            }
        }
    }

    // Save or Update Inputs
    const saveInputs = async (category_id, index) => {

            console.log(inputs[0].length)
            console.log(category_id)
            console.log(index)
            for (let b = 0; b < inputs[index].length; b++){

                const newCategoryId = categoryId + 1;

                if (inputs[index][b].id === undefined){

                    if (category_id === undefined){
                        const data = [newCategoryId, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit]
                        await saveCalculatorInputs(details.id, newCategoryId, data);
                    } else {
                        const data = [category_id, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit]
                        await saveCalculatorInputs(details.id, category_id, data);
                    }

                } else {

                    if (category_id === undefined){
                        const data = [newCategoryId, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit]
                        await saveCalculatorInputs(details.id, newCategoryId, data);
                    } else {
                        const data = [category_id, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit, inputs[index][b].id]
                        await updateCalculatorInputs(details.id, category_id, data);
                    }
                }
            }
    }


    // Receives data back from CalculatorInput
    const getCalculatorCategoryData = (newInput, newCategory) => {

        // Set Input data
        let InputClone = [...inputs];
        InputClone = newInput
        setInputs(InputClone)

        // Set Category data
        let CategoryClone = [...categories];
        CategoryClone = newCategory
        setCategories(CategoryClone)

        // Set last defined category Id
        for (let i = categories.length - 1; i >=0; i--){
                if (categories[i].id !== undefined) {
                    setCategoryId(categories[i].id)
                    i=0;
                }
        }

        // Set Category data
        // let CategoryClone = [...categories];
        // CategoryClone = newCategory
        // setCategories(CategoryClone)

        console.log(inputs)
        console.log(categories)
        console.log(details)

    };

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
                    <Button
                        style={{ width: "125px", marginTop: "40px" }}
                        variant="secondary"
                        size="lg"
                        data-testid="next_btn"
                        onClick={(e) => handleSave()}
                    >
                        Save
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