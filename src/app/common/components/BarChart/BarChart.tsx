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
  scales: {
    x: {
      ticks: {
        font: {
          family: 'Montserrat',
          size: 20,
        }
      }
    },
    y: {
      ticks: {
        font: {
          family: 'Montserrat',
          size: 20,
        }
      }
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
};

const labels = ['casesPerOneMillion', 'criticalPerOneMillion', 'deathsPerOneMillion', 'recoveredPerOneMillion', 'activePerOneMillion'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [86434, 5.57, 865.9, 81285.99, 2664.67],
      barThickness: 50,
      borderRadius: 10,
      backgroundColor: '#6770C0',
    }
  ],
};

const BarChart: React.FC = () => {
  return (
    <div className="bar-container">
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart;