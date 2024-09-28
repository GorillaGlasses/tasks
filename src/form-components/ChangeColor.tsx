import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const COLORS = [
        "red",
        "blue",
        "yellow",
        "orange",
        "green",
        "purple",
        "brown",
        "cyan",
    ];
    return (
        <div>
            {COLORS.map((COLOR: string) => (
                <Form.Check
                    key={COLOR}
                    style={{ backgroundColor: COLOR }}
                    inline
                    label
                    type="radio"
                    checked={color === COLOR}
                    value={COLOR}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(event.target.value);
                    }}
                />
            ))}
            You have chosen
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </span>
            .
        </div>
    );
}
