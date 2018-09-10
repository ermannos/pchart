
export class AxisTransformation {
    constructor (len, minValue, maxValue) {
        this.len = len;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    transform(value) {
        if (value<this.minValue || value>this.maxValue) return;
        return this.len * (value-this.minValue) / (this.maxValue - this.minValue);
    }
}