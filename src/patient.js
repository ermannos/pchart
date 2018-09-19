import React, { Component } from 'react';
import moment from 'moment';
import Store from './store';

export default class PatientData extends Component {
    render() {
        let labels = [];
        let points = [];
        let lineStr = ''
        this.props.patient.measures.forEach((m,i) => {
            let pointdate = moment(m.date);
            let birthdate =  moment(this.props.patient.birthdate);
            let datediff = pointdate.diff(birthdate, Store.getDataset().getUnitX());
            let value = m[Store.getDataset().getType()];
            let percentile = Store.getDataset().getPercentileForValue(datediff, value);

            let x = Store.transformX(datediff) + Store.getMeasures().left;
            let y = Store.getMeasures().bottom - Store.transformY(value);

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
                <path className='percentile-line' d={lineStr} stroke={this.props.patient.color || 'red'}/>
                {labels}
                {points}
            </g>
        )
    }
}

