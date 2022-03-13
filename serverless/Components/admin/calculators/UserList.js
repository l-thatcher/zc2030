import {Button, Col, Form, Row} from "react-bootstrap";

const UserList = (data) => {
    const details = data.details;
    const [users, setUsers] = useState(data.users)

    function handleAdd() {
        setUsers([...users, {id: "", email: ""}]);
    }

    function handleChange(event, index) {
        let temp = [...users]
        temp[index] = {id: users[index].id, name: event.target.value};
        setUsers(temp);
    }


    if (details.public) {
        return null
    } else {
        return (
            <div>
                <Form.Group controlId="form.Users">
                    <Form.Label>Users that can access the calculator:</Form.Label>
                    {users.map((user, i) => (
                        <div key={i} className="mt-2">
                            <Row>
                                <Col><Form.Control type="text" placeholder="Enter email" value={user.email}
                                                   onChange={(e) => handleChange(e, i)}/></Col>
                                <Col><Button>Remove</Button></Col>
                            </Row>
                        </div>
                    ))}
                </Form.Group>
                <Button
                    type={"button"}
                    className={styles.buttonAdd}
                    variant="outline-secondary"
                    id="button-addon2"
                    size={"md"}
                    style={{width: "100%", marginTop: "10px"}}
                    onClick={(e) => handleAdd()}
                >
                    Add <CgAddR size={20} style={{marginBottom: "4px"}}/>
                </Button>
            </div>
        )


    }
}


export default UserList;