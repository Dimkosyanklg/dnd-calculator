import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BlockType, ButtonProps } from "../../types";
import cn from "classnames";
import { isNil } from "lodash";

type Props = {
    isDropped: boolean;
    isCurrentDrag?: boolean;
    setValue?: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
    draggable?: boolean;
};

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

export const OperatorsBlock: React.FC<Props> = ({
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
            className={cn("container__operator", {
                "container": shouldShow,
                "drag__zone": isCurrentDrag,
                "disabled": disabled
            })}
            draggable={draggable && !disabled}
            onDragStart={(e) => {
                e.dataTransfer.setData(
                    BlockType.Operators,
                    BlockType.Operators
                );
            }}
        >
            {shouldShow &&
                OPERATOR_LABELS.map(({ label, value }) => (
                    <button
                        key={value}
                        className="btn btn__operator"
                        onClick={() => {
                            if (!isNil(setValue)) {
                                setValue((prevState) => {
                                    const lastChar = prevState.slice(-1);
                                    if (
                                        OPERATOR_LABELS.map(
                                            ({ label }) => label
                                        ).includes(lastChar)
                                    ) {
                                        const index =
                                            prevState.lastIndexOf(lastChar);
                                        return (
                                            prevState.substring(0, index) +
                                            label +
                                            prevState.substring(index + 1)
                                        );
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
