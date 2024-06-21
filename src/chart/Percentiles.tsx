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
import React from "react";
import { useStore } from "../context/StoreContext";
import Store from "../store/Store";

const Percentiles = () => {
  const store = useStore() as Store;
  const curves = [];
  for (let j = 0; j < store.getDataset().percentiles.length; j += 1) {
    const p = store.getDataset().percentiles[j];
    const points = store.getDataset().getPercentilePoints(j);
    let pathStr = "";
    let lastx: number = 0;
    let lasty: number = 0;
    points.forEach((point, i) => {
      const x = store.transformX(point[0]) + store.getMeasures().left;
      const y = store.getMeasures().bottom - store.transformY(point[1]);
      pathStr += i === 0 ? "M" : "L";
      pathStr += `${x} ${y} `;
      if (i === points.length - 1) {
        lastx = x;
        lasty = y;
      }
    });
    curves.push(
      <path
        className={`percentile-curve${j === 0 || j === store.getDataset().percentiles.length - 1
          ? " dotted"
          : ""
          }`}
        key={`percentile-curve-${p}`}
        name={`percentile-${p}`}
        d={pathStr}
      />
    );
    curves.push(
      <text
        key={`percentile-label-${p}`}
        className="percentile-label"
        x={lastx - 3}
        y={lasty - 3}
        textAnchor="end"
      >
        {`${p}th`}
      </text>
    );
  }
  return (
    <g name="percentiles" className="percentiles">
      {curves}
    </g>
  );
};

export default Percentiles;
