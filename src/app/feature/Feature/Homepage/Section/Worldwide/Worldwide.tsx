import React from 'react';
import commonService from 'app/core/service/commonService';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { NavigationStateValuesEnum } from 'app/core/enum';
import { WorldwideProps } from './types';

const Worldwide: React.FC<WorldwideProps> = (props) => {
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  console.log('navigation', navigation);

  return (
    <div id="worldwide" className="d-flex my-2">
      {
        props.worldwide && (
          props.worldwide.map((item, index) => (
            <div key={index} className={'worldwide-card mx-2' + (navigation === item.key ? ' active' : '')}>
              <div className="d-flex flex-column justify-content-between">
                <p className="fs-4">{item.item}</p>
                {
                  navigation === item.key && NavigationStateValuesEnum.Cases === item.key && (
                    <p className="fs-1 color-orange">{commonService.prettyPrintStat(item.numberDifference, true)}</p>
                  )
                }
                {
                  navigation === item.key && NavigationStateValuesEnum.Deaths === item.key && (
                    <p className="fs-1 color-red">{commonService.prettyPrintStat(item.numberDifference, true)}</p>
                  )
                }
                {
                  navigation === item.key && NavigationStateValuesEnum.Recovered === item.key && (
                    <p className="fs-1 color-green">{commonService.prettyPrintStat(item.numberDifference, true)}</p>
                  )
                }
                {
                  navigation !== item.key && (
                    <p className="fs-1">{commonService.prettyPrintStat(item.numberDifference, true)}</p>
                  )
                }
                <p className="fs-4">{commonService.prettyPrintStat(item.totalNumber, false)} Total</p>
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Worldwide;
