// Index used for the calculation of the expected value X for a percentile P (the key)
// with the formula:
//   X = M[(1 + LSZ)^(1/L)]
// Calculator here: https://measuringu.com/zcalcp/
const zIndex = {
    1: -2.3263,
    2: -2.0537,
    3: -1.8808,
    5: -1.6449,
    10: -1.2816,
    15: -1.0364,
    20: -0.8416,
    25: -0.6745,
    30: -0.5244,
    35: -0.3853,
    40: -0.2533,
    45: -0.1257,
    50: 0,
    55: 0.1257,
    60: 0.2533,
    65: 0.3853,
    70: 0.5244,
    75: 0.6745,
    80: 0.8416,
    85: 1.0364, 
    90: 1.2816,
    95: 1.6449,
    97: 1.8808,
    98: 2.0537,
    99: 2.3263
}

export class Dataset {
    constructor (lmsData, percentiles) {
        this.lmsData = lmsData;
        this.percentiles = percentiles;
        this._buildData();
    }

    getPercentiles() {
        return this.percentiles;
    }

    getData() {
        return this.data;
    }

    getUnitX() {
        return this.lmsData.unitX;
    }

    getUnitY() {
        return this.lmsData.unitY;
    }

    getTitle() {
        return this.lmsData.title;
    }

    _buildData() {
        let _data = {};
        this.lmsData.data.forEach(v => {
            let d = v[0];
            let L = v[1];
            let M = v[2];
            let S = v[3];
            
            if (!_data[d]) _data[d]={};
            
            this.percentiles.forEach(p => {
                let z = zIndex[p];
                if (z===undefined) return;
                let X = M * (Math.pow(1+L*S*z, 1/L));
                _data[d][p] = X;
            })
    
        })
        this.data = _data;
    } 
    
    getPercentilePoints(n) {
        let p = this.percentiles[n];
        let _data = [];
        let z = zIndex[p];
        if (z===undefined) return [];
    
        this.lmsData.data.forEach(v => {
            let d = v[0];
            let L = v[1];
            let M = v[2];
            let S = v[3];
            
            let X = M * (Math.pow(1+L*S*z, 1/L));
            _data.push([d,X]);
        })
        return _data;
    }     
}

