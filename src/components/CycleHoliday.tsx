import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Holiday: 🎃"
    | "Holiday: 🧨"
    | "Holiday: 🐉"
    | "Holiday: 🦃"
    | "Holiday: 🐰";

const alphabeticOrder: Record<Holiday, Holiday> = {
    "Holiday: 🐉": "Holiday: 🐰",
    "Holiday: 🐰": "Holiday: 🎃",
    "Holiday: 🎃": "Holiday: 🧨",
    "Holiday: 🧨": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🐉"
};

const chronologicOrder: Record<Holiday, Holiday> = {
    "Holiday: 🐉": "Holiday: 🧨",
    "Holiday: 🧨": "Holiday: 🐰",
    "Holiday: 🐰": "Holiday: 🎃",
    "Holiday: 🎃": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🐉"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Holiday: 🐉");
    function alphabeticCycle(): void {
        const nextHoliday: Holiday = alphabeticOrder[holiday];
        setHoliday(nextHoliday);
    }
    function chronologicCycle(): void {
        const nextHoliday: Holiday = chronologicOrder[holiday];
        setHoliday(nextHoliday);
    }
    return (
        <div>
            <Button onClick={alphabeticCycle}>Advance by Alphabet</Button>{" "}
            <Button onClick={chronologicCycle}>Advance by Year</Button>{" "}
            <Button>{holiday}</Button>
        </div>
    );
}
