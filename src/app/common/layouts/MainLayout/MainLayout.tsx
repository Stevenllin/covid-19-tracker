import React, { useEffect } from 'react';
import MainContent from '../MainContent';
import Navigation from '../Navigation';
import { useDispatch } from 'react-redux';
import { initFetchGlobalDataAction } from 'app/store/global/action';
import AsyncSpinner from 'app/common/components/Spinner/AsyncSpinner';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();

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
