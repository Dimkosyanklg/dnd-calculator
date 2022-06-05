import React from "react";
import { ButtonProps } from "../types";

type Props = {};

enum Operators {
    Division,
    Multiplication,
    Addition,
    Substraction,
}

const OPERATOR_LABELS: ButtonProps<Operators>[] = [
    { label: "/", value: Operators.Division },
    { label: "*", value: Operators.Multiplication },
    { label: "+", value: Operators.Addition },
    { label: "-", value: Operators.Substraction },
];

export const OperatorsBlock: React.FC<Props> = ({}) => {
    return (
        <div className="container container__operator">
            {OPERATOR_LABELS.map(({ label, value }) => (
                <button className="btn btn__operator">{label}</button>
            ))}
        </div>
    );
};
