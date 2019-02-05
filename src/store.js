/*
    Copyright (C) 2018  Ermanno Scanagatta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
export default class Store {
    constructor(params) {
        this.dataset = params.dataset;
        this.margins = params.margins;
        this.step = params.step;
    }

    setSize(size) {
        this.size = size;

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

    }

    getDataset() {
        return this.dataset;
    }

    getSize() {
        return this.size;
    }

    getMargins() {
        return this.margins;
    }

    getStep() {
        return this.step;
    }

    getMeasures() {
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
    }

    transformX(value) {
        return this._transformX.transform(value);
    }

    transformY(value) {
        return this._transformY.transform(value);
    }
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
