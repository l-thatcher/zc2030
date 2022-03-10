import {Button, Col, Container, Form, Row} from "react-bootstrap";
import CalculatorTypes from "../../Components/admin/calculators/CalculatorTypes";
import {getSession} from "next-auth/react";
import {getCalculatorTypes} from "../../services/CalculatorService";

export default function showCalculators(props) {
    const types = props.types
    return (
        <CalculatorTypes types={types}/>
    )}

export async function getStaticProps(context) {
    const typesRes = await getCalculatorTypes();
    const types = typesRes.data;
    console.log(types)
    return { props: { types } }}

// {/*<br/><br/>*/}
// {/*<Container>*/}
// {/*    <Form>*/}
// {/*        <Form.Group controlId="form.Name">*/}
// {/*            <Form.Label>Calculator Name</Form.Label>*/}
// {/*            <Form.Control type="text" placeholder="Enter name"/>*/}
// {/*        </Form.Group>*/}
// {/*        <Form.Group controlId="form.Visibility">*/}
// {/*            <Form.Label>Calculator Visibility</Form.Label>*/}
// {/*            <div key={`default-radio`} className="mb-3">*/}
// {/*                <Form.Check*/}
// {/*                    type="radio"*/}
// {/*                    id={`public`}*/}
// {/*                    label={`Public`}*/}
// {/*                    name="visibility"*/}
// {/*                />*/}
// {/*                <Form.Check*/}
// {/*                    type="radio"*/}
// {/*                    id="private"*/}
// {/*                    label="Private"*/}
// {/*                    checked="true"*/}
// {/*                    name="visibility"*/}
// {/*                />*/}
// {/*            </div>*/}
// {/*        </Form.Group>*/}
// {/*        <Form.Group controlId="form.Users">*/}
// {/*            <Form.Label>Users that can access the calculator:</Form.Label>*/}
// {/*            <Row>*/}
// {/*                <Col><Form.Control type="text" value="rowbotom@gmail.com"/></Col>*/}
// {/*                <Col><Button>Remove</Button></Col>*/}
// {/*            </Row>*/}
// {/*            <Row>*/}
// {/*                <Col><Form.Control type="text" value="rowbotom@gmail.com"/></Col>*/}
// {/*                <Col><Button>Remove</Button></Col>*/}
// {/*            </Row>*/}
// {/*            <Row>*/}
// {/*                <Col><Form.Control type="text" value="rowbotom@gmail.com"/></Col>*/}
// {/*                <Col><Button>Remove</Button></Col>*/}
// {/*            </Row>*/}
// {/*        </Form.Group>*/}
// {/*    </Form>*/}
// {/*</Container>*/}
