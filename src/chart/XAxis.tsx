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
/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */

import React from "react";
import { useStore } from "../context/StoreContext";
import { useTheme } from "../context/ThemeContext";
import Store from "../store/Store";

const short_tick_len = 5;
const long_tick_len = 10;

const XAxis: React.FC = () => {
  const store = useStore() as Store;
  const theme = useTheme();

  const step =
    store.getDataset().getUnitX() === "month" ||
      store.getDataset().getUnitX() === "year"
      ? 6
      : store.getDataset().getUnitX() === "week"
        ? 1
        : 5;
  const labelstep =
    store.getDataset().getUnitX() === "month" ||
      store.getDataset().getUnitX() === "year"
      ? 2
      : 1;

  const ticks = [];
  const valuelabels = [];
  for (let t = 0; t < store.getMeasures().countX; t += 1) {
    const key = store.getMeasures().keys[t];
    const long =
      store.getDataset().getUnitX() === "year"
        ? key % step === 0
        : t % step === 0;
    const x = store.getMeasures().left + t * store.getMeasures().stepX;
    const y1 = store.getSize().height - store.getMargins().bottom;
    const y2 = y1 + (long ? long_tick_len : short_tick_len);
    ticks.push(
      <line
        className={long ? "longtick" : "tick"}
        key={`tick-${t}`}
        x1={x}
        y1={y1}
        x2={x}
        y2={y2}
        stroke={theme.axisColor}
      />
    );
    const showlabel =
      store.getDataset().getUnitX() === "year"
        ? key % 12 === 0
        : t % (step * labelstep) === 0;
    if (showlabel) {
      valuelabels.push(
        <text
          key={`valuelabel-${t}`}
          name="valuelabel"
          x={x}
          y={y2 + 2 + 10}
          textAnchor="middle"
        >
          {store.getDataset().getUnitX() === "year" ? key / 12 : key}
        </text>
      );
    }
  }
  const axisTitle = store.getDataset().getTitleX();

  return (
    <g name="xaxis" className="axis">
      <line
        x1={store.getMeasures().left}
        y1={store.getMeasures().bottom}
        x2={store.getMeasures().right}
        y2={store.getMeasures().bottom}
        stroke={theme.axisColor}
      />
      <g>{ticks}</g>
      <g>{valuelabels}</g>
      <text
        name="axislabel"
        x={(store.getMargins().left + store.getMeasures().right) / 2}
        y={store.getSize().height - 5}
        textAnchor="middle"
      >
        {axisTitle}
      </text>
    </g>
  );
};

export default XAxis;
