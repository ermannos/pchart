/*
    Copyright (C) 2018  Ermanno Scanagatta

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import React, { Component } from 'react';
import StoreContext from './context';

class Percentiles extends Component {
    render() {
        let store = this.context;
        let curves = [];
        for (let j=0; j< store.getDataset().percentiles.length; j++) {
            let p = store.getDataset().percentiles[j]
            let points = store.getDataset().getPercentilePoints(j);
            let pathStr = '';
            let lastx, lasty;
            points.forEach((point,i) => {
                let x = store.transformX(point[0]) + store.getMeasures().left;
                let y = store.getMeasures().bottom - store.transformY(point[1]);
                pathStr += i===0 ? 'M' : 'L';
                pathStr += x + ' ' + y + ' ';
                if (i===points.length-1) {
                    lastx = x;
                    lasty = y;
                }
            });
            curves.push(
                <path className={'percentile-curve' + (j===0 || j===(store.getDataset().percentiles.length-1) ? ' dotted' : '')} key={'percentile-curve-' + p} name={'percentile-'+p} d={pathStr}/>
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
Percentiles.contextType = StoreContext;

export default Percentiles;