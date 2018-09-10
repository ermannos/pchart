import React, { Component } from 'react';
import PChart from './lib/chart';
import {Dataset} from './lib/data';
import {height_boy_018} from './lib/data/height_boy_018';
import {patient} from './lib/patient';
import './App.css';
let percentiles = [3,10,25,50,75,90,97];

class App extends Component {
  render() {
    let dataset = new Dataset(height_boy_018, percentiles);
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">PChart</h1>
        </div>

        <div className='container'>
          <div className='row'>
            <PChart width={1200} height={800} dataset={dataset} patient={patient}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
