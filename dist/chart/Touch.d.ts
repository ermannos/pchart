import React from "react";
import { Patient } from "../types";
interface Props {
    patient: Patient;
    showTooltip: (x: number, y: number, title: string, value: string) => void;
}
declare const TouchAreas: React.FC<Props>;
export default TouchAreas;
