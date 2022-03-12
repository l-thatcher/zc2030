import {Button, Container, Modal, Nav} from "react-bootstrap";
import Link from "next/link";
import styles from "../../../styles/Calculator.module.css";
import {AiFillDelete} from "react-icons/ai";
import {deleteCalculatorType} from "../../../services/CalculatorService";
import {useRouter} from "next/router";
import {useState} from "react";

const CalculatorTypes = (data) => {
    const types = data.types;
    const router = useRouter()
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const [idToDelete, setIdToDelete] = useState(null)

    async function handleDelete() {
        await deleteCalculatorType(idToDelete)
        router.reload()
    }

    function handleOpen(id) {
        setIdToDelete(id)
        setShowModal(true)
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
                            onClick={(e) => handleOpen(it.id)}
                        > <AiFillDelete size={20}/>
                        </Button>
                    </div>
                ))}
            </div>
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deleting a calculator type is permanent and will delete all corresponding data.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>

        </Container>

    );
};

export default CalculatorTypes;
