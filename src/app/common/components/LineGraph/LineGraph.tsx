import React, { useEffect, useState } from 'react';
import numeral from 'numeral';
import { Line } from 'react-chartjs-2'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Filler, Tooltip } from 'chart.js' 
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { NavigationStateValuesEnum, NavigationColorValuesEnum } from 'app/core/enum';
import { LineGraphProps, ColorTypes } from './types';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Filler, Tooltip);
const LineGraph: React.FC<LineGraphProps> = (props) => {
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  const [lineData, setLineData] = useState({});
  const [color, setColor] = useState<ColorTypes>();

  useEffect(() => {
    (async () => {
      switch (navigation) {
        case (NavigationStateValuesEnum.Cases): {
          const chartData = buildChartData(props.lineGraphData.cases);
          setLineData(chartData);
          setColor({
            main: NavigationColorValuesEnum.Cases,
            background: NavigationColorValuesEnum.CasesBackground
          });
          break;
        }
        case (NavigationStateValuesEnum.Deaths): {
          const chartData = buildChartData(props.lineGraphData.deaths);
          setLineData(chartData);
          setColor({
            main: NavigationColorValuesEnum.Deaths,
            background: NavigationColorValuesEnum.DeathsBackground
          });
          break;
        }
        case (NavigationStateValuesEnum.Recovered): {
          const chartData = buildChartData(props.lineGraphData.recovered);
          setLineData(chartData);
          setColor({
            main: NavigationColorValuesEnum.Recovered,
            background: NavigationColorValuesEnum.RecoveredBackground
          });
          break;
        }
      }
    })();
  }, [navigation, props.lineGraphData]);


  const buildChartData = (data: any) => {
    const chartData = []
    let lastDataPoint
    for (let date in data) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[date] - lastDataPoint,
            }
            chartData.push(newDataPoint)
        }
        lastDataPoint = data[date]
    }
    return chartData
  }

  const options = {   
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Montserrat',
            size: 18,
          }
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Montserrat',
            size: 18,
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false,    
      },
      tooltips: {
        mode: "index",
        intersect: true,
      },
      interaction: {
        mode: "index",
        intersect: true,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
    },
    elements: {
      point: {
          radius: 0,
      },
    }
}
  return (
    <>
      {
        lineData && (
          <Line 
            data={{
              datasets: [
                {
                  fill: true,
                  backgroundColor: color?.background,
                  borderColor: color?.main,
                  data: lineData
                },
              ],
            }}
            options={options}   
          />
        )
      }
    </>
  )
}

export default LineGraph;
