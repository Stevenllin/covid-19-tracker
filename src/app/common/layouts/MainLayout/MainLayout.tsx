import React, { useEffect } from 'react';
import MainContent from '../MainContent';
import Navigation from '../Navigation';
import { useDispatch } from 'react-redux';
import { initFetchGlobalDataAction } from 'app/store/global/action';
import AsyncSpinner from 'app/common/components/Spinner/AsyncSpinner';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import store from 'app/store';
import { setAsyncSpinnerVisibleAction } from 'app/store/spinner/action';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();
  const global = useSelector((state: RootState) => state.global);
  console.log('global', global);

  /**
   * @description get the global data 
   */
  useEffect(() => {
    reduxDispatch(initFetchGlobalDataAction());
  }, [reduxDispatch]);
  return (
    <>
      <div className="d-flex h-100">
        <Navigation />
        <MainContent>
          {props.children}
        </MainContent>
        <AsyncSpinner />
      </div>
    </>
  )
}
export default MainLayout;
