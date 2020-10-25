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

const W = 180;
const H = 42;
const R = 3;
const GAP = 3;

const Tooltip = ({ x = 0, y = 0, visible = false, title, value }) => {

  let tx = x - W  - GAP;
  let ty = y - H - GAP;

  if (tx<0 || ty<0) {
    tx = x + GAP;
    ty = y + GAP;
  }

  const buildPath = () => {
    const p0 = `${R} 0`;
    const p1 = `${W-R} 0`;
    const c1 = `${W-1} 1`;
    const p2 = `${W} ${R}`;
    const p3 = `${W} ${H-R}`;
    const c3 = `${W-1} ${H-1}`;
    const p4 = `${W-R} ${H}`;
    const p5 = `${R} ${H}`;
    const c5 = `1 ${H-1}`;
    const p6 = `0 ${H-R}`;
    const p7 = `0 ${R}`;
    const c7 = '1 1';
    return `M${p0} L ${p1} C ${c1}, ${c1}, ${p2} L ${p3} C ${c3}, ${c3}, ${p4} L ${p5} C ${c5}, ${c5}, ${p6} L ${p7} C ${c7}, ${c7}, ${p0}`;
  }
  
  return (
    <>
      <defs>
        <clipPath id='clip'>
          <path
            d={buildPath()}
          />
        </clipPath>
      </defs>

      <g className='tooltip'
        transform={visible ? `translate(${tx},${ty})` : "translate(-200,-60)"}
        style={{ transition: "all .3s ease-in-out" }}
        visibility={visible?'visible':'hidden'}
        clipPath='url(#clip)'
      >
        <path
          d={buildPath()}
        />
        <text x={5} y={15}>
          {title}
        </text>
        <text x={5} y={35}>
          {value}
        </text>
      </g>
    </>
  );
};

export default Tooltip;
