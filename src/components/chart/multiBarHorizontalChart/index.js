import React from "react";
import NVD3Chart from "react-nvd3"; 
import {  AllOptions, AllData } from "../../../chartDefinition"

var datum = AllData.multiBarHorizontalChart;
var options = AllOptions.multiBarHorizontalChart.chart

const multiBarHorizontalChart = props => {
  return (
    <NVD3Chart {...options} datum = {datum} />
  );
};

export default multiBarHorizontalChart
