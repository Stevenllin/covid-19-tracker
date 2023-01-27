import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import apiService from 'app/api/service/apiService';
import { CasesDeathsRecoveredData } from './types';
import Worldwide from './Section/Worldwide';

const Homepage: React.FC = () => {
  const countryDataList = useSelector((state: RootState) => state.global.countryDataList);
  const [worldwideData, setWorldwideData] = useState<CasesDeathsRecoveredData[]>();
  // console.log('countryDataList', countryDataList);
  /** initialize the worldwide data */
  useEffect(() => {
    (async () => {
      const [worldwideResponse] = await Promise.all([
        apiService.getV3Covid19All()
      ])
      const casesDeathsRecoveredVaccineArray = [];
      casesDeathsRecoveredVaccineArray.push({
        item: 'Cases',
        totalNumber: worldwideResponse.cases,
        numberDifference: worldwideResponse.todayCases
      }, {
        item: 'Deaths',
        totalNumber: worldwideResponse.deaths,
        numberDifference: worldwideResponse.todayDeaths
      }, {
        item: 'Recovered',
        totalNumber: worldwideResponse.recovered,
        numberDifference: worldwideResponse.todayRecovered
      })
      if (worldwideResponse) {
        setWorldwideData(casesDeathsRecoveredVaccineArray);
      }
    })();
  }, []);
  return (
    <div className="homepage-container">
      <Worldwide worldwide={worldwideData}/>
    </div>
  )
}

export default Homepage;
