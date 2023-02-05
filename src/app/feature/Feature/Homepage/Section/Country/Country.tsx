import React, { useState, useEffect } from 'react';
import Map from 'app/common/components/Map';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import SelectField from 'app/common/components/SelectField';
import InputField from 'app/common/components/InputField';
import LineGraph from 'app/common/components/LineGraph';
import apiService from 'app/api/service/apiService';
import { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import { FormValues } from './types';

const Country: React.FC = () => {
  const countryList = useSelector((state: RootState) => state.global.countryList);
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  const [selectedCountry, setSelectedCountry] = useState<string>('USA');

  const formik = useFormik<FormValues>({
    initialValues: {
      selectedCountry: ''
    },
    onSubmit: (formValues) => {
      setSelectedCountry(formValues.selectedCountry);
    }
  });

  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)
  
  const [lastDays, setLastDays] = useState<number>(30);
  const [lineGraphData, setLineGraphData] = useState();
  const option = [30, 60, 120]

  useEffect(() => {
    (async () => {
      const response = await apiService.getV3Covid19HistoricalCountry(selectedCountry, lastDays);
      if (response) {
        setLineGraphData(response.timeline);
      }
    })();
  }, [lastDays, selectedCountry]);

  const handleChange = (event: SelectChangeEvent) => {
    setLastDays(parseInt(event.target.value));
  }

  const handleCountryChange = (value: string|null) => {
    formik.setFieldValue('selectedCountry', value);
  }
  return (
    <div id="country" className="country-container my-2">
      <div className="row mx-1">
        <div className="col-7 p-2">
          <div className="country-card p-4">
            <div className="mb-4 d-flex justify-content-end">
              <FormikProvider value={formik}>
                <Form>
                  <div className="d-flex">
                    <InputField handleChange={handleCountryChange}  name="selectedCountry" options={countryList} />
                    <Button variant="text" type="submit">Text</Button>
                  </div>
                </Form>
              </FormikProvider>
            </div>
            <Map center={mapCenter} zoom={mapZoom} />
          </div>
        </div>
        <div className="col-5 p-2">
          <div className="country-card p-4">
            <div className="d-flex justify-content-end">
              <div className="w-60 d-flex justify-content-end">
                <SelectField
                  name="Lastdays"
                  label="lastdays-select"
                  value={lastDays}
                  option={option}
                  handleChange={handleChange}
                />
              </div>
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