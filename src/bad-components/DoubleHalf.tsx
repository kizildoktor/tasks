import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DHProperties {
    setDhValue: (setDhValue: number) => void;
    dhValue: number;
}

function Doubler({ dhValue, setDhValue }: DHProperties): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: DHProperties): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3 className="title">Double Half</h3>
            <div className="sentence">
                The current value is: <span>{dhValue}</span>
            </div>
            <div>
                <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>{" "}
                <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>{" "}
            </div>
        </div>
    );
}
