import React from "react";
import cn from "classnames";
import { ButtonProps } from "../types";

type Props = {};

enum Numbers {
    Nine,
    Eight,
    Seven,
    Six,
    Five,
    Four,
    Three,
    Two,
    One,
    Nil,
    Comma,
}

const NUMBER_LABELS: ButtonProps<Numbers>[] = [
    { label: "9", size: "normal", value: Numbers.Nine },
    { label: "8", size: "normal", value: Numbers.Eight },
    { label: "7", size: "normal", value: Numbers.Seven },
    { label: "6", size: "normal", value: Numbers.Six },
    { label: "5", size: "normal", value: Numbers.Five },
    { label: "4", size: "normal", value: Numbers.Four },
    { label: "3", size: "normal", value: Numbers.Three },
    { label: "2", size: "normal", value: Numbers.Two },
    { label: "1", size: "normal", value: Numbers.One },
    { label: "0", size: "large", value: Numbers.Nil },
    { label: ",", size: "normal", value: Numbers.Comma },
];

export const NumbersBlock: React.FC<Props> = ({}) => {
    return (
        <div className="container container__button">
            {NUMBER_LABELS.map(({ label, size, value }) => (
                <div
                    className={cn("btn", {
                        btn__number: size === "normal",
                        "btn__number--large": size === "large",
                    })}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};
