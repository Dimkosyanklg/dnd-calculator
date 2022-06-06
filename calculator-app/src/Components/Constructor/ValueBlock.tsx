import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import cn from "classnames";
import { BlockType } from "../../types";

type Props = {
    value: string;
    isDropped: boolean;
    isCurrentDrag?: boolean;
    setValue?: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
    draggable?: boolean;
};

export const ValueBlock: React.FC<Props> = ({
    value,
    isDropped,
    isCurrentDrag,
    disabled,
    draggable,
}) => {
    const [shouldShow, setShouldShow] = useState<boolean>(isDropped);

    useEffect(() => {
        setShouldShow(isDropped);
    }, [isDropped]);

    return (
        <div
            className={cn("container__value", {
                "container": shouldShow,
                "drag__zone": isCurrentDrag,
                "disabled": disabled
            })}
            draggable={draggable && !disabled}
            onDragStart={(e) => {
                e.dataTransfer.setData(BlockType.Value, BlockType.Value);
            }}
        >
            {shouldShow && (
                <div className={cn("value", { "text__wrap": value.length > 12 })}>
                    {value}
                </div>
            )}
        </div>
    );
};
