import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import apiService from 'app/api/service/apiService';
import DoughnutChart from 'app/common/components/DoughnutChart/DoughnutChart';
import { GetV3Covid19AllResp } from 'app/api/model/get/getV3Covid19All';
import { CasesDeathsRecoveredVaccineData } from './types';

const Worldwide: React.FC = () => {
  // const countryDataList = useSelector((state: RootState) => state.global.countryDataList);
  const [worldwideData, setWorldwideData] = useState<GetV3Covid19AllResp>();
  const [casesDeathsRecoveredVaccine, setCasesDeathsRecoveredVaccine] = useState<CasesDeathsRecoveredVaccineData[]>([]);
  console.log('worldwideData', worldwideData);
  /** initialize the worldwide data */
  useEffect(() => {
    (async () => {
      const [worldwideResponse, vaccineResponse] = await Promise.all([
        apiService.getV3Covid19All(),
        apiService.getV3Covid19VaccineCoverage(2)
      ])
      const vaccineArray: number[] = Object.values(vaccineResponse);
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
      }, {
        item: 'Vaccine',
        totalNumber: vaccineArray[1],
        numberDifference: vaccineArray[1] - vaccineArray[0]
      })
      if (worldwideResponse) {
        setWorldwideData(worldwideResponse);
        setCasesDeathsRecoveredVaccine(casesDeathsRecoveredVaccineArray);
      }
    })();
  }, []);
  return (
    <>
      {/** cases/deaths/recovered/vaccine */}
      <div className="d-flex justify-content-between">
        {
          casesDeathsRecoveredVaccine.map((item, index) => (
            <div key={index} className="worldwide-card mx-2 d-flex flex-column justify-content-between">
              <p className="fs-4">{item.item}</p>
              <p className="fs-1">+ {item.numberDifference}</p>
              <p className="fs-4">{item.totalNumber} Total</p>
            </div>
          ))
        }
      </div>
      {
        worldwideData && (
          <div className="row mt-4">
            <div className="col-3">
              <div className="worldwide-card">
                <DoughnutChart
                  text="infected country"
                  value={worldwideData.affectedCountries/233}
                />
                <DoughnutChart
                  text="infected population"
                  value={worldwideData.cases/worldwideData.population}
                />
              </div>
            </div>
            <div className="col-9">
              2
            </div>
          </div>
        )
      }
    </>
  )
}
export default Worldwide;
