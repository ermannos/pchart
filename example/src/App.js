import React, { Component } from 'react';
import {Dataset,PChart} from 'pchart';
import who_height_boys_519 from './who/height_boys_5-19Y.json';
import who_height_girls_013W from './who/height_girls_0-13W.json';
import './App.css';

let percentiles = [3,10,25,50,75,90,97];
const testpatient1 = {
  firstname: 'John',
  lastname: 'Doe',
  sex: 'male',
  birthdate: '2002-04-27',
  measures: [
    {
      date: '2018-09-11',
      height: 181.5,
      weight: 60
    },
    {
      date: '2018-08-18',
      height: 181
    },
    {
      date: '2018-05-18',
      height: 180
    },
    {
      date: '2017-08-02',
      height: 176
    },
    {
      date: '2017-01-28',
      height: 173
    },
    {
      date: '2016-10-08',
      height: 170
    },
    {
      date: '2016-03-16',
      height: 165
    },
    {
      date: '2015-09-26',
      height: 160
    },
]
}
const testpatient2 = {
  firstname: 'Jane',
  lastname: 'Doe',
  sex: 'female',
  birthdate: '2018-01-14',
  measures: [
    {
      date: '2018-01-23',
      height: 52
    },
    {
      date: '2018-01-31',
      height: 54
    },
    {
      date: '2018-02-17',
      height: 57
    },
    {
      date: '2018-02-26',
      height: 58.9
    },
    {
      date: '2018-03-04',
      height: 60
    },
  ]
}
const testpatient3 = {
  firstname: 'Janelle',
  lastname: 'Doe',
  sex: 'female',
  birthdate: '2018-01-14',
  color: randomColor(),
  measures: [
    {
      date: '2018-01-23',
      height: 51
    },
    {
      date: '2018-01-31',
      height: 52
    },
    {
      date: '2018-02-17',
      height: 53
    },
    {
      date: '2018-02-26',
      height: 54
    },
    {
      date: '2018-03-04',
      height: 56
    },
  ]
}

function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class App extends Component {
  render() {
    let dataset1 = new Dataset(who_height_boys_519, percentiles);
    let dataset2 = new Dataset(who_height_girls_013W, percentiles);
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">PChart example</h1>
        </div>

        <div className='container'>
          <div className='row'>
            <PChart width={1200} height={800} dataset={dataset1} patients={testpatient1} showtitle />
          </div>
          <div className='row'>
            < PChart width={1200} height={800} dataset={dataset2} patients={[testpatient2,testpatient3]} showtitle showlabels/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
