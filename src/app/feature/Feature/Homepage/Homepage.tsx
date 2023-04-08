import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { NavigationStateValuesEnum, NavigationStateTextEnum } from 'app/core/enum';
import { CasesDeathsRecoveredData } from './types';
import Worldwide from './Section/Worldwide';
import Continent from './Section/Continent';
import Country from './Section/Country';

const Homepage: React.FC = () => {
  const worldwide = useSelector((state: RootState) => state.global.worldwide);
  const continentDataList = useSelector((state: RootState) => state.global.continentDataList);
  console.log(useSelector((state: RootState) => state.global));
  const [worldwideSectionData, setWorldwideSectionData] = useState<CasesDeathsRecoveredData[]>([]);
  /** initialize the worldwide data and continent data */
  useEffect(() => {
    (async () => {
      const casesDeathsRecoveredVaccineArray = [];
      if (worldwide) {
        casesDeathsRecoveredVaccineArray.push({
          key: NavigationStateValuesEnum.Cases,
          item: NavigationStateTextEnum.Cases,
          totalNumber: worldwide.cases,
          numberDifference: worldwide.todayCases
        }, {
          key: NavigationStateValuesEnum.Deaths,
          item: NavigationStateTextEnum.Deaths,
          totalNumber: worldwide.deaths,
          numberDifference: worldwide.todayDeaths
        }, {
          key: NavigationStateValuesEnum.Recovered,
          item: NavigationStateTextEnum.Recovered,
          totalNumber: worldwide.recovered,
          numberDifference: worldwide.todayRecovered
        })
        setWorldwideSectionData(casesDeathsRecoveredVaccineArray);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [worldwide]);
  return (
    <div className="homepage-container">
      <Worldwide worldwide={worldwideSectionData}/>
      {
        continentDataList.length && (
          <Continent continent={continentDataList}/>
        )
      }
      <Country />
    </div>
  )
}

export default Homepage;
