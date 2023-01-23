import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import apiService from 'app/api/service/apiService';

const Worldwide: React.FC = () => {
  const worldwideList = useSelector((state: RootState) => state.global.worldwide);
  console.log('worldwideList', worldwideList);
  useEffect(() => {
    (async () => {
      console.log(await apiService.getV3Covid19All());
    })();
  }, []);
  return (
    <div>123</div>
  )
}
export default Worldwide;
