import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function hideStudent(input: string): string {
        return !student ? "" : input;
    }
    return (
        <div>
            <div>
                <h3 className="title">Edit Mode</h3>
            </div>
            <Form.Check
                type="switch"
                id="editMode"
                checked={mode}
                onChange={updateMode}
            />
            <div>
                <Form.Group hidden={!mode}>
                    <Form.Label className="sentence"> Student Name?</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
                <Form.Check
                    className="sentence"
                    inline
                    hidden={!mode}
                    label={hideStudent("student")}
                    type="checkbox"
                    id="student"
                    checked={student}
                    onChange={updateStudent}
                />
            </div>
            <div className="sentence">
                {name} is {student ? "" : "not"} a student
            </div>
        </div>
    );
}
