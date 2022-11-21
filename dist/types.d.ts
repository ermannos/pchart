type oneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type zeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type YYYY = `19${zeroToNine}${zeroToNine}` | `20${zeroToNine}${zeroToNine}`;
type MM = `0${oneToNine}` | `1${0 | 1 | 2}`;
type DD = `${0}${oneToNine}` | `${1 | 2}${zeroToNine}` | `3${0 | 1}`;
type ISODateString = `${YYYY}-${MM}-${DD}`;

export interface Measure {
  date: ISODateString;
  height?: number;
  weight?: number;
  bmi?: number;
  circumference?: number;
}

export interface Patient {
  firstname: string;
  lastname: string;
  sex: 'male' | 'female';
  birthdate: ISODateString;
  measures: Measure[];
  color?: string;
}

export interface Theme {
  backgroundColor?: string;
  backdropFill?: string;
  axisColor?: string;
  gridColor?: string;
  areaColor?: string;
}

// export interface Dataset {
//   title: string;
//   data: {
//     [period: number]: {
//       [percentile: number]: number
//     }
//   };
// }

export interface LMSDataset {
  title: string;
  titleX: string;
  unitX: 'year' | 'month' | 'week';
  titleY: string;
  unitY: string;
  dataType: 'height' | 'weight' | 'bmi' | 'circumference';
  data: number[][];
}