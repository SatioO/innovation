import React from "react";
import NVD3Chart from "react-nvd3";
import { AllOptions, AllData } from "../../../chartDefinition";

var datum = AllData.multiBarChart;
var options = AllOptions.multiBarChart.chart;

const MultiBarChart = props => {
	return <NVD3Chart {...options} datum={datum} />;
};

export default MultiBarChart;
