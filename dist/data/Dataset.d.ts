import { LMSDataset } from "../types";
declare const shortNames_en: {
    year: string;
    month: string;
    week: string;
    day: string;
};
export default class Dataset {
    title: string;
    titleX: string;
    unitX: 'year' | 'month' | 'week';
    titleY: string;
    unitY: string;
    dataType: 'height' | 'weight' | 'bmi' | 'circumference';
    lmsdata: number[][];
    percentiles: number[];
    shortNames: typeof shortNames_en;
    data: {
        [d: number]: any;
    };
    constructor(lmsDataset: LMSDataset, percentiles: number[]);
    setLocale(locale: string): void;
    getUnitX(): "year" | "month" | "week";
    getUnitY(): string;
    getTitleY(): string;
    getTitleX(): string;
    getDataType(): "height" | "weight" | "bmi" | "circumference";
    _buildData(): void;
    getPercentilePoints(n: number): number[][];
    getPercentileForValue(x: number, y: number): number;
    _getPercentileForValue(x: number, y: number): number;
    getShortNames(): {
        year: string;
        month: string;
        week: string;
        day: string;
    };
}
export {};
