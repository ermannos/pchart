import React from 'react';
import Dataset from './data/Dataset';
import { Patient, Theme } from './types';
interface Props {
    width?: number;
    height?: number;
    dataset: Dataset;
    patients: Patient | Patient[];
    theme?: Theme;
    showtitle?: boolean;
    showlabels?: boolean;
    showlines?: boolean;
}
declare const PChart: React.FC<Props>;
export default PChart;
