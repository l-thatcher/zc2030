import { Button, Container, Modal, Nav } from "react-bootstrap";
import Link from "next/link";
import styles from "../../../styles/Calculator.module.css";
import { AiFillDelete } from "react-icons/ai";
import { deleteCalculatorType } from "../../../services/CalculatorService";
import { useRouter } from "next/router";
import { useState } from "react";

const CalculatorTypes = (data) => {
  const types = data.types;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [idToDelete, setIdToDelete] = useState(null);

  async function handleDelete() {
    await deleteCalculatorType(idToDelete);
    router.reload();
  }

  function handleOpen(id) {
    setIdToDelete(id);
    setShowModal(true);
  }

  return (
    <Container>
      <h1>
        Edit Calculators{" "}
        <Link href={`/admin/addCalculator`}>
          <Button variant="primary" size="lg">
            +
          </Button>
        </Link>
      </h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-[#77C9D480] dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                      <span className="sr-only">Remove</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {types.map((it, i) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="py-4 px-6 text-m font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {it.name}
                      </td>
                      <td className="py-4 px-6 text-m font-medium text-right whitespace-nowrap">
                        <Link href={`/admin/editCalculator/${it.id}`}>
                          Edit
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-m font-medium text-right whitespace-nowrap hover:cursor-pointer">
                        <span onClick={(e) => handleOpen(it.id)}>
                          <AiFillDelete size={20} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Delete type {`"${types[idToDelete]?.name}"`}?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You'll lose all Categories, Inputs and Results collected from this
          type.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes, delete it
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CalculatorTypes;
