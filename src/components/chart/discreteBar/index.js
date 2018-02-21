import React from "react";
import NVD3Chart from "react-nvd3"; 
import { ChartTypes , AllOptions, AllData } from "../../../chartDefinition"

var datum = AllData.discreteBarChart;
var options = AllOptions.discreteBarChart.chart

const DiscreteBarChart = props => {
  return (
    <NVD3Chart {...options} datum = {datum} />
  );
};

export default DiscreteBarChart
