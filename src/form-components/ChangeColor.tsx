import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colorsArr = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown"
    ];
    const [myColor, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3 className="title">Change Color</h3>
            {colorsArr.map((thisColor: string) => (
                <li key={thisColor}>
                    <Form.Check
                        inline
                        type="radio"
                        checked={myColor === thisColor}
                        label={thisColor}
                        color={thisColor}
                        value={thisColor}
                        onChange={updateColor}
                        className="sentence"
                    />
                </li>
            ))}
            <div className="sentence">You have chosen </div>
            <span
                data-testid="colored-box"
                style={{ backgroundColor: myColor }}
            >
                {myColor}
            </span>
        </div>
    );
}
