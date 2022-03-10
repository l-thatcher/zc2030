import {Button, Col, Container, Form, Row} from "react-bootstrap";

export default function showCalculators() {
    return (
        <div>
            <Container>
                <h1>Edit Calculators <Button variant="primary" size="lg">+</Button></h1>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">Individual</Button>
                    <Button variant="primary" size="lg">Business</Button>

                </div>
            </Container>
            <br/><br/>
            <Container>
                <Form>
                    <Form.Group controlId="form.Name">
                        <Form.Label>Calculator Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"/>
                    </Form.Group>
                    <Form.Group controlId="form.Visibility">
                        <Form.Label>Calculator Visibility</Form.Label>
                        <div key={`default-radio`} className="mb-3">
                            <Form.Check
                                type="radio"
                                id={`public`}
                                label={`Public`}
                                name="visibility"
                            />
                            <Form.Check
                                type="radio"
                                id="private"
                                label="Private"
                                checked="true"
                                name="visibility"
                            />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="form.Users">
                        <Form.Label>Users that can access the calculator:</Form.Label>
                        <Row>
                            <Col><Form.Control type="text" value="rowbotom@gmail.com"/></Col>
                            <Col><Button>Remove</Button></Col>
                        </Row>
                        <Row>
                            <Col><Form.Control type="text" value="rowbotom@gmail.com"/></Col>
                            <Col><Button>Remove</Button></Col>
                        </Row>
                        <Row>
                            <Col><Form.Control type="text" value="rowbotom@gmail.com"/></Col>
                            <Col><Button>Remove</Button></Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}
