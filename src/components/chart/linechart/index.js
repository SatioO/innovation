import React from "react";
import NVD3Chart from "react-nvd3";
import { AllOptions, AllData } from "../../../chartDefinition";

var datum = AllData.lineChart;
var options = AllOptions.lineChart.chart;

const LineChart = props => {
	return <NVD3Chart {...options} datum={datum} />;
};

export default LineChart;
