import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    
    title: {
      display: true,
      text: "Revenue for November 2019",
      position: "bottom",
      color: "#000000",
    },
  },
};

function JobLocation({ x, y }) {
  const labels = y;

  const data = {
    labels,
    datasets: [
      {
        data: x,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#41BF99",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default JobLocation;
