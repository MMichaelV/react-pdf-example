import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
    // let chart = am4core.create("chartdiv", am4charts.XYChart);
    let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

    chart.paddingRight = 20;

    // let data = [];
    // let visits = 10;
    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    // }
    //
    // chart.data = data;
    //
    // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    // dateAxis.renderer.grid.template.location = 0;
    //
    // let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    // let series = chart.series.push(new am4charts.LineSeries());
    // series.dataFields.dateX = "date";
    // series.dataFields.valueY = "value";

    // series.tooltipText = "{valueY.value}";
    // chart.cursor = new am4charts.XYCursor();
    //
    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
    series.data = [{
      "name": "First",
      "children": [{
        "name": "A1", "value": 100
      }, {
        "name": "A2", "value": 60
      }, {
        "name": "A3", "value": 30
      }]
    }, {
      "name": "Second",
      "children": [{
        "name": "B1", "value": 135
      }, {
        "name": "B2", "value": 98
      }, {
        "name": "B3", "value": 56
      }]
    }, {
      "name": "Third",
      "children": [{
        "name": "C1", "value": 335
      }, {
        "name": "C2", "value": 148
      }, {
        "name": "C3", "value": 126
      }, {
        "name": "C4", "value": 26
      }]
    }, {
      "name": "Fourth",
      "children": [{
        "name": "D1", "value": 415
      }, {
        "name": "D2", "value": 148
      }, {
        "name": "D3", "value": 89
      }, {
        "name": "D4", "value": 64
      }, {
        "name": "D5", "value": 16
      }]
    }, {
      "name": "Fifth",
      "children": [{
        "name": "E1", "value": 687
      }, {
        "name": "E2", "value": 148
      }]
    }];

    // Set up data fields
    series.dataFields.value = "value";
    series.dataFields.name = "name";
    series.dataFields.children = "children";

    // Add labels
    series.nodes.template.label.text = "{name}";
    series.fontSize = 10;
    series.minRadius = 15;
    series.maxRadius = 40;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
