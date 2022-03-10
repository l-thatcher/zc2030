import EditCalculatorOverview from "../../../../Components/admin/calculators/EditCalculatorOverview";
import {Container} from "react-bootstrap";

export default function editCalculator(props) {
    return (
        <Container>
            <h1>Edit Calculator</h1>
        <EditCalculatorOverview/>
        </Container>
    )}

export async function getStaticProps(context) {
    const typeId = context.params.id;


    //TODO: Fetch calculator details
    return { props: {  } }}

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
