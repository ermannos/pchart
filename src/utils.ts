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
import { differenceInDays, differenceInMonths, differenceInYears } from "date-fns";

const convertWeeks = (pointdate: Date, birthdate: Date) => {
  const daydiff = differenceInDays(pointdate, birthdate);
  const diff = Math.round((daydiff * 10) / 7) / 10;
  return diff;
};

const convertMonths = (pointdate: Date, birthdate: Date) => {
  const daydiff = differenceInDays(pointdate, birthdate);
  const datediff = differenceInMonths(pointdate, birthdate);
  let diff = 0;
  if (daydiff > 365) {
    const years = differenceInYears(pointdate, birthdate);
    const months = datediff % 12;
    const rest = daydiff - years * 365 - months * 30;
    diff = datediff + Math.round((rest * 10) / 30) / 10;
  } else {
    const rest = daydiff - datediff * 30;
    diff = datediff + Math.round((rest * 10) / 30) / 10;
  }
  return diff;
};

export const convert = (pointdate: Date, birthdate: Date, unit: 'year' | 'month' | 'week') => {
  if (unit === "month") {
    return convertMonths(pointdate, birthdate);
  }
  if (unit === "week") {
    return convertWeeks(pointdate, birthdate);
  }
  return 0;
};
