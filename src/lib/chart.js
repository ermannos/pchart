import React, { Component } from 'react';
import './style/chart.css';
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
        this.state = {
            data: this.props.dataset.data
        }
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
        let size = {width:this.props.width,height:this.props.height};
        let margins = {left:60,right:10,top:this.props.showtitle ? 50 : 10,bottom:40};
        let title;
        if (this.props.showtitle) 
            title = <text name='title' className='title' x={size.width/2} y={15} textAnchor='middle' alignmentBaseline='text-before-edge'>{this.props.dataset.description}</text>
        
            let patientdata = [];
        if (this.props.patients) {
            this.props.patients.forEach((patient,i) => {
                patientdata.push(
                    <PatientData key={'patientdata-'+i} size={size} margins={margins} dataset={this.props.dataset} step={5} patient={patient} color={i==0 ? 'red' : this.randomColor()} showlabels={this.props.showlabels}/>
                );
            });
        } else if (this.props.patient) {
            patientdata.push(
                <PatientData key={'patientdata-0'} size={size} margins={margins} dataset={this.props.dataset} step={5} patient={this.props.patient} showlabels={this.props.showlabels}/>
            );
    }
        return (
            <svg width={size.width} height={size.height}>
                {title}
                <Backdrop size={size} margins={margins}/>
                <XAxis size={size} margins={margins} dataset={this.props.dataset}/>
                <YAxis size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <Grid size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <Areas size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <Percentiles size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                {patientdata}
            </svg>
        );
    }
}

export default PChart;