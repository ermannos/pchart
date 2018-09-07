import React, { Component } from 'react';
import {getData} from './data';
import './style/chart.css';

let short_tick_len = 5;
let long_tick_len = 10;

class PChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getData([3,10,25,50,75,90,97])
        }
    }

    render() {
        let size = {width:this.props.width,height:this.props.height};
        let margins = {left:60,right:10,top:10,bottom:40};
        return (
            <svg width={this.props.width} height={this.props.height}>
                <Backdrop size={size} margins={margins}/>
                <XAxis size={size} margins={margins} data={this.state.data} unit={'month'}/>
                <YAxis size={size} margins={margins} data={this.state.data} unit={'cm'} step={5} title='Altezza (cm)'/>
                <Grid size={size} margins={margins} data={this.state.data} unit={'month'} step={5}/>
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
        let data = this.props.data;
        let keys = Object.keys(data);
        //let min = keys[0];
        //let max = keys[keys.length-1];
        let count = keys.length;
        let len = this.props.size.width - this.props.margins.left - this.props.margins.right;
        let stepX = len/(count-1);
        let step = this.props.unit=='month' ? 6 : 5;
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
                    {this.props.unit==='month' ? 'Mesi' : 'Chenneso'}
                </text>
            </g>
        );
    }
}

class YAxis extends Component {
    render() {
        let data = this.props.data;
        let keys = Object.keys(data);
        let firstentry = this.props.data[keys[0]];
        let lastentry = this.props.data[keys[keys.length-1]];
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
                    {this.props.title}
                </text>
            </g>
        );
    }
}

class Grid extends Component {
    render() {
        let data = this.props.data;
        let keys = Object.keys(data);
        
        let tickcountX = keys.length;
        let lenX = this.props.size.width - this.props.margins.left - this.props.margins.right;
        let stepX = lenX/(tickcountX-1);
        let step = this.props.unit=='month' ? 6 : 5;
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

export default PChart;