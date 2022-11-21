export default class AxisTransformation {
    len: number;
    minValue: number;
    maxValue: number;
    constructor(len: number, minValue: number, maxValue: number);
    transform(value: number): number;
}
