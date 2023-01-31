import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import apiService from 'app/api/service/apiService';
import { GetV3Covid19ContinentsResp } from 'app/api/model/get/getV3Covid19Continents';
import { CasesDeathsRecoveredData } from './types';
import Worldwide from './Section/Worldwide';
import Continent from './Section/Continent';
import Country from './Section/Country';

const Homepage: React.FC = () => {
  const worldwide = useSelector((state: RootState) => state.global.worldwide);
  const [worldwideSectionData, setWorldwideSectionData] = useState<CasesDeathsRecoveredData[]>([]);
  const [continentSectionData, setContinentSectionData] = useState<GetV3Covid19ContinentsResp[]>([]);
  /** initialize the worldwide data and continent data */
  useEffect(() => {
    (async () => {
      const [continentsResponse] = await Promise.all([
        apiService.getV3Covid19Continents()
      ])
      if (continentsResponse) {
        setContinentSectionData(continentsResponse);
      }
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
    })();
  }, []);
  return (
    <div className="homepage-container">
      <Worldwide worldwide={worldwideSectionData}/>
      {
        continentSectionData.length && (
          <Continent continent={continentSectionData}/>
        )
      }
      <Country />
    </div>
  )
}

export default Homepage;
