import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userInput, setUserInput] = useState<string>("");
    function updateInput(event: React.ChangeEvent<HTMLTextAreaElement>): void {
        setUserInput(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkInputAnswer">
                <Form.Label>Enter Input: </Form.Label>
                <Form.Control value={userInput} onChange={updateInput} />
            </Form.Group>
            {expectedAnswer === userInput ? "✔️" : "❌"}
        </div>
    );
}
