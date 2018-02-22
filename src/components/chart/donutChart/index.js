import React from "react";
import NVD3Chart from "react-nvd3";
import { AllOptions, AllData } from "../../../chartDefinition";

var datum = AllData.donutChart;
var options = AllOptions.donutChart.chart;

const DonutChart = props => {
	return <NVD3Chart {...options} datum={datum} />;
};

export default DonutChart;
