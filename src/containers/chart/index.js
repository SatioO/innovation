import React from "react";
import {BoxPlotChart, MultiBarChart, DonutChart, MultiBarHorizontalChart, PieChart, DiscreteBarChart, LineChart} from "../../components";
export const Chart = () => {
	return (
		<div id="page-wrapper">
		  <div className="row">
		    <div className="col-lg-12">
		      <h1 className="page-header">Charts</h1>
		    </div>
		  </div>

		  <div className="row">
		    <div className="col-lg-12">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Line Chart
		        </div>

		        <div className="panel-body">
		        	<LineChart/>
		        </div>
		      </div>
		    </div>
		    <div className="col-lg-6">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Discrete Bar Chart
		        </div>
		        <div className="panel-body">
		           <DiscreteBarChart/>
		        </div>
		      </div>
		    </div>
		    <div className="col-lg-6">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Pie Chart
		        </div>
		        <div className="panel-body">
		           	<PieChart/>
		        </div>
		      </div>
		    </div>
		    <div className="col-lg-6">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Multi Bar horizontal Chart
		        </div>
		        <div className="panel-body">
		          <MultiBarHorizontalChart/>
		        </div>
		      </div>
		    </div>
		    <div className="col-lg-6">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Donut Chart
		        </div>
		        <div className="panel-body">
		          <DonutChart/>
		        </div>
		      </div>
		    </div>
		    <div className="col-lg-12">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Multi Bar Chart
		        </div>
		        <div className="panel-body">
		          <MultiBarChart/>
		        </div>
		      </div>
		    </div>
		    <div className="col-lg-12">
		      <div className="panel panel-default">
		        <div className="panel-heading">
		          Box Plot Chart
		        </div>
		        <div className="panel-body">
		          <BoxPlotChart/>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

	);
};
