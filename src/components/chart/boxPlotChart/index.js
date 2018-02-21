import React from "react";
import NVD3Chart from "react-nvd3"; 
import { ChartTypes , AllOptions, AllData } from "../../../chartDefinition"

var datum = AllData.boxPlotChart;
var options = AllOptions.boxPlotChart.chart

const BoxPlotChart = props => {
  return (
    <NVD3Chart {...options} datum = {datum} />
  );
};

export default BoxPlotChart
