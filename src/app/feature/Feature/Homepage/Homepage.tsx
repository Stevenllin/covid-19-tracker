import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import apiService from 'app/api/service/apiService';
import { CasesDeathsRecoveredData } from './types';
import Worldwide from './Section/Worldwide';
import Continent from './Section/Continent';

const Homepage: React.FC = () => {
  const worldwide = useSelector((state: RootState) => state.global.worldwide);
  const navigationState = useSelector((state: RootState) => state.global.navigationState);
  const [worldwideSectionData, setWorldwideSectionData] = useState<CasesDeathsRecoveredData[]>();
  console.log('navigationState', navigationState);
  /** initialize the worldwide data */
  useEffect(() => {
    (async () => {
      const [continentsResponse] = await Promise.all([
        apiService.getV3Covid19Continents()
      ])
      const casesDeathsRecoveredVaccineArray = [];
      if (worldwide) {
        casesDeathsRecoveredVaccineArray.push({
          item: 'Cases',
          totalNumber: worldwide.cases,
          numberDifference: worldwide.todayCases
        }, {
          item: 'Deaths',
          totalNumber: worldwide.deaths,
          numberDifference: worldwide.todayDeaths
        }, {
          item: 'Recovered',
          totalNumber: worldwide.recovered,
          numberDifference: worldwide.todayRecovered
        })
        setWorldwideSectionData(casesDeathsRecoveredVaccineArray);
      }
      console.log('continentsResponse', continentsResponse);
    })();
  }, []);
  return (
    <div className="homepage-container">
      <Worldwide worldwide={worldwideSectionData}/>
      <Continent />
    </div>
  )
}

export default Homepage;
