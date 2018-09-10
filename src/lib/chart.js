import React, { Component } from 'react';
import {AxisTransformation} from './utils';
import './style/chart.css';

let short_tick_len = 5;
let long_tick_len = 10;

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
                <PatientData patient={this.props.patient}/>
            </svg>
        );
    }
}

class Backdrop extends Component {
    render() {
        return (
            <rect name='backdrop' className='backdrop' 
                x={this.props.margins.left} 
                y={this.props.margins.top} 
                width={this.props.size.width-this.props.margins.left - this.props.margins.right} 
                height={this.props.size.height-this.props.margins.bottom - this.props.margins.top}/>
        )
    }
}

class XAxis extends Component {
    render() {
        let data = this.props.dataset.getData();
        let keys = Object.keys(data);
        let count = keys.length;
        let len = this.props.size.width - this.props.margins.left - this.props.margins.right;
        let stepX = len/(count-1);
        let step = this.props.dataset.getUnitX()==='month' ? 6 : 5;
        let labelstep = 2;
        let ticks = [];
        let valuelabels = [];
        for(let t = 0; t<count; t++) {
            let long = t%step===0;
            let x = this.props.margins.left + t * stepX;
            let y1 = this.props.size.height-this.props.margins.bottom;
            let y2 = y1 + (long ? long_tick_len : short_tick_len);
            ticks.push(
                <line className={long?'longtick':'tick'} key={'tick-'+t} x1={x} y1={y1} x2={x} y2={y2}/>
            );
            let showlabel = t%(step*labelstep)===0
            if (showlabel) {
                valuelabels.push(
                    <text key={'valuelabel-'+t} name='valuelabel' x={x} y={y2+2+10} textAnchor='middle'>
                        {keys[t]}
                    </text>
                );
            }
        } 
        return (
            <g name='xaxis' className='axis'>
                <line x1={this.props.margins.left} y1={this.props.size.height-this.props.margins.bottom} 
                    x2={this.props.size.width-this.props.margins.right} y2={this.props.size.height-this.props.margins.bottom}/>
                <g>
                    {ticks}
                </g>
                <g>
                    {valuelabels}
                </g>
                <text name='axislabel' x={(this.props.margins.left+this.props.size.width-this.props.margins.right)/2} y={this.props.size.height-5} textAnchor='middle'>
                    {this.props.dataset.getUnitX()==='month' ? 'Mesi' : 'Chenneso'}
                </text>
            </g>
        );
    }
}

class YAxis extends Component {
    render() {
        let data = this.props.dataset.getData();
        let keys = Object.keys(data);
        let firstentry = data[keys[0]];
        let lastentry = data[keys[keys.length-1]];
        let percentiles = Object.keys(firstentry);
        let _min = firstentry[percentiles[0]];
        let _max = lastentry[percentiles[percentiles.length-1]];
        let step = this.props.step;
        let labelstep = 2;
        let tolerance = .05;
        let min = Math.floor(((1-tolerance) * _min)/step) * step;
        let max = Math.ceil(((1+tolerance) * _max)/step) * step;
        console.log(step, min,max);

        let len = this.props.size.height-this.props.margins.bottom-this.props.margins.top;
        let tickcount = max-min;
        let stepY = len/tickcount;
        
        let ticks = [];
        let valuelabels = [];
        for(let t=0; t<=tickcount; t++) {
            let long = t%step===0;
            let x1 = this.props.margins.left;
            let x2 = x1 - (long ? long_tick_len : short_tick_len);
            let y = this.props.size.height-this.props.margins.bottom - t*stepY;
            ticks.push(
                <line className={long ? 'longtick' : 'tick'} key={'tick-' + t} x1={x1} y1={y} x2={x2} y2={y}/>
            );
            let showlabel = t%(step*labelstep)===0;
            if (showlabel) {
                valuelabels.push(
                    <text name='valuelabel' key={'valuelabel-'+t} x={x2-3} y={y} textAnchor='end' alignmentBaseline='middle'>
                        {min + t}
                    </text>
                )
            }
        }
        return (
            <g name='yaxis' className='axis'>
                <line x1={this.props.margins.left} y1={this.props.size.height-this.props.margins.bottom} 
                    x2={this.props.margins.left} y2={this.props.margins.top}/>
                <g>
                    {ticks}                    
                </g>
                <g>
                    {valuelabels}
                </g>
                <text name='axislabel' 
                    x={20} y={(this.props.margins.top + this.props.size.height - this.props.margins.bottom)/2} 
                    textAnchor='middle' transform={'rotate(-90 20 ' + ((this.props.margins.top + this.props.size.height - this.props.margins.bottom)/2) + ')'}>
                    {this.props.dataset.getTitle()}
                </text>
            </g>
        );
    }
}

