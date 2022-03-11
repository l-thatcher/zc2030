import EditCalculatorOverview from "../../../../Components/admin/calculators/EditCalculatorOverview";
import {Container} from "react-bootstrap";
import {
    getCalculatorCategories,
    getCalculatorType, getCalculatorUsers,
    getUserCategoryProgress
} from "../../../../services/CalculatorService";

export default function editCalculator(props) {
    const categories = props.categories;
    const details = props.details;
    const users = props.users;
    return (
        <Container>
            <h1>Edit Calculator</h1>
            <EditCalculatorOverview details = {details} users = {users}/>
        </Container>
    )
}

export async function getStaticProps(context) {
    const typeId = context.params.typeId;
    const [typeRes, categoriesRes, usersRes] = await Promise.all([
        getCalculatorType(typeId), getCalculatorCategories(typeId), getCalculatorUsers(typeId)
    ])
    const calculatorDetails = typeRes.data;
    const calculatorCategories = categoriesRes.data;
    const users = usersRes.data
    return {props: {categories: calculatorCategories, details: calculatorDetails, users: users}}
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    typeId: "1",
                },
            },
            {
                params: {
                    typeId: "2",
                },
            },
        ]
    }

}
