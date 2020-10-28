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

// Index used for the calculation of the expected value X for a percentile P (the key)
// with the formula:
//   X = M[(1 + LSZ)^(1/L)]
// Calculator here: https://measuringu.com/zcalcp/

/* eslint-disable camelcase */

const zIndex = {
  1: -2.3263,
  2: -2.0537,
  3: -1.8808,
  4: -1.7507,
  5: -1.6449,
  6: -1.5548,
  7: -1.4758,
  8: -1.4051,
  9: -1.3408,
  10: -1.2816,
  11: -1.2265,
  12: -1.175,
  13: -1.1264,
  14: -1.0803,
  15: -1.0364,
  16: -0.9945,
  17: -0.9542,
  18: -0.9154,
  19: -0.8779,
  20: -0.8416,
  21: -0.8064,
  22: -0.7722,
  23: -0.7388,
  24: -0.7063,
  25: -0.6745,
  26: -0.6433,
  27: -0.6128,
  28: -0.5828,
  29: -0.5534,
  30: -0.5244,
  31: -0.4959,
  32: -0.4677,
  33: -0.4399,
  34: -0.4125,
  35: -0.3853,
  36: -0.3585,
  37: -0.3319,
  38: -0.3055,
  39: -0.2793,
  40: -0.2533,
  41: -0.2275,
  42: -0.2019,
  43: -0.1764,
  44: -0.151,
  45: -0.1257,
  46: -0.1004,
  47: -0.0753,
  48: -0.0502,
  49: -0.0251,
  50: 0,
  51: 0.0251,
  52: 0.0502,
  53: 0.0753,
  54: 0.1004,
  55: 0.1257,
  56: 0.151,
  57: 0.1764,
  58: 0.2019,
  59: 0.2275,
  60: 0.2533,
  61: 0.2793,
  62: 0.3055,
  63: 0.3319,
  64: 0.3585,
  65: 0.3853,
  66: 0.4125,
  67: 0.4399,
  68: 0.4677,
  69: 0.4959,
  70: 0.5244,
  71: 0.5534,
  72: 0.5828,
  73: 0.6128,
  74: 0.6433,
  75: 0.6745,
  76: 0.7063,
  77: 0.7388,
  78: 0.7722,
  79: 0.8064,
  80: 0.8416,
  81: 0.8779,
  82: 0.9154,
  83: 0.9542,
  84: 0.9945,
  85: 1.0364,
  86: 1.0803,
  87: 1.1264,
  88: 1.175,
  89: 1.2265,
  90: 1.2816,
  91: 1.3408,
  92: 1.4051,
  93: 1.4758,
  94: 1.5548,
  95: 1.6449,
  96: 1.7507,
  97: 1.8808,
  98: 2.0537,
  99: 2.3263,
};

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
const shortNames = {
  en: shortNames_en,
  it: shortNames_it,
};

export default class Dataset {
  constructor(lmsDataset, percentiles) {
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

  setLocale(locale) {
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
    const _data = {};
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

  getPercentilePoints(n) {
    const p = this.percentiles[n];
    const _data = [];
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

  getPercentileForValue(x, y) {
    let data;
    this.lmsdata.forEach((v) => {
      const d = v[0];
      if (d <= x) {
        data = v;
      }
    });
    if (!data) {
      return null;
    }
    const L = data[1];
    const M = data[2];
    const S = data[3];

    const Z = ((y / M) ** L - 1) / (L * S);
    let bestP = 0;
    Object.keys(zIndex).forEach((p) => {
      const z = zIndex[p];
      if (z < Z) {
        bestP = p;
      }
    });
    return bestP;
  }

  getShortNames() {
    return this.shortNames;
  }
}
