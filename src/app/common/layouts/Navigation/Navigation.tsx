import React from 'react';
import { useDispatch } from 'react-redux';
import { GiDeathSkull, GiHealthNormal } from "react-icons/gi";
import { RiVirusFill } from "react-icons/ri";
import { NavigationStateValuesEnum } from 'app/core/enum/navigationStateValuesEnum';
import { setGlobalNavigationState } from 'app/store/global/action';

const Navigation: React.FC = () => {
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
        className="nav-item p-3 my-4"
        onClick={() => handleSetNavigationState(NavigationStateValuesEnum.Cases)}
      >
        <RiVirusFill />
      </button>
      <button
        type="button"
        className="nav-item p-3 my-4"
        onClick={() => handleSetNavigationState(NavigationStateValuesEnum.Deaths)}
      >
        <GiDeathSkull />
      </button>
      <button
        type="button"
        className="nav-item p-3 my-4"
        onClick={() => handleSetNavigationState(NavigationStateValuesEnum.Recovered)}
      >
        <GiHealthNormal />
      </button>
    </nav>
  )
}

export default Navigation;