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
import Store from './store';

class Areas extends Component {
    render() {
        let areas = [];
        let points1 = Store.getDataset().getPercentilePoints(0);
        let points2 = Store.getDataset().getPercentilePoints(Store.getDataset().percentiles.length-1);
        let pathStr = '';
        points1.forEach((point,i) => {
            let x = Store.transformX(point[0]) + Store.getMargins().left;
            let y = Store.getMeasures().bottom - Store.transformY(point[1]);
            pathStr += i===0 ? 'M' : 'L';
            pathStr += x + ' ' + y + ' ';
        });
        points2.reverse().forEach((point,i) => {
            let x = Store.transformX(point[0]) + Store.getMargins().left;
            let y = Store.getMeasures().bottom - Store.transformY(point[1]);
            pathStr += 'L';
            pathStr += x + ' ' + y + ' ';
        });
        pathStr += 'Z';
        areas.push(
            <path className='area-curve' key='area-curve-1' name='area-curve-1' d={pathStr}/>
        );

        if (Store.getDataset().percentiles.length>=4) {
            let points3 = Store.getDataset().getPercentilePoints(1);
            let points4 = Store.getDataset().getPercentilePoints(Store.getDataset().percentiles.length-2);
            pathStr = '';
            points3.forEach((point,i) => {
                let x = Store.transformX(point[0]) + Store.getMargins().left;
                let y = Store.getMeasures().bottom - Store.transformY(point[1]);
                pathStr += i===0 ? 'M' : 'L';
                pathStr += x + ' ' + y + ' ';
            });
            points4.reverse().forEach((point,i) => {
                let x = Store.transformX(point[0]) + Store.getMargins().left;
                let y = Store.getMeasures().bottom - Store.transformY(point[1]);
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

export default Areas;