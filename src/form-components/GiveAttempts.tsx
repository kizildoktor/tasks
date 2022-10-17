import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [input, setInput] = useState<number>(0);
    function increaseAttempts() {
        setAttempts(attempts + input);
    }
    function decreaseAttempts() {
        setAttempts(attempts - 1);
    }
    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        if (!isNaN(parseInt(event.target.value))) {
            setInput(parseInt(event.target.value));
        }
    }
    return (
        <div className="sentence">
            <h3 className="title">Give Attempts</h3>
            Attempts Left: <span>{attempts}</span>
            <Form.Group controlId="GiveAttempts">
                <Form.Control
                    type="number"
                    value={input}
                    onChange={updateAttempts}
                ></Form.Control>
            </Form.Group>
            <div>
                <Button onClick={increaseAttempts}>Gain</Button>{" "}
                <Button onClick={decreaseAttempts} disabled={attempts < 1}>
                    Use
                </Button>
            </div>
        </div>
    );
}
