import React from "react";
interface Props {
    x: number;
    y: number;
    visible?: boolean;
    title: string;
    value: string;
}
declare const Tooltip: React.FC<Props>;
export default Tooltip;
