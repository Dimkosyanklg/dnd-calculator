import { isEmpty, isNil } from "lodash";
import React, { useState } from "react";
import { useArray } from "../../hooks/useArray";
import { BlockType } from "../../types";
import { EvaluateBlock } from "../Constructor/EvaluateBlock";
import { NumbersBlock } from "../Constructor/NumbersBlock";
import { OperatorsBlock } from "../Constructor/OperatorsBlock";
import { ValueBlock } from "../Constructor/ValueBlock";

type Props = {
    droppedBlocks: BlockType[];
    addDroppedBlock: (value: BlockType) => void;
};

export const Dropzone: React.FC<Props> = ({
    droppedBlocks,
    addDroppedBlock,
}) => {
    const [currentDrag, setCurrentDrag] = useState<BlockType>();

    const [value, setValue] = useState<string>("");

    return (
        <div
            className="dropzone"
            onDragOver={(e) => {
                e.preventDefault();
                if (isNil(currentDrag)) {
                    e.currentTarget.style.background = "#F0F9FF";
                    const data = e.dataTransfer.types[0];
                    setCurrentDrag(data as BlockType);
                }
            }}
            onDragLeave={(e) => {
                e.preventDefault();
                e.currentTarget.style.background = "#FFFFFF";
                setCurrentDrag(undefined);
            }}
            onDrop={(e) => {
                e.preventDefault();
                const type = e.dataTransfer.types[0];
                const data = e.dataTransfer.getData(type);
                addDroppedBlock(data as BlockType);
                e.currentTarget.style.background = "#FFFFFF";
                setCurrentDrag(undefined);
            }}
        >
            {isEmpty(droppedBlocks) && (
                <div className="dropzone__info">
                    <img
                        src="Content/images/add.svg"
                        alt=""
                        width={30}
                        height={30}
                    />
                    <div className="dropzone__info--head">Перетащите сюда</div>
                    <div className="dropzone__info--sub">
                        любой элемент из левой панели
                    </div>
                </div>
            )}
            <ValueBlock
                value={value}
                isDropped={droppedBlocks.includes(BlockType.Value)}
                isCurrentDrag={currentDrag === BlockType.Value}
                setValue={setValue}
            />
            <OperatorsBlock
                isDropped={droppedBlocks.includes(BlockType.Operators)}
                isCurrentDrag={currentDrag === BlockType.Operators}
                setValue={setValue}
            />
            <NumbersBlock
                isDropped={droppedBlocks.includes(BlockType.Numbers)}
                isCurrentDrag={currentDrag === BlockType.Numbers}
                setValue={setValue}
            />
            <EvaluateBlock
                isDropped={droppedBlocks.includes(BlockType.Evaluate)}
                isCurrentDrag={currentDrag === BlockType.Evaluate}
                setValue={setValue}
            />
        </div>
    );
};