class Grid extends Component {
    render() {
        let data = this.props.dataset.getData();
        let keys = Object.keys(data);
        
        let tickcountX = keys.length;
        let lenX = this.props.size.width - this.props.margins.left - this.props.margins.right;
        let stepX = lenX/(tickcountX-1);
        let step = this.props.dataset.getUnitX()==='month' ? 6 : 5;
        let reflinesx = [];
        for(let t = 0; t<tickcountX; t++) {
            let long = t%step===0;
            let x = this.props.margins.left + t * stepX;
            let y1 = this.props.size.height-this.props.margins.bottom;
            let y2 = this.props.margins.top;
            reflinesx.push(
                <line className={long?'longrefline':'refline'} key={'reflinex-'+t} x1={x} y1={y1} x2={x} y2={y2}/>
            );
        }

        let firstentry = data[keys[0]];
        let lastentry = data[keys[keys.length-1]];
        let percentiles = Object.keys(firstentry);
        let _min = firstentry[percentiles[0]];
        let _max = lastentry[percentiles[percentiles.length-1]];
        step = this.props.step;
        let tolerance = .05;
        let min = Math.floor(((1-tolerance) * _min)/step) * step;
        let max = Math.ceil(((1+tolerance) * _max)/step) * step;

        let lenY = this.props.size.height-this.props.margins.bottom-this.props.margins.top;
        let tickcountY = max-min;
        let stepY = lenY/tickcountY;
        let reflinesy = [];
        for(let t=0; t<=tickcountY; t++) {
            let long = t%step===0;
            let x1 = this.props.margins.left;
            let x2 = this.props.size.width-this.props.margins.right;
            let y = this.props.size.height-this.props.margins.bottom - t*stepY;
            reflinesy.push(
                <line className={long ? 'longrefline' : 'refline'} key={'refliney-' + t} x1={x1} y1={y} x2={x2} y2={y}/>
            );
        }
        return (
            <g name='grid' className='grid'>
                {reflinesx}
                {reflinesy}
            </g>
        )
    }
}

