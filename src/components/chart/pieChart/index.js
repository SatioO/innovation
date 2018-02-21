import React from "react";
import NVD3Chart from "react-nvd3"; 
import { ChartTypes , AllOptions, AllData } from "../../../chartDefinition"

var datum = AllData.pieChart;
var options = AllOptions.pieChart.chart

const PieChart = props => {
  return (
    <NVD3Chart {...options} datum = {datum} />
  );
};

export default PieChart
