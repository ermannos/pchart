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
        Store.initialize({
            dataset: props.dataset,
            size:{width:props.width,height:props.height},
            margins: {left:60,right:10,top:this.props.showtitle ? 50 : 10,bottom:40},
            step:5
        });
    }

    randomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        let title;
        if (this.props.showtitle) 
            title = <text name='title' className='title' x={Store.getSize().width/2} y={15} textAnchor='middle' alignmentBaseline='text-before-edge'>{this.props.dataset.description}</text>
        
            let patientdata = [];
        if (this.props.patients) {
            this.props.patients.forEach((patient,i) => {
                patientdata.push(
                    <PatientData key={'patientdata-'+i} patient={patient} color={i===0 ? 'red' : this.randomColor()} showlabels={this.props.showlabels}/>
                );
            });
        } else if (this.props.patient) {
            patientdata.push(
                <PatientData key={'patientdata-0'} patient={this.props.patient} showlabels={this.props.showlabels}/>
            );
    }
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