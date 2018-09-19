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
let short_tick_len = 5;
let long_tick_len = 10;

export default class YAxis extends Component {
    render() {
        let labelstep = 2;
        let tickcount = Store.getMeasures().maxY-Store.getMeasures().minY;
        let stepY = Store.getMeasures().height/tickcount;
        
        let ticks = [];
        let valuelabels = [];
        for(let t=0; t<=tickcount; t++) {
            let long = t%Store.getStep()===0;
            let x1 = Store.getMeasures().left;
            let x2 = x1 - (long ? long_tick_len : short_tick_len);
            let y = Store.getMeasures().bottom - t*stepY;
            ticks.push(
                <line className={long ? 'longtick' : 'tick'} key={'tick-' + t} x1={x1} y1={y} x2={x2} y2={y}/>
            );
            let showlabel = t%(Store.getStep()*labelstep)===0;
            if (showlabel) {
                valuelabels.push(
                    <text name='valuelabel' key={'valuelabel-'+t} x={x2-3} y={y} textAnchor='end' alignmentBaseline='middle'>
                        {Store.getMeasures().minY + t}
                    </text>
                )
            }
        }
        return (
            <g name='yaxis' className='axis'>
                <line x1={Store.getMeasures().left} y1={Store.getMeasures().bottom} 
                    x2={Store.getMeasures().left} y2={Store.getMeasures().top}/>
                <g>
                    {ticks}                    
                </g>
                <g>
                    {valuelabels}
                </g>
                <text name='axislabel' 
                    x={20} y={(Store.getMargins().top + Store.getMeasures().bottom)/2} 
                    textAnchor='middle' transform={'rotate(-90 20 ' + ((Store.getMargins().top + Store.getMeasures().bottom)/2) + ')'}>
                    {Store.getDataset().getTitle()}
                </text>
            </g>
        );
    }
}

