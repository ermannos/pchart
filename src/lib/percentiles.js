import React, { Component } from 'react';
import {AxisTransformation} from './utils';

class Percentiles extends Component {
    render() {
        let data = this.props.dataset.data;
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
        for (let j=0; j< this.props.dataset.percentiles.length; j++) {
            let p = this.props.dataset.percentiles[j]
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
                <path className={'percentile-curve' + (j===0 || j===(this.props.dataset.percentiles.length-1) ? ' dotted' : '')} key={'percentile-curve-' + p} name={'percentile-'+p} d={pathStr}/>
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

export default Percentiles;