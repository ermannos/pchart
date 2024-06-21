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

const Areas = () => {
  const store = useStore() as Store;
  const theme = useTheme();

  const areas = [];
  const points1 = store.getDataset().getPercentilePoints(0);
  const points2 = store
    .getDataset()
    .getPercentilePoints(store.getDataset().percentiles.length - 1);
  let pathStr = "";
  points1.forEach((point, i) => {
    const x = store.transformX(point[0]) + store.getMargins().left;
    const y = store.getMeasures().bottom - store.transformY(point[1]);
    pathStr += i === 0 ? "M" : "L";
    pathStr += `${x} ${y} `;
  });
  points2.reverse().forEach((point) => {
    const x = store.transformX(point[0]) + store.getMargins().left;
    const y = store.getMeasures().bottom - store.transformY(point[1]);
    pathStr += "L";
    pathStr += `${x} ${y} `;
  });
  pathStr += "Z";
  areas.push(
    <path
      className="area-curve"
      key="area-curve-1"
      name="area-curve-1"
      d={pathStr}
      fill={theme.areaColor}
    />
  );

  if (store.getDataset().percentiles.length >= 4) {
    const points3 = store.getDataset().getPercentilePoints(1);
    const points4 = store
      .getDataset()
      .getPercentilePoints(store.getDataset().percentiles.length - 2);
    pathStr = "";
    points3.forEach((point, i) => {
      const x = store.transformX(point[0]) + store.getMargins().left;
      const y = store.getMeasures().bottom - store.transformY(point[1]);
      pathStr += i === 0 ? "M" : "L";
      pathStr += `${x} ${y} `;
    });
    points4.reverse().forEach((point) => {
      const x = store.transformX(point[0]) + store.getMargins().left;
      const y = store.getMeasures().bottom - store.transformY(point[1]);
      pathStr += "L";
      pathStr += `${x} ${y} `;
    });
    pathStr += "Z";
    areas.push(
      <path
        className="area-curve"
        key="area-curve-2"
        name="area-curve-2"
        d={pathStr}
        fill={theme.areaColor}
      />
    );
  }

  return (
    <g name="areas" className="areas">
      {areas}
    </g>
  );
};

export default Areas;
