import React, { Component } from 'react';
let short_tick_len = 5;
let long_tick_len = 10;

class YAxis extends Component {
    render() {
        let data = this.props.dataset.data;
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

export default YAxis;