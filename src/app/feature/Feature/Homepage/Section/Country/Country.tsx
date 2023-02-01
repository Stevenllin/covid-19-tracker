import React, { useRef, useState, useEffect } from 'react';
import Map from 'app/common/components/Map';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import SelectField from 'app/common/components/SelectField';
import InputField from 'app/common/components/InputField';
import LineGraph from 'app/common/components/LineGraph';
import apiService from 'app/api/service/apiService';
import { SelectChangeEvent } from '@mui/material/Select';

const Country: React.FC = () => {
  const countryList = useSelector((state: RootState) => state.global.countryList);
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  const selectedCountry = useRef<string>('');
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)
  const [lastDays, setLastDays] = useState<number>(30);
  const [lineGraphData, setLineGraphData] = useState();
  const option = [30, 60, 120]

  useEffect(() => {
    (async () => {
      const response = await apiService.getV3Covid19HistoricalCountry('USA', lastDays);
      if (response) {
        setLineGraphData(response.timeline);
      }
    })();
  }, [lastDays]);

  const handleChange = (event: SelectChangeEvent) => {
    setLastDays(parseInt(event.target.value));
  }
  return (
    <div id="country" className="country-container my-2">
      <div className="row mx-1">
        <div className="col-7 p-2">
          <div className="country-card p-4">
            <div className="mb-4 d-flex justify-content-end">
              {/* <InputField value={selectedCountry} options={countryList} /> */}
            </div>
            <Map center={mapCenter} zoom={mapZoom} />
          </div>
        </div>
        <div className="col-5 p-2">
          <div className="country-card p-4">
            <div className="d-flex justify-content-end">
              <SelectField
                name="Lastdays"
                label="lastdays-select"
                value={lastDays}
                option={option}
                handleChange={handleChange}
              />
            </div>
            {
              lineGraphData && (
                <LineGraph lineGraphData={lineGraphData} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country;