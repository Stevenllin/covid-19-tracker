import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { SelectChangeEvent } from '@mui/material/Select';
import SelectField from 'app/common/components/SelectField';
import { ContinentProps } from './types';
import { GetV3Covid19ContinentsResp } from 'app/api/model/get/getV3Covid19Continents';

const Continent: React.FC<ContinentProps> = (props) => {
  const continent = useSelector((state: RootState) => state.global.continentList);
  const [selectedContinent, setSelectedContinent] = useState<string>(continent[0]);
  const [selectedContinentData, setSelectedContinentData] = useState<GetV3Covid19ContinentsResp>();
  useEffect(() => {
    (async () => {
      const selected = props.continent.filter(item => item.continent === selectedContinent)[0];
      console.log('selected', selected);
    })();
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
          </div>
        </div>
        <div className="col-6 p-2">
          <div className="continent-card">
            1
          </div>
        </div>
        <div className="col-3 p-2">
          <div className="continent-card">
            1
          </div>
        </div>
      </div>
    </div>
  )
}
export default Continent;