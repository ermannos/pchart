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
import React, { useMemo, useState } from "react";
import Areas from "./chart/Areas";
import Backdrop from "./chart/Backdrop";
import Grid from "./chart/Grid";
import PatientData from "./chart/PatientData";
import Percentiles from "./chart/Percentiles";
import Tooltip from "./chart/Tooltip";
import TouchAreas from "./chart/Touch";
import XAxis from "./chart/XAxis";
import YAxis from "./chart/YAxis";
import { StoreProvider } from "./context/StoreContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import Dataset from "./data/Dataset";
import Store from "./store/Store";
import { Patient, Theme } from "./types";
import "./style.css";

interface Props {
  width?: number;
  height?: number;
  dataset: Dataset;
  patients: Patient | Patient[];
  theme?: Theme;
  showtitle?: boolean;
  showlabels?: boolean;
  showlines?: boolean;
}

const defaultTheme = {
  backgroundColor: "transparent",
  backdropFill: "#FFFDE7",
  axisColor: "#707070",
  gridColor: "#FFD54F",
  areaColor: "rgba(127,127,127, .3)",
};

const PChart: React.FC<Props> = ({
  width = 800,
  height = 800,
  dataset,
  patients,
  theme = defaultTheme,
  showtitle = true,
  showlabels = true,
  showlines = true,
}) => {
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState("");
  const [tooltipValue, setTooltipValue] = useState("");
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout>();

  const store = useMemo(() => {
    const newstore = new Store(
      {
        dataset,
        margins: {
          left: 60,
          right: 10,
          top: showtitle ? 50 : 10,
          bottom: 40,
        },
        step: 2,
      },
      () => {}
    );

    let w = width;
    let h = height;
    if (Number.isNaN(w)) {
      // eslint-disable-next-line no-param-reassign
      w = 800;
      console.error(
        "Error: width property must be a number. Using the default value"
      );
    }
    if (Number.isNaN(h)) {
      // eslint-disable-next-line no-param-reassign
      h = 800;
      console.error(
        "Error: height property must be a number. Using the default value"
      );
    }
    newstore.setSize({ width: w, height: h });
    return newstore;
  }, [dataset, width, height, showtitle]);

  const currentTheme = useMemo(() => {
    if (theme) {
      return { ...defaultTheme, ...theme };
    }
    return defaultTheme;
  }, [theme]);

  const title = useMemo(() => {
    if (showtitle && store) {
      return (
        <text
          name="title"
          className="title"
          x={store.getSize().width / 2}
          y={15}
          textAnchor="middle"
          alignmentBaseline="text-before-edge"
        >
          {dataset.title}
        </text>
      );
    }
    return null;
  }, [dataset, store, showtitle]);

  const patientdata = useMemo(() => {
    let pp;
    if (Array.isArray(patients)) {
      pp = patients;
    } else {
      pp = [patients];
    }

    return pp.map((patient, i) => (
      <PatientData
        key={`patientdata-${i}`}
        patient={patient}
        showlabels={showlabels}
        showlines={showlines}
      />
    ));
  }, [patients, showlabels, showlines]);

  const touchareas = useMemo(() => {
    let pp;
    if (Array.isArray(patients)) {
      pp = patients;
    } else {
      pp = [patients];
    }
    return pp.map((patient, i) => (
      <TouchAreas
        key={`toucharea-${i}`}
        patient={patient}
        showTooltip={(x, y, ttle, value) => {
          setTooltipX(x);
          setTooltipY(y);
          setTooltipVisible(true);
          setTooltipTitle(ttle);
          setTooltipValue(value);
          clearTimeout(tooltipTimeout);
          setTooltipTimeout(
            setTimeout(() => {
              setTooltipVisible(false);
            }, 5000)
          );
        }}
      />
    ));
  }, [patients, tooltipTimeout]);

  return store ? (
    <StoreProvider value={store}>
      <ThemeProvider value={currentTheme}>
        <svg
          width={store.getSize().width}
          height={store.getSize().height}
          style={{ backgroundColor: currentTheme.backgroundColor }}
        >
          {title}
          <Backdrop />
          <XAxis />
          <YAxis />
          <Grid />
          <Areas />
          <Percentiles />
          {patientdata}
          <Tooltip
            x={tooltipX}
            y={tooltipY}
            visible={tooltipVisible}
            title={tooltipTitle}
            value={tooltipValue}
          />
          {touchareas}
        </svg>
      </ThemeProvider>
    </StoreProvider>
  ) : null;
};

export default PChart;
