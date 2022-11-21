import Dataset from "../data/Dataset";
import AxisTransformation from "./AxisTranformation";
interface Margins {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
interface Size {
    width: number;
    height: number;
}
interface Params {
    dataset: Dataset;
    margins: Margins;
    step: number;
}
export default class Store {
    dataset: Dataset;
    margins: Margins;
    step: number;
    onUpdate: () => void;
    size: Size;
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    keys: number[];
    countX: number;
    stepX: number;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    transformationX?: AxisTransformation;
    transformationY?: AxisTransformation;
    constructor(params: Params, onUpdate: () => void);
    setSize(size: Size): void;
    setDataset(dataset: Dataset): void;
    _init(): void;
    getDataset(): Dataset;
    getSize(): Size;
    getMargins(): Margins;
    getStep(): number;
    getMeasures(): {
        top: number;
        bottom: number;
        left: number;
        right: number;
        width: number;
        height: number;
        keys: number[];
        countX: number;
        stepX: number;
        minX: number;
        maxX: number;
        minY: number;
        maxY: number;
    };
    transformX(value: number): number;
    transformY(value: number): number;
}
export {};
