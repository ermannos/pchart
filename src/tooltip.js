/*
    Copyright (C) 2020  Ermanno Scanagatta

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

const W = 200;
const H = 50;
const GAP = 3;

const Tooltip = ({ x = 0, y = 0, visible = false }) => {

  let tx = x - W  - GAP;
  let ty = y - H - GAP;

  if (tx<0 || ty<0) {
    tx = x + GAP;
    ty = y + GAP;
  }
  
  return (
    <g
      transform={
        visible ? `translate(${tx},${ty})`
          : "translate(-200,-100)"
      }
      style={{ transition: "all .3s ease-in-out" }}
    >
      <path d={`M0 0 L ${W} 0 L ${W} ${H} L0 ${H} Z`} />
    </g>
  );
};

export default Tooltip;
