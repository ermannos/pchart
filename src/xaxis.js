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
import { withTheme } from '@callstack/react-theme-provider';
let short_tick_len = 5;
let long_tick_len = 10;

class XAxis extends Component {
    render() {
        let step = Store.getDataset().getUnitX()==='month' ? 6 : (Store.getDataset().getUnitX()==='week' ? 1 : 5);
        let labelstep = Store.getDataset().getUnitX()==='month' ? 2 : 1;
        let ticks = [];
        let valuelabels = [];
        for(let t = 0; t<Store.getMeasures().countX; t++) {
            let long = t%step===0;
            let x = Store.getMeasures().left + t * Store.getMeasures().stepX;
            let y1 = Store.getSize().height-Store.getMargins().bottom;
            let y2 = y1 + (long ? long_tick_len : short_tick_len);
            ticks.push(
                <line className={long?'longtick':'tick'} key={'tick-'+t} x1={x} y1={y1} x2={x} y2={y2} stroke={this.props.theme.axisColor}/>
            );
            let showlabel = t%(step*labelstep)===0
            if (showlabel) {
                valuelabels.push(
                    <text key={'valuelabel-'+t} name='valuelabel' x={x} y={y2+2+10} textAnchor='middle'>
                        {Store.getMeasures().keys[t]}
                    </text>
                );
            }
        } 
        let axisTitle = Store.getDataset().getUnitX()==='month' ? 'Mesi' : Store.getDataset().getUnitX()==='week' ? 'Settimane' : ''
        return (
            <g name='xaxis' className='axis'>
                <line x1={Store.getMeasures().left} y1={Store.getMeasures().bottom} 
                    x2={Store.getMeasures().right} y2={Store.getMeasures().bottom}
                    stroke={this.props.theme.axisColor}/>
                <g>
                    {ticks}
                </g>
                <g>
                    {valuelabels}
                </g>
                <text name='axislabel' x={(Store.getMargins().left+Store.getMeasures().right)/2} y={Store.getSize().height-5} textAnchor='middle'>
                    {axisTitle}
                </text>
            </g>
        );
    }
}

export default withTheme(XAxis);
