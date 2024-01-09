import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Pie2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart type to the core FusionCharts module
ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

// Sample data for the pie chart
const chartData = [
  {
    label: 'Category 1',
    value: '12',
  },
  {
    label: 'Category 2',
    value: '18',
  },
  {
    label: 'Category 3',
    value: '24',
  },
  {
    label: 'Category 4',
    value: '20',
  },
];

// Chart configuration
const chartConfig = {
  type: 'pie2d', // Chart type
  width: '400', // Width of the chart
  height: '300', // Height of the chart
  dataFormat: 'json', // Data format
  dataSource: {
    chart: {
      caption: 'Sample Pie Chart',
      theme: 'fusion',
    },
    data: chartData,
  },
};

// Functional component for the pie chart
const PieChart = () => <ReactFC {...chartConfig} />;

export default PieChart;
