import React, { useState, useEffect } from 'react';
import apiService from 'app/api/service/apiService';
import commonService from 'app/core/service/commonService';
import Map from 'app/common/components/Map';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import SelectField from 'app/common/components/SelectField';
import InputField from 'app/common/components/InputField';
import LineGraph from 'app/common/components/LineGraph';
import { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@material-ui/core';
import { Form, FormikProvider, useFormik } from 'formik';
import { FormValues, CountryInfo } from './types';
import { BsSearch } from 'react-icons/bs';

const Country: React.FC = () => {
  const countryList = useSelector((state: RootState) => state.global.countryList);
  const countryNameList = countryList.map(item => item.country)
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo|null>(countryList.length === 0 ? null : countryList[0]);
  const [selectCountryName, setSelectCountryName] = useState<string>(countryList.length === 0 ? '' : countryList[0].country);
  const formik = useFormik<FormValues>({
    initialValues: {
      selectedCountry: countryList.length === 0 ? '' : countryList[0].country
    },
    onSubmit: (formValues) => {
      const selectCountryInfo = countryList.find(item => item.country === formValues.selectedCountry);
      if (selectCountryInfo) {
        setSelectedCountry(selectCountryInfo);
      }
    }
  });

  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)
  
  const [lastDays, setLastDays] = useState<number>(30);
  const [lineGraphData, setLineGraphData] = useState();
  const option = [30, 60, 120]

  useEffect(() => {
    const selectCountryInfo = countryList.find(item => item.country === selectCountryName);
    if (selectCountryInfo) {
      setSelectedCountry(selectCountryInfo);
    }
  }, [countryList, selectCountryName]);

  useEffect(() => {
    (async () => {
      if(selectedCountry){
        const response = await apiService.getV3Covid19HistoricalCountry(selectedCountry?.country ?? '', lastDays);
        if (response) {
          setLineGraphData(response.timeline);
        }
      }
    })();
  }, [lastDays, selectedCountry]);

  useEffect(() => {
    (async () => {
      setMapCenter({
        lat: selectedCountry?.countryInfo.lat ?? 0,
        lng: selectedCountry?.countryInfo.long ?? 0
      })
      setMapZoom(5);
    })()
  }, [selectedCountry]);

  const handleSelectCountryName = (name: string) => {
    setSelectCountryName(name);
  }

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
                  <div className="d-flex align-items-center">
                    <InputField handleChange={handleCountryChange}  name="selectedCountry" options={countryNameList} />
                    <Button className="ms-3 p-3 button" variant="text" type="submit">Submit</Button>
                  </div>
                </Form>
              </FormikProvider>
            </div>
            <Map center={mapCenter} zoom={mapZoom} onSelect={handleSelectCountryName} />
          </div>
        </div>
        <div className="col-5 p-2">
          <div className="country-card p-4 d-flex flex-column justify-content-around">
              {
                selectedCountry && (
                  <div className="d-flex justify-content-between">
                    <img className="w-50 shadow" src={selectedCountry?.countryInfo.flag} alt={selectedCountry?.country} />
                    <div className="d-flex flex-column justify-content-between fs-5 fw-lighter">
                      <p>Country: {selectedCountry?.country}</p>
                      <p>Continent: {selectedCountry?.continent}</p>
                      <p>Population: {commonService.prettyPrintStat(selectedCountry?.population ?? 0, false)}</p>
                    </div>
                  </div>
                )
              }
              {
                !selectedCountry && (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <BsSearch style={{ width: '60px', height: '60px' }} />
                    <p className="fs-3 mt-5">You haven't selected any countries</p>
                  </div>
                )
              }
            <hr className="rounded" />
            {
              selectedCountry && (
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
                
              )
            }
            {
              selectedCountry && lineGraphData && (
                <LineGraph lineGraphData={lineGraphData} />
              )
            }
            {
              !selectedCountry && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <BsSearch style={{ width: '60px', height: '60px' }} />
                  <p className="fs-3 mt-5">You haven't selected any countries</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country;