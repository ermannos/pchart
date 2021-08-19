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

import moment from "moment";
import { convert } from "../utils";

describe("Conversions", () => {
  test("Diff date to months (>365 days)", () => {
    const birthdate = moment("2002-04-27");
    const pointdate = moment("2018-09-11");
    const unit = "month";
    const result = 196.7;

    const diff = convert(pointdate, birthdate, unit);
    expect(diff).toBe(result);
  });

  test("Diff date to months (<365 days)", () => {
    const birthdate = moment("2018-04-27");
    const pointdate = moment("2018-09-11");
    const unit = "month";
    const result = 4.6;

    const diff = convert(pointdate, birthdate, unit);
    expect(diff).toBe(result);
  });

  test("Diff date to weeks", () => {
    const birthdate = moment("2018-01-14");
    const pointdate = moment("2018-01-23");
    const unit = "week";
    const result = 1.3;

    const diff = convert(pointdate, birthdate, unit);
    console.log("diff", diff);
    expect(diff).toBe(result);
  });
});
