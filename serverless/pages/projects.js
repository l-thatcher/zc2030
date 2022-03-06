import {useState} from "react";
import {Nav} from "react-bootstrap";

function Welcome(props) {
    return <h1>Test: {props.name}</h1>;
}

export default function Projects() {
    return (
        <div>
            <Welcome name="Card 1" />
            <Welcome name="Card 2" />
            <Welcome name="Card 3" />
        </div>
    );
}

