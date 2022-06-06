import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import cn from "classnames";
import { BlockType, ButtonProps } from "../../types";
import { isNil } from "lodash";

type Props = {
    isDropped: boolean;
    isCurrentDrag?: boolean;
    setValue?: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
    draggable?: boolean;
};

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
    Dot,
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
    { label: ".", size: "normal", value: Numbers.Dot },
];

export const NumbersBlock: React.FC<Props> = ({
    isDropped,
    isCurrentDrag,
    setValue,
    disabled,
    draggable,
}) => {
    const [shouldShow, setShouldShow] = useState<boolean>(isDropped);

    useEffect(() => {
        setShouldShow(isDropped);
    }, [isDropped]);

    return (
        <div
            className={cn("container__number", {
                "container": shouldShow,
                "drag__zone": isCurrentDrag,
                "disabled": disabled,
            })}
            draggable={draggable && !disabled}
            onDragStart={(e) => {
                e.dataTransfer.setData(BlockType.Numbers, BlockType.Numbers);
            }}
        >
            {shouldShow &&
                NUMBER_LABELS.map(({ label, size, value }) => (
                    <button
                        className={cn("btn", {
                            btn__number: size === "normal",
                            "btn__number--large": size === "large",
                        })}
                        key={value}
                        onClick={() => {
                            if (!isNil(setValue)) {
                                setValue((prevState) => {
                                    if (!prevState.length && value === Numbers.Dot) {
                                        return prevState;
                                    }

                                    return prevState + label;
                                });
                            }
                        }}
                    >
                        {label}
                    </button>
                ))}
        </div>
    );
};
