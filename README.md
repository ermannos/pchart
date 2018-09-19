## PChart

> A really simple chart component made for React to display percentile charts, more specifically child growth charts.

[![NPM](https://img.shields.io/npm/v/pchart.svg)](https://www.npmjs.com/package/pchart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pchart
```

## Usage

```jsx
import React, { Component } from 'react';
import {PChart, Dataset} from 'pchart';
import who_height_boys_013W from './who/height_boys_0-13W.json';

const percentiles = [5,25,50,75,95];
const patient = {
  firstname: 'John',
  lastname: 'Smith',
  sex: 'M',
  birthdate: '2018-01-14',
  measures: [
    {
      date: '2018-01-23',
      height: 51
    }
  ]
}

class Example extends Component {
  render () {
    let dataset = new Dataset(who_height_boys_013W, percentiles);
    return (
      <PChart width={1200} height={800} dataset={dataset} patients={patient} showtitle showlabels/>
    )
  }
}
```

## Example
To run the included example open the terminal in the project folder and run:
```bash
npm install
cd example
npm install
npm start
```

## License

MIT © [](https://github.com/)
