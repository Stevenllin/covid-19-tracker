import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initFetchGlobalDataAction } from 'app/store/global/action';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();

  /**
   * @description 組件初始化後執行的 Effect
   */
  useEffect(() => {
    // 初始取得全域資料
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
