import React from "react";
import { Patient } from "../types";
interface Props {
    patient: Patient;
    showlabels?: boolean;
    showlines?: boolean;
}
declare const PatientData: React.FC<Props>;
export default PatientData;
