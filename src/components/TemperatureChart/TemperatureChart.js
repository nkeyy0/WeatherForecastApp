import React, { Component } from "react";
import Chart from "chart.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCitiesWeatherFromDB, setDataToCharts } from "../../actions";

const TemperatureChart = ({ cities, email }) => {
  const chartRef = React.useRef();
  const dispatch = useDispatch();
  useEffect(() => {
      console.log(email);
       dispatch(loadCitiesWeatherFromDB('komkovnk7@gmail.com'))
    const timeData = cities.map((value) => {
        return new Date(value.timeRequest).toDateString();
      });
      const temperatureData = cities.map((value) => {
        return value.temperature;
      });
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: timeData,
        datasets: [
          {
            backgroundColor: 'red', 
            borderColor: 'black',
            label: "Temperature",
            data: temperatureData,
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }, []);

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default TemperatureChart;
