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
import React, { Component } from 'react';
import './style/chart.css';
import Store from './store';
import Backdrop from './backdrop';
import XAxis from './xaxis'; 
import YAxis from './yaxis'; 
import Grid from './grid';
import Areas from './areas';
import Percentiles from './percentiles';
import PatientData from './patient';
import StoreContext from './context';
import { ThemeProvider } from '@callstack/react-theme-provider';

class PChart extends Component {
    constructor(props) {
        super(props);
        this.store = new Store({
            dataset: props.dataset,
            margins: {left:60,right:10,top:this.props.showtitle ? 50 : 10,bottom:40},
            step:2
        });

        this.setSize(props.width, props.height);
        this.state = {size:this.store.getSize()};
    }

    componentWillReceiveProps(props) {
        this.setSize(props.width, props.height);
        if (props.dataset)
            this.store.setDataset(props.dataset);
        this.setState({size:this.store.getSize()});
    }

    setSize = (w,h) => {
        if (isNaN(w)) { w = 800; console.error("Error: width property must be a number. Using the default value") }
        if (isNaN(h)) { h = 800; console.error("Error: height property must be a number. Using the default value") }
        this.store.setSize({width:w, height:h});
    }

    render() {
        let title;
        if (this.props.showtitle) 
            title = <text name='title' className='title' x={this.store.getSize().width/2} y={15} textAnchor='middle' alignmentBaseline='text-before-edge'>{this.props.dataset.title}</text>
        
        let patientdata = [];
        let patients;
        if (Array.isArray(this.props.patients))
            patients = this.props.patients;
        else
            patients = [this.props.patients];

        patients.forEach((patient,i) => {
            patientdata.push(
                <PatientData key={'patientdata-'+i} patient={patient} showlabels={this.props.showlabels} showlines={this.props.showlines}/>
            );
        });

        const defaultTheme = {
            backgroundColor: 'transparent',
            backdropFill: '#FFFDE7',
            axisColor: '#707070',
            gridColor: '#FFD54F',
            areaColor: 'rgba(127,127,127, .3)'
        }

        let theme;
        if (this.props.theme) {
            theme = Object.assign({}, defaultTheme, this.props.theme);
        } else {
            theme = defaultTheme;
        }
        return (
            <ThemeProvider theme={theme}>
                <StoreContext.Provider value={this.store}>
                    <svg width={this.store.getSize().width} height={this.store.getSize().height} style={{backgroundColor:defaultTheme.backgroundColor}}>
                        {title}
                        <Backdrop/>
                        <XAxis/>
                        <YAxis/>
                        <Grid/>
                        <Areas/>
                        <Percentiles/>
                        {patientdata}
                    </svg>
                </StoreContext.Provider>
            </ThemeProvider>
        );
    }
}

export default PChart;