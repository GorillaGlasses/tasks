import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
//import img from "./Pika.jfif";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <img
                src="data:image/jpeg;base64,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"
                alt="pikachu"
            />
            <h1
                className="App-header"
                role="heading"
                style={{ backgroundColor: "green" }}
            >
                Kevin Lundin&apos;s CISC275 react page!
            </h1>
            <p role="banner">Hello World. This site is used for:</p>
            <ul>
                <li>CISC assignments</li>
                <li>HTML practice</li>
                <li>React practice</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World{" "}
            </Button>
            <Container>
                <Row>
                    <Col
                        style={{ height: 2, width: 5, backgroundColor: "red" }}
                    ></Col>
                    <Col
                        style={{ height: 5, width: 2, backgroundColor: "red" }}
                    ></Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
