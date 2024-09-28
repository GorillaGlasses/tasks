import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <Form.Check
                label="Edit Mode"
                type="switch"
                id="is-editing-check"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            />
            {!editMode && (
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
            <div>
                {editMode && (
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                )}
                {editMode && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is a student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                )}
            </div>
        </div>
    );
}
