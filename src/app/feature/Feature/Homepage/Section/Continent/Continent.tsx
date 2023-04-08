import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { SelectChangeEvent } from '@mui/material/Select';
import SelectField from 'app/common/components/SelectField';
import DoughnutChart from 'app/common/components/DoughnutChart/DoughnutChart';
import BarChart from 'app/common/components/BarChart/BarChart';
import { NavigationStateTextEnum, NavigationStateValuesEnum } from 'app/core/enum';
import { ContinentProps, BarChartData, CountriesRanking } from './types';
import { GetV3Covid19ContinentsResp } from 'app/api/model/get/getV3Covid19Continents';

const Continent: React.FC<ContinentProps> = (props) => {
  const continent = useSelector((state: RootState) => state.global.continentList);
  const worldwide = useSelector((state: RootState) => state.global.worldwide);
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  const countryDataList = useSelector((state: RootState) => state.global.countryDataList);
  const [selectedContinent, setSelectedContinent] = useState<string>(continent[0]);
  const [selectedContinentData, setSelectedContinentData] = useState<GetV3Covid19ContinentsResp>();
  const [countriesRanking, setCountriesRanking] = useState<CountriesRanking[]>([]);
  const [barChart, setBarChart] = useState<BarChartData>();

  console.log('continent', continent);

  useEffect(() => {
    (async () => {
      /** casesPerOneMillion / deathsPerOneMillion / recoveredPerOneMillion / countriesRanking */
      switch (navigation) {
        case (NavigationStateValuesEnum.Cases): {
          setBarChart({
            type: 'casesPerOneMillion',
            data: props.continent.map(item => item.casesPerOneMillion)
          })
          const countriesRankingData = countryDataList.filter(item => item.continent === selectedContinent).map(item => {
            return { name: item.country, data: item.cases }
          })
          setCountriesRanking(countriesRankingData.sort((a, b) => b.data - a.data));
          break;
        }
        case (NavigationStateValuesEnum.Deaths): {
          setBarChart({
            type: 'deathsPerOneMillion',
            data: props.continent.map(item => item.deathsPerOneMillion)
          })
          const countriesRankingData = countryDataList.filter(item => item.continent === selectedContinent).map(item => {
            return { name: item.country, data: item.deaths }
          })
          setCountriesRanking(countriesRankingData.sort((a, b) => b.data - a.data));
          break;
        }
        case (NavigationStateValuesEnum.Recovered): {
          setBarChart({
            type: 'recoveredPerOneMillion',
            data: props.continent.map(item => item.recoveredPerOneMillion)
          })
          const countriesRankingData = countryDataList.filter(item => item.continent === selectedContinent).map(item => {
            return { name: item.country, data: item.recovered }
          })
          setCountriesRanking(countriesRankingData.sort((a, b) => b.data - a.data));
          break;
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const selected = props.continent.filter(item => item.continent === selectedContinent)[0];
      setSelectedContinentData(selected);

      /** countriesRanking */
      const countriesRankingData = countryDataList.filter(item => item.continent === selectedContinent).map(item => {
        if (navigation === NavigationStateValuesEnum.Cases) {
          return { name: item.country, data: item.cases }
        } else if (navigation === NavigationStateValuesEnum.Deaths) {
          return { name: item.country, data: item.deaths }
        } else {
          return { name: item.country, data: item.recovered }
        }
      })
      
      setCountriesRanking(countriesRankingData.sort((a, b) => b.data - a.data));
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedContinent]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedContinent(event.target.value);
  }

  return (
    <div id="continent" className="continent-container my-2">
      <div className="row mx-1">
        <div className="col-3 p-2">
          <div className="continent-card p-4">
            <div className="d-flex justify-content-end">
              <SelectField
                name="Continent"
                label="continent-select"
                value={selectedContinent}
                option={continent}
                handleChange={handleChange}
              />
            </div>
            {
              selectedContinentData && worldwide && navigation === NavigationStateValuesEnum.Cases && (
                <DoughnutChart
                  text={NavigationStateTextEnum.Cases}
                  value={selectedContinentData.cases/worldwide.cases}
                />
              )
            }
            {
              selectedContinentData && worldwide && navigation === NavigationStateValuesEnum.Deaths && (
                <DoughnutChart
                  text={NavigationStateTextEnum.Deaths}
                  value={selectedContinentData.deaths/worldwide.deaths}
                />
              )
            }
            {
              selectedContinentData && worldwide && navigation === NavigationStateValuesEnum.Recovered && (
                <DoughnutChart
                  text={NavigationStateTextEnum.Recovered}
                  value={selectedContinentData.recovered/worldwide.recovered}
                />
              )
            }
          </div>
        </div>
        <div className="col-6 p-2">
          <div className="continent-card p-4">
            {
              barChart && (
                <BarChart
                  name={barChart.type}
                  labels={continent}
                  data={barChart.data}
                />
              )
            }
          </div>
        </div>
        <div className="col-3 p-2">
          <div className="continent-card p-4">
            <div className="table">
              {
                navigation === NavigationStateValuesEnum.Cases && countriesRanking.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between table-item-cases">
                    <p className="fs-5">{index+1} {item.name}</p>
                    <p className="fs-5">{<strong>{item.data}</strong>}</p>
                  </div>
                ))
              }
              {
                navigation === NavigationStateValuesEnum.Deaths && countriesRanking.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between table-item-deaths">
                    <p className="fs-5">{index+1} {item.name}</p>
                    <p className="fs-5">{<strong>{item.data}</strong>}</p>
                  </div>
                ))
              }
              {
                navigation === NavigationStateValuesEnum.Recovered && countriesRanking.map((item, index) => (
                  <div key={index} className="d-flex justify-content-between table-item-recovered">
                    <p className="fs-5">{index+1} {item.name}</p>
                    <p className="fs-5">{<strong>{item.data}</strong>}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Continent;