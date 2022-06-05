import React from "react";
import { EvaluateBlock } from "./Components/EvaluateBlock";
import { NumbersBlock } from "./Components/NumbersBlock";
import { OperatorsBlock } from "./Components/OperatorsBlock";
import { ValueBlock } from "./Components/ValueBlock";

export function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="constructor">
                    <ValueBlock value="" />
                    <OperatorsBlock />
                    <NumbersBlock />
                    <EvaluateBlock />
                </div>
            </div>
        </div>
    );
}
