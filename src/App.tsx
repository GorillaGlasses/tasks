import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import img from "./Pika.jfif";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <img src={img} alt="pikachu" />
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
