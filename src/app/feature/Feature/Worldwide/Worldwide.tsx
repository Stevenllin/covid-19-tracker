import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import apiService from 'app/api/service/apiService';

const Worldwide: React.FC = () => {
  const countryDataList = useSelector((state: RootState) => state.global.countryDataList);
  console.log('countryDataList', countryDataList);
  useEffect(() => {
    (async () => {
      console.log(await apiService.getV3Covid19CountriesCountry('USA'));
    })();
  }, []);
  return (
    <div>123</div>
  )
}
export default Worldwide;
