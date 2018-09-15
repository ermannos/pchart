import React, { Component } from 'react';
import Store from './store';

class Percentiles extends Component {
    render() {
        let curves = [];
        for (let j=0; j< Store.getDataset().percentiles.length; j++) {
            let p = Store.getDataset().percentiles[j]
            let points = Store.getDataset().getPercentilePoints(j);
            let pathStr = '';
            let lastx, lasty;
            points.forEach((point,i) => {
                let x = Store.transformX(point[0]) + Store.getMeasures().left;
                let y = Store.getMeasures().bottom - Store.transformY(point[1]);
                pathStr += i===0 ? 'M' : 'L';
                pathStr += x + ' ' + y + ' ';
                if (i===points.length-1) {
                    lastx = x;
                    lasty = y;
                }
            });
            curves.push(
                <path className={'percentile-curve' + (j===0 || j===(Store.getDataset().percentiles.length-1) ? ' dotted' : '')} key={'percentile-curve-' + p} name={'percentile-'+p} d={pathStr}/>
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