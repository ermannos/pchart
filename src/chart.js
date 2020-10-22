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
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import moment from "moment";
import "./style/chart.css";
import Store from "./store";
import Backdrop from "./backdrop";
import XAxis from "./xaxis";
import YAxis from "./yaxis";
import Grid from "./grid";
import Areas from "./areas";
import Percentiles from "./percentiles";
import PatientData from "./patient";
import Tooltip from "./tooltip";
import Touch from "./touch";
import { StoreContext, ThemeContext } from "./context";

class PChart extends Component {
  constructor(props) {
    super(props);
    const { showtitle, width, height } = props;
    this.store = new Store(
      {
        dataset: props.dataset,
        margins: {
          left: 60,
          right: 10,
          top: showtitle ? 50 : 10,
          bottom: 40,
        },
        step: 2,
      },
      this.onUpdate
    );
    this.setSize(width, height);
    this.state = { tooltipX: 0, tooltipY: 0, tooltipVisible: false, tooltipTitle: '', tooltipValue: '' };
  }

  componentDidUpdate(prevprops) {
    const { width, height, dataset } = this.props;
    if (prevprops.width !== width || prevprops.height !== height) {
      this.setSize(width, height);
    }
    if (dataset && prevprops.dataset !== dataset) {
      this.store.setDataset(dataset);
    }
  }

  onUpdate = () => {
    this.forceUpdate();
  };

  setSize = (w, h) => {
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
    this.store.setSize({ width: w, height: h });
  };

  getPointTitle = (patient, measure, ds) => {
    const pointdate = moment(measure.date);
    const birthdate = moment(patient.birthdate);
    let diffunit = ds.getUnitX();
    if (diffunit === "year") {
      diffunit = "month";
    }
    const datediff = pointdate.diff(birthdate, diffunit);

    const title = `${moment(measure.date).format('DD.MM.YYYY')} (${datediff} ${diffunit}s)`;
    return title;
  }

  getPointValue = (patient, measure, ds) => {
    const pointdate = moment(measure.date);
    const birthdate = moment(patient.birthdate);
    let diffunit = ds.getUnitX();
    if (diffunit === "year") {
      diffunit = "month";
    }
    const datediff = pointdate.diff(birthdate, diffunit);
    const val = measure[ds.getDataType()];
    const percentile = ds.getPercentileForValue(datediff, val);

    const value = `${ds.titleY}: ${measure[ds.dataType]} (${percentile}%)`;
    return value;
  }

  render() {
    const {
      dataset,
      patients,
      theme,
      showtitle,
      showlabels,
      showlines,
    } = this.props;
    let title;

    if (showtitle) {
      title = (
        <text
          name="title"
          className="title"
          x={this.store.getSize().width / 2}
          y={15}
          textAnchor="middle"
          alignmentBaseline="text-before-edge"
        >
          {dataset.title}
        </text>
      );
    }
    let pp;
    if (Array.isArray(patients)) {
      pp = patients;
    } else {
      pp = [patients];
    }

    const patientdata = pp.map((patient, i) => (
      <PatientData
        key={`patientdata-${i}`}
        patient={patient}
        showlabels={showlabels}
        showlines={showlines}
      />
    ));

    const ds = this.store.getDataset();

    const touchareas = pp.map((patient, i) => (
      <Touch
        key={`toucharea-${i}`}
        patient={patient}
        showTooltip={(x, y, measure) => {
          console.log("measure", measure, this.store);
          this.setState(
            { tooltipX: x, tooltipY: y, tooltipVisible: true, tooltipTitle: this.getPointTitle(patient, measure, ds), tooltipValue: this.getPointValue(patient, measure, ds)},
            () => {
              clearTimeout(this.tooltipTimeout);
              this.tooltipTimeout = setTimeout(() => {
                this.setState({ tooltipVisible: false });
              }, 5000);
            }
          );
        }}
      />
    ));

    const defaultTheme = {
      backgroundColor: "transparent",
      backdropFill: "#FFFDE7",
      axisColor: "#707070",
      gridColor: "#FFD54F",
      areaColor: "rgba(127,127,127, .3)",
    };

    let _theme;
    if (theme) {
      _theme = { ...defaultTheme, ...theme };
    } else {
      _theme = defaultTheme;
    }

    const { tooltipX, tooltipY, tooltipVisible, tooltipTitle, tooltipValue } = this.state;
    return (
      <StoreContext.Provider value={this.store}>
        <ThemeContext.Provider value={_theme}>
          <svg
            width={this.store.getSize().width}
            height={this.store.getSize().height}
            style={{ backgroundColor: defaultTheme.backgroundColor }}
          >
            {title}
            <Backdrop />
            <XAxis />
            <YAxis />
            <Grid />
            <Areas />
            <Percentiles />
            {patientdata}
            <Tooltip x={tooltipX} y={tooltipY} visible={tooltipVisible} title={tooltipTitle} value={tooltipValue} />
            {touchareas}
          </svg>
        </ThemeContext.Provider>
      </StoreContext.Provider>
    );
  }
}

export default PChart;
