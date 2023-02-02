import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import commonService from 'app/core/service/commonService';
import { WorldwideProps } from './types';

const Worldwide: React.FC<WorldwideProps> = (props) => {
  const navigation = useSelector((state: RootState) => state.global.navigationState);
  return (
    <div id="worldwide" className="d-flex my-2">
      {
        props.worldwide && (
          props.worldwide.map((item, index) => (
            <div key={index} className="worldwide-card mx-2 d-flex flex-column justify-content-between">
              <p className="fs-4">{item.item}</p>
              <p className="fs-1">{commonService.prettyPrintStat(item.numberDifference, true)}</p>
              <p className="fs-4">{commonService.prettyPrintStat(item.totalNumber, false)} Total</p>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Worldwide;
