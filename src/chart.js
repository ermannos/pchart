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

class PChart extends Component {
    constructor(props) {
        super(props);
        let w = props.width;
        let h = props.height;
        if (isNaN(w)) { w = 800; console.error("Error: width property must be a number. Using the default value") }
        if (isNaN(h)) { h = 800; console.error("Error: height property must be a number. Using the default value") }

        Store.initialize({
            dataset: props.dataset,
            size:{width:w,height:h},
            margins: {left:60,right:10,top:this.props.showtitle ? 50 : 10,bottom:40},
            step:5
        });
    }

    render() {
        let title;
        if (this.props.showtitle) 
            title = <text name='title' className='title' x={Store.getSize().width/2} y={15} textAnchor='middle' alignmentBaseline='text-before-edge'>{this.props.dataset.description}</text>
        
        let patientdata = [];
        let patients;
        if (Array.isArray(this.props.patients))
            patients = this.props.patients;
        else
            patients = [this.props.patients];

        patients.forEach((patient,i) => {
            patientdata.push(
                <PatientData key={'patientdata-'+i} patient={patient} showlabels={this.props.showlabels}/>
            );
        });

        return (
            <svg width={Store.getSize().width} height={Store.getSize().height}>
                {title}
                <Backdrop/>
                <XAxis/>
                <YAxis/>
                <Grid/>
                <Areas/>
                <Percentiles/>
                {patientdata}
            </svg>
        );
    }
}

export default PChart;