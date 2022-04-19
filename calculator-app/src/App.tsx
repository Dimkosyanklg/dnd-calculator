import React from "react";
import { NumbersBlock } from "./Components/NumbersBlock";
import { OperatorsBlock } from "./Components/OperatorsBlock";

export function App() {
    return (
        <div className="wrapper">
            <div className="content">
                <OperatorsBlock />
                <NumbersBlock />
            </div>
        </div>
    );
}
