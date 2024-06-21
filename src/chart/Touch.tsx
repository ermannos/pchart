/*
Copyright (C) 2020-2024  Ermanno Scanagatta

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
import React from "react";
import { convert } from "../utils";
import { Measure, Patient } from "../types";
import { useStore } from "../context/StoreContext";
import Store from "../store/Store";
import { differenceInDays, differenceInMonths, differenceInYears, format } from "date-fns";

interface Props {
  patient: Patient;
  showTooltip: (x: number, y: number, title: string, value: string) => void;
}

const TouchAreas: React.FC<Props> = ({ patient, showTooltip }) => {
  const store = useStore() as Store;
  const ds = store.getDataset();
  const shortNames = ds.getShortNames();
  let diffunit = ds.getUnitX();
  if (diffunit === "year") {
    diffunit = "month";
  }
  const birthdate = new Date(patient.birthdate);

  const getPointTitle = (measure: Measure) => {
    const pointdate = new Date(measure.date);
    let age = "";
    const diffY = differenceInYears(pointdate, birthdate);
    if (diffY >= 1) {
      const diffM = differenceInMonths(pointdate, birthdate) - 12 * diffY;
      age = `${diffY} ${shortNames.year}, ${diffM} ${shortNames.month}`;
    } else {
      const diffD = differenceInDays(pointdate, birthdate);
      const diffM = differenceInMonths(pointdate, birthdate);
      if (diffD <= 91) {
        // 13 weeks
        const w = Math.trunc(diffD / 7);
        const d = diffD - w * 7;
        age = `${w} ${shortNames.week}, ${d} ${shortNames.day}`;
      } else {
        age = `${diffM} ${shortNames.month}`;
      }
    }

    const title = `${format(new Date(measure.date), "dd.MM.yyyy")} (${age})`;
    return title;
  };

  const getPointValue = (measure: Measure) => {
    const pointdate = new Date(measure.date);
    // const datediff = pointdate.diff(birthdate, diffunit);
    const diff = convert(pointdate, birthdate, diffunit);
    const val = measure[ds.getDataType()] || 0;
    const percentile = ds.getPercentileForValue(diff, val);

    const value = `${ds.titleY}: ${measure[ds.dataType]} (${percentile}%)`;
    return value;
  };

  const touch: JSX.Element[] = [];
  patient.measures.forEach((m, i) => {
    if (!m) {
      return;
    }
    const pointdate = new Date(m.date);
    const diff = convert(pointdate, birthdate, diffunit);
    const value = m[store.getDataset().getDataType()];

    const dx = store.transformX(diff);
    if (
      dx === null ||
      dx === undefined ||
      dx < 0 ||
      dx > store.getMeasures().width
    ) {
      return;
    }
    const x = store.getMeasures().left + dx;
    const y = store.getMeasures().bottom - store.transformY(value as number);
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
