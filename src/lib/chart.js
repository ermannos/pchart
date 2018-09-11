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
            data: this.props.dataset.getData()
        }
    }

    render() {
        let size = {width:this.props.width,height:this.props.height};
        let margins = {left:60,right:10,top:10,bottom:40};
        return (
            <svg width={this.props.width} height={this.props.height}>
                <Backdrop size={size} margins={margins}/>
                <XAxis size={size} margins={margins} dataset={this.props.dataset}/>
                <YAxis size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <Grid size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <Areas size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <Percentiles size={size} margins={margins} dataset={this.props.dataset} step={5}/>
                <PatientData size={size} margins={margins} dataset={this.props.dataset} step={5} patient={this.props.patient}/>
            </svg>
        );
    }
}

export default PChart;