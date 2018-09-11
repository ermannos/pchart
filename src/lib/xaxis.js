import React, { Component } from 'react';
let short_tick_len = 5;
let long_tick_len = 10;

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

export default XAxis;
