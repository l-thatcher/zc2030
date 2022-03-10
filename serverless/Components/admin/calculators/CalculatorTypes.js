import {Button, Container, Nav} from "react-bootstrap";
import Link from 'next/link'
import styles from "../../../styles/Calculator.module.css";

const CalculatorTypes = (data) => {
    const types = data.types
    return (
        <Container>
            <h1>Edit Calculators <Button variant="primary" size="lg">+</Button></h1>
            <div className="d-grid gap-2">
                {types.map(it =>
                    <Link href={`/admin/editCalculator/${it.id}`}>
                    <Button variant="primary" size="lg">{it.name}</Button>
                    </Link>
                )}
            < /div>
        </Container>
    )
}

export default CalculatorTypes