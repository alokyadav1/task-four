import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'];



function JobType() {
    const data = {
        labels,
        datasets: [
          {
            data: [185000,130000,79000,76000,45000, 430000],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#41BF99',
          },
        ],
      };
    return ( 
        <Bar options={options} data={data} />
     );
}

export default JobType;