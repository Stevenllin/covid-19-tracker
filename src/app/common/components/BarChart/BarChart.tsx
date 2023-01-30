import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { NavigationStateValuesEnum, NavigationColorValuesEnum } from 'app/core/enum';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarProps } from './types';

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
      display: true,
      labels: {
        font: {
          family: 'Montserrat',
          size: 20
        }
      }
    },
    tooltip: {
      titleFont: {
        size: 20
      },
      bodyFont: {
        size: 20
      },
      padding: 20
    }
  },
};

const BarChart: React.FC<BarProps> = (props) => {
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  const [color, setColor] = useState<string>();

  useEffect(() => {
    (async () => {
      switch (navigation) {
        case (NavigationStateValuesEnum.Cases): {
          setColor(NavigationColorValuesEnum.Cases);
          break;
        }
        case (NavigationStateValuesEnum.Deaths): {
          setColor(NavigationColorValuesEnum.Deaths);
          break;
        }
        case (NavigationStateValuesEnum.Recovered): {
          setColor(NavigationColorValuesEnum.Recovered);
          break;
        }
      }
    })();
  }, [navigation])
  const labels = props.labels;

  const data = {
    labels,
    datasets: [
      {
        label: props.name,
        data: props.data,
        barThickness: 50,
        borderRadius: 10,
        backgroundColor: color,
      }
    ],
  };

  return (
    <div className="bar-container">
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart;