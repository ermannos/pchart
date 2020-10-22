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
/* eslint-disable react/no-array-index-key */
import React, { useContext } from "react";
import moment from "moment";
import { StoreContext } from "./context";

const TouchAreas = ({ patient, showTooltip }) => {
  const store = useContext(StoreContext);
  const ds = store.getDataset();
  let diffunit = ds.getUnitX();
  if (diffunit === "year") {
    diffunit = "month";
  }
  const birthdate = moment(patient.birthdate);

  const getPointTitle = (measure) => {
    const pointdate = moment(measure.date);
    const datediff = pointdate.diff(birthdate, diffunit);

    const title = `${moment(measure.date).format(
      "DD.MM.YYYY"
    )} (${datediff} ${diffunit}s)`;
    return title;
  };

  const getPointValue = (measure) => {
    const pointdate = moment(measure.date);
    const datediff = pointdate.diff(birthdate, diffunit);
    const val = measure[ds.getDataType()];
    const percentile = ds.getPercentileForValue(datediff, val);

    const value = `${ds.titleY}: ${measure[ds.dataType]} (${percentile}%)`;
    return value;
  };

  const touch = [];
  patient.measures.forEach((m, i) => {
    if (!m) {
      return;
    }
    const pointdate = moment(m.date);
    const birthdate = moment(patient.birthdate);
    let diffunit = store.getDataset().getUnitX();
    if (diffunit === "year") {
      diffunit = "month";
    }
    const datediff = pointdate.diff(birthdate, diffunit);
    const value = m[store.getDataset().getDataType()];

    const dx = store.transformX(datediff);
    if (
      dx === null ||
      dx === undefined ||
      dx < 0 ||
      dx > store.getMeasures().width
    ) {
      return;
    }
    const x = store.getMeasures().left + dx;
    const y = store.getMeasures().bottom - store.transformY(value);
    if (Number.isNaN(y)) {
      return;
    }

    touch.push(
      <g key={`touch-${i}`} id={`touch-${i}`}>
        <circle
          cx={x}
          cy={y}
          r={6}
          stroke="none"
          fill="rgba(192,192,192,0.01)"
          onMouseEnter={() => {
            showTooltip(x, y, getPointTitle(m), getPointValue(m));
          }}
        />
      </g>
    );
  });
  return <g name="touch-areas">{touch}</g>;
};

export default TouchAreas;
