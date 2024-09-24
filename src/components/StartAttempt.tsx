import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setValue] = useState<number>(4);
    const [inProgress, setVisible] = useState<boolean>(false);
    return (
        <div>
            (
            <Button
                onClick={() => {
                    setVisible(true);
                    setValue(attempts - 1);
                }}
                disabled={inProgress || attempts <= 0}
            >
                Start Quiz
            </Button>
            ) (
            <Button
                onClick={() => {
                    setVisible(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            ) (
            <Button
                onClick={() => {
                    setValue(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            ) <div>Attempts: {attempts}</div>
        </div>
    );
}
