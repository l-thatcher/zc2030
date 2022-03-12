import {Button, Container, Nav} from "react-bootstrap";
import Link from "next/link";
import styles from "../../../styles/Calculator.module.css";
import {AiFillDelete} from "react-icons/ai";
import {deleteCalculatorType} from "../../../services/CalculatorService";
import {useRouter} from "next/router";

const CalculatorTypes = (data) => {
    const types = data.types;
    const router = useRouter()

    async function handleDelete(idToDelete) {
        await deleteCalculatorType(idToDelete)
        router.reload()
    }

    return (
        <Container>
            <h1>
                Edit Calculators{" "}
                <Button variant="primary" size="lg">
                    +
                </Button>
            </h1>
            <div className="d-grid gap-2">
                {types.map((it) => (
                    <div>
                        <Link href={`/admin/editCalculator/${it.id}`}>
                            <Button variant="primary">
                                {it.name}
                            </Button>
                        </Link>
                        <Button
                            variant="danger"
                            id="button-addon2"
                            onClick={(e) => handleDelete(it.id)}
                        >                  <AiFillDelete size={20} />
                        </Button>
                    </div>
                    ))}
                    </div>
                    </Container>
                    );
                };

                export default CalculatorTypes;
