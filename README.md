# PChart

[![NPM](https://img.shields.io/npm/v/pchart.svg)](https://www.npmjs.com/package/pchart) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A really simple charting component made for React to display percentile charts, more specifically child growth charts.

## Install

```bash
npm install --save pchart
```

## Usage
1. Import the components in your project:
```jsx
import {PChart, Dataset} from 'pchart';
```

2. Provide (or build yourself) a json object containing all the data needed to draw the percentile curves in the chart. To do this you will need statistical data in LMS format (see for example [here](http://www.who.int/childgrowth/standards/en/)).
This object will contain some fields descriptiong the type of data and an array of LMS values. See the example below:
```javascript
{
  title: [Data description, used as title for the chart],
  titleX: [Y axis title],
  unitX: [X axis unit, should be days|weeks|months|years],
  titleY: [Y axis title],
  unitY: [Y axis unit],
  sex: [Patient sex],
  dataType: [Type of patient measure],
  data: [
    [ x0, L0, M0, S0 ],
    [ x1, L1, M1, S1 ],
    ...
  ]
}
```

```javascript
let percentileValues = {
  title: "Height per age, boys, from 5 to 19 year",
  titleX: "Months",
  unitX: "month",
  titleY: "Height (cm)",
  unitY: "cm",
  sex: "male",
  dataType: "height",
  data: [
    [ 61, 1, 110.2647, 0.04164],
    [ 62, 1, 110.8006, 0.04172],
    [ 63, 1, 111.3338, 0.0418],
    ...
  ]
}
```

3. Build the dataset used to construct your chart. For this step you need the percentile data object and an array of the percentile values to draw on the chart (reference lines).
```jsx
const percentiles = [5,25,50,75,95];
let dataset = new Dataset(percentileValues, percentiles);
```

4. Provide an object containing all the patient data and measures
```javascript
const patient = {
  firstname: 'John',
  lastname: 'Smith',
  sex: 'male',
  birthdate: '2018-01-14',
  color: 'red',
  measures: [
    {
      date: '2018-01-23',
      height: 51
    }
  ]
}
```

5. Finally, build the PChart:
```jsx
<PChart width={1200} height={800} dataset={dataset} patients={patient}/>
```

## Theming
You can override the default theme passing an object containing some styling properties. 
This is the content of the default theme:

```javascript
const defaultTheme = {
  backgroundColor: 'transparent',
  backdropFill: '#FFFDE7',
  axisColor: '#707070',
  gridColor: '#FFD54F',
  areaColor: 'rgba(127,127,127, .3)'
}
```
The color of patient data points can be specified in the patient data structure (if not, the default is red).

## PChart properties
Property | Type | Default | Description
-|-|-|-
width|number|800|Width in pixels of the chart
height|number|800|Height in pixels of the chart
dataset|object|null|The dataset object containingall the data used to build the reference percentile curves
patients|object or array|null|A single patient object, or an array of patient objects to be displayed on the chart
showtitle|boolean|false|If true, the percentile data description field will be shown above the chart as a title
showlabels|boolean|false|If true, a label indicating the percentile value will be shown above every patient data point in the chart
showlines|boolean|false|If true, every percentile point is connected with the next by a line
theme|object|null|An object containing styling properties used to override the default theme


## Sample code

```jsx
import React from 'react';
import {PChart, Dataset} from 'pchart';
import who_height_boys_013W from './who/height_boys_0-13W.json';

const percentiles = [5,25,50,75,95];
const patient = {
  firstname: 'John',
  lastname: 'Smith',
  sex: 'male',
  birthdate: '2018-01-14',
  measures: [
    {
      date: '2018-01-23',
      height: 51
    }
  ]
}
const theme = {
  backdropFill: '#B2EBF2',
  gridColor: '#00ACC1',
  areaColor: 'rgba(0,172,193,.4)'
}
const dataset = new Dataset(who_height_boys_013W, percentiles);

const Example = () => {
  return (
    <PChart width={1200} height={800} dataset={dataset} patients={patient} theme={theme} showtitle showlabels/>
  )
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

GNU GPL-3.0
