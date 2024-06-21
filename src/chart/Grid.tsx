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
import { useTheme } from "../context/ThemeContext";
import Store from "../store/Store";

const Grid = () => {
  const store = useStore() as Store;
  const theme = useTheme();

  const tickcountX = store.getMeasures().keys.length;
  const stepX = store.getMeasures().width / (tickcountX - 1);
  const step =
    store.getDataset().getUnitX() === "month" ||
      store.getDataset().getUnitX() === "year"
      ? 6
      : 5;
  const reflinesx = [];
  for (let t = 0; t < tickcountX; t += 1) {
    const key = store.getMeasures().keys[t];
    const long =
      store.getDataset().getUnitX() === "year"
        ? key % step === 0
        : t % step === 0;
    const x = store.getMeasures().left + t * stepX;
    const y1 = store.getMeasures().bottom;
    const y2 = store.getMeasures().top;
    reflinesx.push(
      <line
        className={long ? "longrefline" : "refline"}
        key={`reflinex-${t}`}
        x1={x}
        y1={y1}
        x2={x}
        y2={y2}
        stroke={theme.gridColor}
      />
    );
  }

  const tickCountY = store.getMeasures().maxY - store.getMeasures().minY;
  const stepY = store.getMeasures().height / tickCountY;

  const reflinesy = [];
  for (let t = 0; t <= tickCountY; t += 1) {
    const long = t % store.getStep() === 0;
    const x1 = store.getMeasures().left;
    const x2 = store.getMeasures().right;
    const y = store.getMeasures().bottom - t * stepY;
    reflinesy.push(
      <line
        className={long ? "longrefline" : "refline"}
        key={`refliney-${t}`}
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke={theme.gridColor}
      />
    );
  }
  return (
    <g name="grid" className="grid">
      {reflinesx}
      {reflinesy}
    </g>
  );
};

export default Grid;
