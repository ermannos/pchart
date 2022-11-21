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
/* eslint-disable no-underscore-dangle */

import Dataset from "../data/Dataset";
import AxisTransformation from "./AxisTranformation";

/* eslint-disable max-classes-per-file */
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
  left: number = 0;
  right: number = 0;
  top: number = 0;
  bottom: number = 0;
  width: number = 0;
  height: number = 0;
  keys: number[] = [];
  countX: number = 0;
  stepX: number = 0;
  minX: number = 0;
  maxX: number = 0;
  minY: number = 0;
  maxY: number = 0;
  transformationX?: AxisTransformation;
  transformationY?: AxisTransformation;

  constructor(params: Params, onUpdate: () => void) {
    this.dataset = params.dataset;
    this.margins = params.margins;
    this.step = params.step;
    this.onUpdate = onUpdate;
    this.size = { width: 800, height: 800 };
    this._init();
  }

  setSize(size: Size) {
    this.size = size;
    this._init();
  }

  setDataset(dataset: Dataset) {
    this.dataset = dataset;
    this._init();
  }

  _init() {
    this.top = this.margins.top;
    this.bottom = this.size.height - this.margins.bottom;
    this.left = this.margins.left;
    this.right = this.size.width - this.margins.right;
    this.width = this.size.width - this.margins.left - this.margins.right;
    this.height = this.size.height - this.margins.top - this.margins.bottom;

    const { data } = this.dataset;
    this.keys = Object.keys(data).map(key => Number(key));

    this.countX = this.keys.length;
    this.stepX = this.width / (this.countX - 1);
    [this.minX] = this.keys;
    this.maxX = this.keys[this.keys.length - 1];

    const firstentry = data[this.keys[0]];
    const lastentry = data[this.keys[this.keys.length - 1]];
    const percentiles = Object.keys(firstentry).map(key => Number(key));
    const _min = firstentry[percentiles[0]];
    const _max = lastentry[percentiles[percentiles.length - 1]];
    const tolerance = 0.05;
    this.minY = Math.floor(((1 - tolerance) * _min) / this.step) * this.step;
    this.maxY = Math.ceil(((1 + tolerance) * _max) / this.step) * this.step;

    this.transformationX = new AxisTransformation(this.width, this.minX, this.maxX);
    this.transformationY = new AxisTransformation(
      this.height,
      this.minY,
      this.maxY
    );
    if (this.onUpdate) {
      this.onUpdate();
    }
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
    };
  }

  transformX(value: number) {
    return this.transformationX ? this.transformationX.transform(value) : 0;
  }

  transformY(value: number) {
    return this.transformationY ? this.transformationY.transform(value) : 0;
  }
}
