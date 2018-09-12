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

    render() {
        let size = {width:this.props.width,height:this.props.height};
        let margins = {left:60,right:10,top:this.props.showTitle ? 50 : 10,bottom:40};
        let title;
        if (this.props.showTitle) 
            title = <text name='title' className='title' x={size.width/2} y={15} textAnchor='middle' alignmentBaseline='text-before-edge'>{this.props.dataset.description}</text>
        return (
            <svg width={size.width} height={size.height}>
                {title}
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