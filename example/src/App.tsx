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
import React, { useMemo } from "react";
import { Dataset, PChart } from "pchart";
import heightBoys519Y from "./who/height_boys_5-19Y.json";
import heightGirls013W from "./who/height_girls_0-13W.json";
import "./App.css";
import { LMSDataset, Theme } from "pchart/dist/types";
import { patient1, patient2, patient3 } from "./patients";

const percentiles1 = [3, 10, 25, 50, 75, 90, 97];
const percentiles2 = [5, 15, 30, 50, 70, 85, 95];

const theme1: Theme = {
  backdropFill: "#B2EBF2",
  gridColor: "#00ACC1",
};
const theme2: Theme = {
  backdropFill: "#E7CBEB",
  gridColor: "#aa00ff",
};

const App: React.FC = () => {

  const dataset1 = useMemo(() => {
    return new Dataset(heightBoys519Y as LMSDataset, percentiles1);
  }, []);

  const dataset2 = useMemo(() => {
    return new Dataset(heightGirls013W as LMSDataset, percentiles2);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-title">PChart example</h1>
      </div>

      <div className="container">
        <div className="row">
          <PChart
            width={1200}
            height={800}
            dataset={dataset1}
            patients={patient1}
            showtitle
            showlines
            theme={theme1}
          />
        </div>
        <div className="row">
          <PChart
            width={1200}
            height={800}
            dataset={dataset2}
            patients={[patient2, patient3]}
            theme={theme2}
            showtitle
            showlines
            showlabels
          />
        </div>
      </div>
    </div>
  );
};

export default App;
