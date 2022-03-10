import EditCalculatorOverview from "../../../../Components/admin/calculators/EditCalculatorOverview";
import {Container} from "react-bootstrap";
import {
    getCalculatorCategories,
    getCalculatorType,
    getUserCategoryProgress
} from "../../../../services/CalculatorService";

export default function editCalculator(props) {
    const categories = props.categories;
    return (
        <Container>
            <h1>Edit Calculator</h1>
        <EditCalculatorOverview categories = {categories}/>
        </Container>
    )}

export async function getStaticProps(context) {
    const typeId = context.params.id;
    const [typeRes, categoriesRes] = await Promise.all([
        getCalculatorType(typeId), getCalculatorCategories(typeId)
    ])
    const calculatorDetails = categoriesRes.data;
    const calculatorCategories = categoriesRes.data;

    return { props: { categories: calculatorCategories } }}

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
            }
        ]
    }
}
