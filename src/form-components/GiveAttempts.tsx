import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");
    return (
        <div>
            Attempts: {attempts}
            <Form.Group controlId="attemptsControl">
                <Form.Label>Requests:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequests(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    !isNaN(parseInt(requests)) ?
                        setAttempts(attempts + parseInt(requests))
                    :   setAttempts(attempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
