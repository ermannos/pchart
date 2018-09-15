let Store = {
    initialize: function(params) {
        this.dataset = params.dataset;
        this.size = params.size;
        this.margins = params.margins;
        this.step = params.step;

        this.top = this.margins.top;
        this.bottom = this.size.height - this.margins.bottom;
        this.left = this.margins.left;
        this.right = this.size.width - this.margins.right;
        this.width = this.size.width - this.margins.left - this.margins.right;
        this.height = this.size.height - this.margins.top - this.margins.bottom;

        let data = this.dataset.data;
        this.keys = Object.keys(data);

        this.countX = this.keys.length;
        this.stepX = this.width/(this.countX-1);
        this.minX = this.keys[0];
        this.maxX = this.keys[this.keys.length-1];

        let firstentry = data[this.keys[0]];
        let lastentry = data[this.keys[this.keys.length-1]];
        let percentiles = Object.keys(firstentry);
        let _min = firstentry[percentiles[0]];
        let _max = lastentry[percentiles[percentiles.length-1]];
        let tolerance = .05;
        this.minY = Math.floor(((1-tolerance) * _min)/this.step) * this.step;
        this.maxY = Math.ceil(((1+tolerance) * _max)/this.step) * this.step;

        this._transformX = new AxisTransformation(this.width, this.minX, this.maxX);
        this._transformY = new AxisTransformation(this.height, this.minY, this.maxY);

    },

    getDataset: function() {
        return this.dataset;
    },

    getSize: function() {
        return this.size;
    },

    getMargins: function() {
        return this.margins;
    },

    getStep: function() {
        return this.step;
    },

    getMeasures: function() {
        return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right,
            width: this.width,
            height: this.height,

            keys: this.keys,

            countX: this.countX,
            stepX: this.stepX,
            minX: this.minX,
            maxX: this.maxX,
            minY: this.minY,
            maxY: this.maxY,
        }
    },

    transformX: function(value) {
        return this._transformX.transform(value);
    },

    transformY: function(value) {
        return this._transformY.transform(value);
    },

}

class AxisTransformation {
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

export default Store;