class Areas extends Component {
    render() {
        let data = this.props.dataset.getData();
        let keys = Object.keys(data);
        let minX = keys[0];
        let maxX = keys[keys.length-1];
        let lenX = this.props.size.width - this.props.margins.left - this.props.margins.right;

        let firstentry = data[keys[0]];
        let lastentry = data[keys[keys.length-1]];
        let pp = Object.keys(firstentry);
        let _min = firstentry[pp[0]];
        let _max = lastentry[pp[pp.length-1]];
        let step = this.props.step;
        let tolerance = .05;
        let minY = Math.floor(((1-tolerance) * _min)/step) * step;
        let maxY = Math.ceil(((1+tolerance) * _max)/step) * step;
        let lenY = this.props.size.height - this.props.margins.top - this.props.margins.bottom;

        let transformX = new AxisTransformation(lenX, minX, maxX);
        let transformY = new AxisTransformation(lenY, minY, maxY);

        let areas = [];
        let points1 = this.props.dataset.getPercentilePoints(0);
        let points2 = this.props.dataset.getPercentilePoints(this.props.dataset.getPercentiles().length-1);
        let pathStr = '';
        points1.forEach((point,i) => {
            let x = transformX.transform(point[0]) + this.props.margins.left;
            let y = this.props.size.height - this.props.margins.bottom - transformY.transform(point[1]);
            pathStr += i===0 ? 'M' : 'L';
            pathStr += x + ' ' + y + ' ';
        });
        points2.reverse().forEach((point,i) => {
            let x = transformX.transform(point[0]) + this.props.margins.left;
            let y = this.props.size.height - this.props.margins.bottom - transformY.transform(point[1]);
            pathStr += 'L';
            pathStr += x + ' ' + y + ' ';
        });
        pathStr += 'Z';
        areas.push(
            <path className='area-curve' key='area-curve-1' name='area-curve-1' d={pathStr}/>
        );

        if (this.props.dataset.getPercentiles().length>=4) {
            let points3 = this.props.dataset.getPercentilePoints(1);
            let points4 = this.props.dataset.getPercentilePoints(this.props.dataset.getPercentiles().length-2);
            pathStr = '';
            points3.forEach((point,i) => {
                let x = transformX.transform(point[0]) + this.props.margins.left;
                let y = this.props.size.height - this.props.margins.bottom - transformY.transform(point[1]);
                pathStr += i===0 ? 'M' : 'L';
                pathStr += x + ' ' + y + ' ';
            });
            points4.reverse().forEach((point,i) => {
                let x = transformX.transform(point[0]) + this.props.margins.left;
                let y = this.props.size.height - this.props.margins.bottom - transformY.transform(point[1]);
                pathStr += 'L';
                pathStr += x + ' ' + y + ' ';
            });
            pathStr += 'Z';
            areas.push(
                <path className='area-curve' key='area-curve-2' name='area-curve-2' d={pathStr}/>
            );
    
        }

        return (
            <g name='areas' className='areas'>
                {areas}
            </g>
        );
    }
}

class Percentiles extends Component {
    render() {
        let data = this.props.dataset.getData();
        let keys = Object.keys(data);
        let minX = keys[0];
        let maxX = keys[keys.length-1];
        let lenX = this.props.size.width - this.props.margins.left - this.props.margins.right;

        let firstentry = data[keys[0]];
        let lastentry = data[keys[keys.length-1]];
        let pp = Object.keys(firstentry);
        let _min = firstentry[pp[0]];
        let _max = lastentry[pp[pp.length-1]];
        let step = this.props.step;
        let tolerance = .05;
        let minY = Math.floor(((1-tolerance) * _min)/step) * step;
        let maxY = Math.ceil(((1+tolerance) * _max)/step) * step;
        let lenY = this.props.size.height - this.props.margins.top - this.props.margins.bottom;

        let transformX = new AxisTransformation(lenX, minX, maxX);
        let transformY = new AxisTransformation(lenY, minY, maxY);

        let curves = [];
        for (let j=0; j< this.props.dataset.getPercentiles().length; j++) {
            let p = this.props.dataset.getPercentiles()[j]
            let points = this.props.dataset.getPercentilePoints(j);
            let pathStr = '';
            let lastx, lasty;
            points.forEach((point,i) => {
                let x = transformX.transform(point[0]) + this.props.margins.left;
                let y = this.props.size.height - this.props.margins.bottom - transformY.transform(point[1]);
                pathStr += i===0 ? 'M' : 'L';
                pathStr += x + ' ' + y + ' ';
                if (i===points.length-1) {
                    lastx = x;
                    lasty = y;
                }
            });
            curves.push(
                <path className={'percentile-curve' + (j===0 || j===(this.props.dataset.getPercentiles().length-1) ? ' dotted' : '')} key={'percentile-curve-' + p} name={'percentile-'+p} d={pathStr}/>
            );
            curves.push(
                <text key={'percentile-label-'+p} className='percentile-label' x={lastx-3} y={lasty-3} textAnchor='end'>{p + 'th'}</text>
            );
        }
        return (
            <g name='percentiles' className='percentiles'>
                {curves}
            </g>
        );
    }
}

class PatientData extends Component {
    render() {
        return (
            <g name='patient-data' className='patient-data'>

            </g>
        )
    }
}

export default PChart;