import { Button, Col, Container, Form, Row } from "react-bootstrap";

const EditCalculatorOverview = (data) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="form.Name">
          <Form.Label>Calculator Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
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
            <Col>
              <Form.Control type="text" value="rowbotom@gmail.com" />
            </Col>
            <Col>
              <Button>Remove</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="text" value="rowbotom@gmail.com" />
            </Col>
            <Col>
              <Button>Remove</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="text" value="rowbotom@gmail.com" />
            </Col>
            <Col>
              <Button>Remove</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditCalculatorOverview;
