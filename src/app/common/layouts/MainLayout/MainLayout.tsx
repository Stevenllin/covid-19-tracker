import React, { useEffect } from 'react';
import Navigation from '../Navigation';
import MainContent from '../MainContent';
import { useDispatch } from 'react-redux';
import { initFetchGlobalDataAction } from 'app/store/global/action';

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
      </div>
    </>
  )
}
export default MainLayout;
