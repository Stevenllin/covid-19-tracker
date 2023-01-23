import React, { useEffect } from 'react';
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
      <main>
        {props.children}
      </main>
    </>
  )
}
export default MainLayout;
