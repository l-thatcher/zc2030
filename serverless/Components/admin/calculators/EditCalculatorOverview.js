import styles from "../../../styles/Calculator.module.css";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import UserList from "./UserList";
import CalculatorCategory from "./CalculatorCategory";
import {useState} from "react";
import {
    createUserCalculator,
    getCalculatorCategories, getCalculatorInputs, getCalculatorTypes,
    saveCalculatorCategories,
    saveCalculatorInputs, saveCalculatorType,
    updateCalculatorCategories, updateCalculatorInputs, updateCalculatorType
} from "../../../services/CalculatorService";
import {useRouter} from "next/router";

const EditCalculatorOverview = (data) => {
    const router = useRouter()
    const [details, setDetails] = useState(data.details);
    const [users, setUsers] = useState(data.users)
    const [categories, setCategories] = useState(data.categories)
    const [inputs, setInputs] = useState(data.inputs)
    const [categoryId, setCategoryId] = useState()
    const [inputId, setInputId] = useState()
    const [overviewShowing, setOverviewShowing] = useState(true);
    const [showCategory, setShowCategory] = useState(false);
    const [save, setSave] = useState(false)

    function handleEdit() {
        setOverviewShowing(false)
        setShowCategory(true)
    }

    function handleReturnToOverview() {
        setOverviewShowing(true)
        setShowCategory(false)
    }

    function handleNameChange(event) {
        let temp;
        temp = {id: details.id, name: event.target.value, public: details.public};
        setDetails(temp);
    }

    function handleVisibilityChange(event) {
        let temp;
        temp = {id: details.id, name: details.name, public: event.target.value === "true"};
        setDetails(temp);
    }

    // async function saveUsers(type) {
    //     for (let i = 0; i < users.length; i++) {
    //         if (users[i].id === "") {
    //             await createUserCalculator(type.id, users[i].name);
    //         }
    //     }
    // }

    // "Save" handler button
    // async function handleSave() {
    //     let type
    //     if (details.id === undefined || details.id === "") {
    //         type = (await saveCalculatorType([details.name, details.public])).data
    //     } else{
    //         type = await updateCalculatorType([details.id, details.name, details.public])
    //     }
    //     await saveUsers(type);
    //     await saveCategories(type);
    //     const cat = await getCalculatorCategories(type.id)
    //     setCategories(cat.data)
    //     for (let i = 0; i < cat.data.length; i++) {
    //         await saveInputs(cat.data[i].id, i, type)
    //     }
    //     //await router.replace("http://localhost:3000/admin/showCalculators")
    // }

    //     const typeData = [ details.name,details.public];
    //     console.log(typeData, "here1234")
    //     const temp = await saveCalculatorType(typeData)
    //     console.log(`here12345 ${temp}`)
    //
    //     await saveCategories();
    //     const cat = await getCalculatorCategories(details.id)
    //     setCategories(cat.data)
    //
    //     for (let i = 0; i < cat.data.length; i++){
    //         await saveInputs(cat.data[i].id, i)
    //     }
    //     await router.replace("http://localhost:3000/admin/showCalculators")
    // }
    //
    //
    // Save or Update Categories
    // const saveCategories = async (type) => {
    //     for (let i = 0; i < categories.length; i++) {
    //
    //         if (categories[i].id === undefined) {
    //             const data = [type.id, categories[i].name]
    //             await saveCalculatorCategories(type.id, data);
    //
    //         } else {
    //             const data = [type.id, categories[i].name, categories[i].id]
    //             await updateCalculatorCategories(type.id, data);
    //
    //         }
    //     }
    // }

    // // Save or Update Inputs
    // const saveInputs = async (category_id, index, type) => {
    //
    //         console.log(inputs[0].length)
    //         console.log(category_id)
    //         console.log(index)
    //         for (let b = 0; b < inputs[index].length; b++){
    //
    //             const newCategoryId = categoryId + 1;
    //
    //             if (inputs[index][b].id === undefined){
    //
    //                 if (category_id === undefined){
    //                     const data = [newCategoryId, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit]
    //                     await saveCalculatorInputs(type.id, newCategoryId, data);
    //                 } else {
    //                     const data = [category_id, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit]
    //                     await saveCalculatorInputs(type.id, category_id, data);
    //                 }
    //
    //             } else {
    //
    //                 if (category_id === undefined){
    //                     const data = [newCategoryId, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit]
    //                     await saveCalculatorInputs(type.id, newCategoryId, data);
    //                 } else {
    //                     const data = [category_id, inputs[index][b].name, inputs[index][b].factor, inputs[index][b].unit, inputs[index][b].id]
    //                     await updateCalculatorInputs(type.id, category_id, data);
    //                 }
    //             }
    //         }
    // }


    // Receives data back from CalculatorInput
    // // const getCalculatorCategoryData = (newInput, newCategory) => {
    // //
    // //     // Set Input data
    // //     let InputClone = [...inputs];
    // //     InputClone = newInput
    // //     setInputs(InputClone)
    // //
    // //     // Set Category data
    // //     let CategoryClone = [...categories];
    // //     CategoryClone = newCategory
    // //     setCategories(CategoryClone)
    // //
    // //     // Set last defined category Id
    // //     for (let i = categories.length - 1; i >= 0; i--) {
    // //         if (categories[i].id !== undefined) {
    // //             setCategoryId(categories[i].id)
    // //             i = 0;
    // //         }
    // //     }
    //
    //     // Set Category data
    //     // let CategoryClone = [...categories];
    //     // CategoryClone = newCategory
    //     // setCategories(CategoryClone)
    //
    //     console.log(inputs)
    //     console.log(categories)
    //     console.log(details)
    //
    // };

    return (
        <div className={styles.containerMargin5}>
            {overviewShowing === true && (
                <div className={styles.main}>
                    <div className={styles.pageContentMain}>
                <Form style={{padding:"5%"}}>
                    <Form.Group controlId="form.Name">
                        <Form.Label style={{ width: "100%", fontSize: "25px" }}>Calculator Name</Form.Label>
                        <Form.Control data-testid="nameInput" type="text" placeholder="Enter name" size="lg"
                                      onChange={e => handleNameChange(e)} value={details ? details.name : ""}/>
                    </Form.Group>
                    <Form.Group controlId="form.Visibility" style={{marginTop:"20px"}}>
                        <Form.Label style={{ width: "100%", fontSize: "25px" }}>Calculator Visibility</Form.Label>
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
                    <div style={{ width: "100%", textAlign: "center" }}>
                    <Button
                        style={{width: "125px", marginTop: "40px"}}
                        variant="secondary"
                        size="lg"
                        type="submit"
                        data-testid="next_btn"
                        onClick={(e) => handleEdit()}
                        className={styles.button}
                    >
                        Next
                    </Button>
                    </div>
                </Form>
                    </div>
                </div>
            )
            }
            {showCategory === true && (
                <CalculatorCategory type={details}
                                    categories={categories}
                                    inputs={inputs}
                                    users={users}
                                    handleBackpress={handleReturnToOverview}
                />
            )}
        </div>
    )
};

export default EditCalculatorOverview;