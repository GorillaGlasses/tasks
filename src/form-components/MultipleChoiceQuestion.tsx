import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [current, setCurrent] = useState<string>(options[0]);
    return (
        <div>
            <Form.Group>
                <Form.Label></Form.Label>
                <Form.Select
                    value={current}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        setCurrent(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option}>{option}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            Result:{expectedAnswer == current ? "✔️" : "❌"}
        </div>
    );
}
