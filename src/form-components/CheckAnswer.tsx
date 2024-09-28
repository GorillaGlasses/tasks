import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="userAnswer">
                <Form.Label>
                    What is the meaning of life, the universe, and everything?{" "}
                </Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUserAnswer(event.target.value);
                    }}
                />
            </Form.Group>
            {expectedAnswer == userAnswer ? "✔️" : "❌"}
        </div>
    );
}
