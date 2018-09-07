import React, { Component } from 'react';
import PChart from './lib/chart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">PChart</h1>
        </div>

        <div className='container'>
          <div className='row'>
            <PChart width={1200} height={800}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
