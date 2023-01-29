import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { GiDeathSkull, GiHealthNormal } from "react-icons/gi";
import { RiVirusFill } from "react-icons/ri";
import { NavigationStateValuesEnum } from 'app/core/enum/navigationStateValuesEnum';
import { setGlobalNavigationState } from 'app/store/global/action';

const Navigation: React.FC = () => {
  const navigationState = useSelector((state: RootState) => state.global.navigationState);
  const reduxDispatch = useDispatch();
  /**
   * @description 
  */
  const handleSetNavigationState = (value: NavigationStateValuesEnum) => {
    reduxDispatch(setGlobalNavigationState(value));
  }
  return (
    <nav>
      <button
        type="button"
        className={navigationState === NavigationStateValuesEnum.Cases ? 'nav-item-active p-3 my-2' : 'p-3 my-2'}
        onClick={() => handleSetNavigationState(NavigationStateValuesEnum.Cases)}
      >
        <RiVirusFill />
      </button>
      <button
        type="button"
        className={navigationState === NavigationStateValuesEnum.Deaths ? 'nav-item-active p-3 my-2' : 'p-3 my-2'}
        onClick={() => handleSetNavigationState(NavigationStateValuesEnum.Deaths)}
      >
        <GiDeathSkull />
      </button>
      <button
        type="button"
        className={navigationState === NavigationStateValuesEnum.Recovered ? 'nav-item-active p-3 my-2' : 'p-3 my-2'}
        onClick={() => handleSetNavigationState(NavigationStateValuesEnum.Recovered)}
      >
        <GiHealthNormal />
      </button>
    </nav>
  )
}

export default Navigation;