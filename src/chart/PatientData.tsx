/*
Copyright (C) 2018-2024  Ermanno Scanagatta

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
import React, { useEffect, useState } from "react";
import { convert } from "../utils";
import { useStore } from "../context/StoreContext";
import Store from "../store/Store";
import { Patient } from "../types";

interface Props {
  patient: Patient;
  showlabels?: boolean;
  showlines?: boolean;
}

const PatientData: React.FC<Props> = ({ patient, showlabels = true, showlines = true }) => {
  const store = useStore() as Store;
  const [labels, setLabels] = useState<JSX.Element[]>([]);
  const [points, setPoints] = useState<JSX.Element[]>([]);
  const [lineString, setLineString] = useState("");

  useEffect(() => {
    let lineStr = "";
    const pp: JSX.Element[] = [];
    const ll: JSX.Element[] = [];

    patient.measures.forEach((m, i) => {
      if (!m) {
        return;
      }
      const pointdate = new Date(m.date);
      const birthdate = new Date(patient.birthdate);
      let diffunit = store.getDataset().getUnitX();
      if (diffunit === "year") {
        diffunit = "month";
      }
      const diff = convert(pointdate, birthdate, diffunit);

      const value = m[store.getDataset().getDataType()];
      if (!value) return;

      const percentile = store.getDataset().getPercentileForValue(diff, value);

      const dx = store.transformX(diff);
      const dy = store.transformY(value) || 0;

      if (
        dx === null ||
        dx === undefined ||
        dx < 0 ||
        dx > store.getMeasures().width
      ) {
        console.log('dx too low', dx)
        return;
      }
      const x = store.getMeasures().left + dx;
      const y = store.getMeasures().bottom - dy;
      if (Number.isNaN(y)) {
        return;
      }

      if (showlabels) {
        ll.push(
          <text
            key={`label-${i}`}
            name={`label-${i}`}
            className="percentile-label"
            x={x}
            y={y - 10}
            textAnchor="middle"
            fill={patient.color || "red"}
          >
            {percentile}
          </text>
        );
      }
      pp.push(
        <g key={`dot-${i}`} id={`dot-${i}`}>
          <circle
            className="percentile-point"
            cx={x}
            cy={y}
            r={3}
            fill={patient.color || "red"}
          />
        </g>
      );

      lineStr += `${!lineStr.length ? "M" : "L"}${x} ${y} `;
    });
    setLineString(lineStr);
    setPoints(pp);
    setLabels(ll);
  }, [patient, store, showlabels]);

  return (
    <g name="patient-data" className="patient-data">
      {showlines ? (
        <path
          className="percentile-line"
          d={lineString}
          stroke={patient.color || "red"}
        />
      ) : (
        ""
      )}
      {labels}
      {points}
    </g>
  );
};

export default PatientData;
