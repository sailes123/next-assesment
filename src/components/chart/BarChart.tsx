"use client";
import { ApexOptions } from "apexcharts";
import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

const author = [
  "author1",
  "author2",
  "author3",
  "author4",
  "author5",
  "author6",
];

const BarChart: React.FC<any> = () => {

   const data = [20, 34, 10, 45, 22, 30]    

  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      width: "100%",
      toolbar:{
        show: false
      }
    },
    xaxis: {
      categories: author,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return `${value}`;
        },
      },
    },
    legend: {
      show: false, // Set this to false to hide the legend markers
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    colors: [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#546E7A",
      "#26a69a",
    ],

  };

  const chartSeries = [
    {
      name: "Number",
      data: data,
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
