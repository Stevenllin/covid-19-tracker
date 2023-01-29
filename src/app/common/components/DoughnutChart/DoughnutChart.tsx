import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { NavigationStateValuesEnum, NavigationColorValuesEnum } from 'app/core/enum';
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { DoughnutProps } from './types';

Chart.register(ArcElement);
const DoughnutChart: React.FC<DoughnutProps> = (props) => {
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  const rest = 100 - Math.floor((props.value) * 100);
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

  const data = {
    datasets: [
      {
        data: [Math.floor((props.value) * 100), rest],
        backgroundColor: [
          color,
          "#FFFFFF"
        ],
        borderRadius: 50,
        borderWidth: [0, 0, 0, 0],
        display: true,
        cutout: '80%'
      }
    ]
  };
  return (
    <div className="doughnut-container">
      <div className="d-flex justify-content-center">
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                enabled: false
              }
            },
            responsive: true
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "51%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
          }}
        >
          <p className="fs-3">{Math.floor((props.value) * 100)}%</p>
        </div>
      </div>
      <p className="text-center fs-5 mt-4">{props.text}</p>
    </div>
  )
}

export default DoughnutChart;