import React from "react";
import { EvaluateBlock } from "./Components/Constructor/EvaluateBlock";
import { NumbersBlock } from "./Components/Constructor/NumbersBlock";
import { OperatorsBlock } from "./Components/Constructor/OperatorsBlock";
import { ValueBlock } from "./Components/Constructor/ValueBlock";
import { Dropzone } from "./Components/Dropzone";
import { useArray } from "./hooks/useArray";
import { BlockType } from "./types";

export function App() {
    const [droppedBlocks, , , , addDroppedBlock] = useArray<BlockType>([]);

    return (
        <div className="wrapper">
            <div className="content">
                <div className="constructor">
                    <ValueBlock
                        value=""
                        isDropped={true}
                        disabled={droppedBlocks.includes(BlockType.Value)}
                        draggable
                    />
                    <OperatorsBlock
                        isDropped={true}
                        disabled={droppedBlocks.includes(BlockType.Operators)}
                        draggable
                    />
                    <NumbersBlock
                        isDropped={true}
                        disabled={droppedBlocks.includes(BlockType.Numbers)}
                        draggable
                    />
                    <EvaluateBlock
                        isDropped={true}
                        disabled={droppedBlocks.includes(BlockType.Evaluate)}
                        draggable
                    />
                </div>
                <Dropzone
                    droppedBlocks={droppedBlocks}
                    addDroppedBlock={addDroppedBlock}
                />
            </div>
        </div>
    );
}
