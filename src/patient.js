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
import moment from 'moment';
import StoreContext from './context';

export default class PatientData extends Component {
    render() {
        let store = this.context;
        let labels = [];
        let points = [];
        let lineStr = ''
        this.props.patient.measures.forEach((m,i) => {
            if (!m) return;
            let pointdate = moment(m.date);
            let birthdate =  moment(this.props.patient.birthdate);
            let datediff = pointdate.diff(birthdate, store.getDataset().getUnitX());
            let value = m[store.getDataset().getDataType()];
            let percentile = store.getDataset().getPercentileForValue(datediff, value);

            let dx = store.transformX(datediff);
            if (dx<0 || dx>store.getMeasures().width) return;
            let x = store.getMeasures().left + dx;
            let y = store.getMeasures().bottom - store.transformY(value);
            if (isNaN(y)) return;

            if (this.props.showlabels)
                labels.push(
                    <text key={'label-'+i} name={'label-'+i} className='percentile-label' x={x} y={y-10} textAnchor='middle' fill={this.props.patient.color || 'red'}>{percentile}</text>
                );

                points.push(
                <circle className='percentile-point' key={'dot-'+i} cx={x} cy={y} r={3} fill={this.props.patient.color || 'red'} />
            )

            lineStr += (i===0 ? 'M' : 'L') + x + ' ' + y + ' '; 
        });
        return (
            <g name='patient-data' className='patient-data'>
                {this.props.showlines ? 
                    <path className='percentile-line' d={lineStr} stroke={this.props.patient.color || 'red'}/>
                :''}
                {labels}
                {points}
            </g>
        )
    }
}
PatientData.contextType = StoreContext;

