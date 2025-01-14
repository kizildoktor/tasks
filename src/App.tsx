import "./App.css";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="title">Umut Kurt</h1>
            <img
                src="https://i.imgur.com/WGovLth.png"
                width="200"
                height="200"
                alt="I like this image."
            />
            <Container style={{ width: "25%" }}>
                <div>
                    <ol className="sentence">
                        <li>This is the first item in the ordered list.</li>
                        <li>This is the second item in the ordered list.</li>
                        <li>This is the third item in the ordered list.</li>
                    </ol>
                </div>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "green"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <hr className="title"></hr>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <hr className="title"></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr className="title"></hr>
            <GiveAttempts></GiveAttempts>
            <hr className="title"></hr>
            <EditMode></EditMode>
            <hr className="title"></hr>
            <ChangeColor></ChangeColor>
            <hr className="title"></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr className="title"></hr>
            <DoubleHalf></DoubleHalf>
            <hr className="title"></hr>
            <ChooseTeam></ChooseTeam>
            <hr className="title"></hr>
            <ColoredBox></ColoredBox>
            <hr className="title"></hr>
            <ShoveBox></ShoveBox>
            <hr className="title"></hr>
            <Counter></Counter>
            <hr className="title"></hr>
            <RevealAnswer></RevealAnswer>
            <hr className="title"></hr>
            <StartAttempt></StartAttempt>
            <hr className="title"></hr>
            <TwoDice></TwoDice>
            <hr className="title"></hr>
            <ChangeType></ChangeType>
            <hr className="title"></hr>
            <CycleHoliday></CycleHoliday>
            <hr className="title"></hr>
        </div>
    );
}

export default App;
