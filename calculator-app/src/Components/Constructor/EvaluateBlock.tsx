import cn from "classnames";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BlockType } from "../../types";
import { isEmpty, isNil } from "lodash";

type Props = {
    isDropped: boolean;
    isCurrentDrag?: boolean;
    setValue?: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
    draggable?: boolean;
};

export const EvaluateBlock: React.FC<Props> = ({
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
            className={cn("container__evaluate", {
                "container": shouldShow,
                "drag__zone": isCurrentDrag,
                "disabled": disabled,
            })}
            draggable={draggable && !disabled}
            onDragStart={(e) => {
                e.dataTransfer.setData(BlockType.Evaluate, BlockType.Evaluate);
            }}
        >
            {shouldShow && (
                <button
                    className="evaluate"
                    onClick={() => {
                        if (!isNil(setValue)) {
                            setValue((prevState) => {
                                if (isEmpty(prevState)) {
                                    return prevState;
                                }

                                try {
                                    const result = eval(prevState).toString();

                                    if (result.length > 12) {
                                        return (+eval(prevState).toFixed(
                                            10
                                        )).toString();
                                    }

                                    return result;
                                } catch (err) {
                                    console.log(err);
                                    return prevState;
                                }
                            });
                        }
                    }}
                >
                    =
                </button>
            )}
        </div>
    );
};
