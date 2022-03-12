import {Button, Col, Form, Row} from "react-bootstrap";

const UserList = (data) => {
    const details = data.details;
    const users = data.users
    if (details.public){
        return null
    } else{
        return (
        <Form.Group controlId="form.Users">
            <Form.Label>Users that can access the calculator:</Form.Label>
            {users.map((user, i) => (
                <Row>
                    <Col><Form.Control type="text" placeholder="Enter email" value={user.email}/></Col>
                    <Col><Button>Remove</Button></Col>
                </Row>
            ))}
        </Form.Group>)
    }
}

export default UserList;