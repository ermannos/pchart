import React, { Component } from 'react';
import Store from './store';

class Grid extends Component {
    render() {
        let tickcountX = Store.getMeasures().keys.length;
        let stepX = Store.getMeasures().width/(tickcountX-1);
        let step = Store.getDataset().getUnitX()==='month' ? 6 : 5;
        let reflinesx = [];
        for(let t = 0; t<tickcountX; t++) {
            let long = t%step===0;
            let x = Store.getMeasures().left + t * stepX;
            let y1 = Store.getMeasures().bottom;
            let y2 = Store.getMeasures().top;
            reflinesx.push(
                <line className={long?'longrefline':'refline'} key={'reflinex-'+t} x1={x} y1={y1} x2={x} y2={y2}/>
            );
        }

        let tickCountY = Store.getMeasures().maxY-Store.getMeasures().minY;
        let stepY = Store.getMeasures().height/tickCountY;

        let reflinesy = [];
        for(let t=0; t<=tickCountY; t++) {
            let long = t%Store.getStep()===0;
            let x1 = Store.getMeasures().left;
            let x2 = Store.getMeasures().right;
            let y = Store.getMeasures().bottom - t*stepY;
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

