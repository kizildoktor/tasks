import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3 className="title">Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option} label={option} />
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
