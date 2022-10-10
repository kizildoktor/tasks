import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visible, switchVisibility] = useState<boolean>(false);
    const visibility = (): void => {
        switchVisibility(!visible);
    };
    return (
        <div>
            <Button onClick={visibility}>
                Reveal Answer {visible && <div>42</div>}
            </Button>
        </div>
    );
}
