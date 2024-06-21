/*
Copyright (C) 2018-2024  Ermanno Scanagatta

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

import { LMSDataset } from "../types";
import { zIndex } from "./zIndex";

// Index used for the calculation of the expected value X for a percentile P (the key)
// with the formula:
//   X = M[(1 + LSZ)^(1/L)]
// Calculator here: https://measuringu.com/zcalcp/

/* eslint-disable camelcase */

const shortNames_en = {
  year: "y",
  month: "m",
  week: "w",
  day: "d",
};
const shortNames_it = {
  year: "a",
  month: "m",
  week: "s",
  day: "gg",
};
const shortNames: { [locale: string]: typeof shortNames_en } = {
  en: shortNames_en,
  it: shortNames_it,
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
  data: { [d: number]: any } = {};

  constructor(lmsDataset: LMSDataset, percentiles: number[]) {
    this.title = lmsDataset.title;
    this.titleX = lmsDataset.titleX;
    this.unitX = lmsDataset.unitX;
    this.titleY = lmsDataset.titleY;
    this.unitY = lmsDataset.unitY;
    this.dataType = lmsDataset.dataType;
    this.lmsdata = lmsDataset.data;
    this.percentiles = percentiles;
    this.shortNames = shortNames.en;
    this._buildData();
  }

  setLocale(locale: string) {
    if (shortNames[locale]) {
      this.shortNames = shortNames[locale];
    }
  }

  getUnitX() {
    return this.unitX;
  }

  getUnitY() {
    return this.unitY;
  }

  getTitleY() {
    return this.titleY;
  }

  getTitleX() {
    return this.titleX;
  }

  getDataType() {
    return this.dataType;
  }

  _buildData() {
    const _data: { [d: number]: any } = {};
    this.lmsdata.forEach((v) => {
      const d = v[0];
      const L = v[1];
      const M = v[2];
      const S = v[3];

      if (!_data[d]) {
        _data[d] = {};
      }

      this.percentiles.forEach((p) => {
        const z = zIndex[p];
        if (z === undefined) {
          return;
        }
        const X = M * (1 + L * S * z) ** (1 / L);
        _data[d][p] = X;
      });
    });
    this.data = _data;
  }

  getPercentilePoints(n: number) {
    const p = this.percentiles[n];
    const _data: number[][] = [];
    const z = zIndex[p];
    if (z === undefined) {
      return [];
    }

    this.lmsdata.forEach((v) => {
      const d = v[0];
      const L = v[1];
      const M = v[2];
      const S = v[3];

      const X = M * (1 + L * S * z) ** (1 / L);
      _data.push([d, X]);
    });
    return _data;
  }

  getPercentileForValue(x: number, y: number) {
    const p0 = Math.trunc(x);
    const p1 = p0 + 1;
    const percentile0 = this._getPercentileForValue(p0, y);
    const percentile1 = this._getPercentileForValue(p1, y);
    const percentile = Math.round(
      percentile0 + (x - p0) * (percentile1 - percentile0)
    );
    return percentile;
  }

  _getPercentileForValue(x: number, y: number) {
    let data;
    this.lmsdata.forEach((v) => {
      const d = v[0];
      if (d <= x) {
        data = v;
      }
    });
    if (!data) {
      return 0;
    }
    const L = data[1];
    const M = data[2];
    const S = data[3];

    const Z = ((y / M) ** L - 1) / (L * S);
    let bestP = 0;
    Object.keys(zIndex).forEach((p) => {
      const z = zIndex[Number(p)];
      if (z < Z) {
        bestP = Number(p);
      }
    });
    return bestP;
  }

  getShortNames() {
    return this.shortNames;
  }
}
