import React, { Component } from 'react';
import Store from './store';
import {AxisTransformation} from './utils';

class Areas extends Component {
    render() {
        let data = Store.getDataset().data;
        let keys = Object.keys(data);
        let minX = keys[0];
        let maxX = keys[keys.length-1];
        let lenX = Store.getSize().width - Store.getMargins().left - Store.getMargins().right;

        let firstentry = data[keys[0]];
        let lastentry = data[keys[keys.length-1]];
        let pp = Object.keys(firstentry);
        let _min = firstentry[pp[0]];
        let _max = lastentry[pp[pp.length-1]];
        let step = Store.getStep();
        let tolerance = .05;
        let minY = Math.floor(((1-tolerance) * _min)/step) * step;
        let maxY = Math.ceil(((1+tolerance) * _max)/step) * step;
        let lenY = Store.getSize().height - Store.getMargins().top - Store.getMargins().bottom;

        let transformX = new AxisTransformation(lenX, minX, maxX);
        let transformY = new AxisTransformation(lenY, minY, maxY);

        let areas = [];
        let points1 = Store.getDataset().getPercentilePoints(0);
        let points2 = Store.getDataset().getPercentilePoints(Store.getDataset().percentiles.length-1);
        let pathStr = '';
        points1.forEach((point,i) => {
            let x = transformX.transform(point[0]) + Store.getMargins().left;
            let y = Store.getSize().height - Store.getMargins().bottom - transformY.transform(point[1]);
            pathStr += i===0 ? 'M' : 'L';
            pathStr += x + ' ' + y + ' ';
        });
        points2.reverse().forEach((point,i) => {
            let x = transformX.transform(point[0]) + Store.getMargins().left;
            let y = Store.getSize().height - Store.getMargins().bottom - transformY.transform(point[1]);
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
                let x = transformX.transform(point[0]) + Store.getMargins().left;
                let y = Store.getSize().height - Store.getMargins().bottom - transformY.transform(point[1]);
                pathStr += i===0 ? 'M' : 'L';
                pathStr += x + ' ' + y + ' ';
            });
            points4.reverse().forEach((point,i) => {
                let x = transformX.transform(point[0]) + Store.getMargins().left;
                let y = Store.getSize().height - Store.getMargins().bottom - transformY.transform(point[1]);
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