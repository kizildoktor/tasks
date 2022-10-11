import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progression, setProgression] = useState<boolean>(false);
    const startProgress = (): void => {
        setProgression(true);
        setAttempt(attempt - 1);
    };
    const stopProgress = (): void => {
        setProgression(false);
    };
    const increaseAttempts = (): void => {
        setAttempt(attempt + 1);
    };
    return (
        <div>
            <span>
                {" "}
                <Button
                    onClick={startProgress}
                    disabled={progression || attempt === 0}
                >
                    Start Quiz
                </Button>
            </span>
            <span>
                {" "}
                <Button onClick={stopProgress} disabled={!progression}>
                    Stop Quiz
                </Button>
            </span>
            <span>
                {" "}
                <Button onClick={increaseAttempts} disabled={progression}>
                    Mulligan = {attempt}
                </Button>
            </span>
        </div>
    );
}
