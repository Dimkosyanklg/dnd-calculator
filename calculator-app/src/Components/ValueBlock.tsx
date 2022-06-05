import React from "react";

type Props = {
    value: string;
};

export const ValueBlock: React.FC<Props> = ({ value }) => {
    return (
        <div className="container container__value">
            <div className="value">1{value}</div>
        </div>
    );
};
