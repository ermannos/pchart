import React, { Component } from 'react';

class Grid extends Component {
    render() {
        let data = this.props.dataset.data;
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

export default Grid;

