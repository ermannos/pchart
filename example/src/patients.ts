import { Patient } from "../../dist/types";

export const patient1: Patient = {
  firstname: "John",
  lastname: "Doe",
  sex: "male",
  birthdate: "2002-04-27",
  measures: [
    {
      date: "2018-09-11",
      height: 181.5,
      weight: 60, // useless data
    },
    {
      date: "2018-08-18",
      height: 181,
    },
    {
      date: "2018-08-17",
      weight: 59, // useless data
    },
    {
      date: "2018-05-18",
      height: 180,
    },
    {
      date: "2017-08-02",
      height: 176,
    },
    {
      date: "2017-01-28",
      height: 173,
    },
    {
      date: "2016-10-08",
      height: 170,
    },
    {
      date: "2016-03-16",
      height: 165,
    },
    {
      date: "2015-09-26",
      height: 160,
    },
    {
      date: "2005-09-26",
      height: 105,
    },
  ],
};

export const patient2: Patient = {
  firstname: "Jane",
  lastname: "Doe",
  sex: "female",
  birthdate: "2018-01-14",
  measures: [
    {
      date: "2018-01-14",
      height: 52
    },
    {
      date: "2018-01-23",
      height: 52,
    },
    {
      date: "2018-01-31",
      height: 54,
    },
    {
      date: "2018-02-17",
      height: 57,
    },
    {
      date: "2018-02-26",
      height: 58.9,
    },
    {
      date: "2018-03-04",
      height: 60,
    },
  ],
};

export const patient3: Patient = {
  firstname: "Jane",
  lastname: "Doe",
  sex: "female",
  birthdate: "2018-01-14",
  color: 'green',
  measures: [
    {
      date: "2018-01-14",
      height: 52
    },
    {
      date: "2018-01-23",
      height: 51,
    },
    {
      date: "2018-01-31",
      height: 52,
    },
    {
      date: "2018-02-17",
      height: 53,
    },
    {
      date: "2018-02-26",
      height: 54,
    },
    {
      date: "2018-03-04",
      height: 56,
    },
  ],
};
