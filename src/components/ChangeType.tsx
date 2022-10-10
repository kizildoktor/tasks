import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    const flipQuestion = (): void => {
        if (question === "short_answer_question") {
            setQuestion("multiple_choice_question");
        }
        if (question === "multiple_choice_question") {
            setQuestion("short_answer_question");
        }
    };
    return (
        <div>
            <Button onClick={flipQuestion}>
                Change Type
                {question === "short_answer_question" ? (
                    <div>Short Answer</div>
                ) : (
                    <div>Multiple Choice</div>
                )}
            </Button>
        </div>
    );
}
