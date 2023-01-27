import React from 'react';
import { WorldwideProps } from './types';

const Worldwide: React.FC<WorldwideProps> = (props) => {
  console.log('props', props);
  return (
    <div id="worldwide" className="d-flex">
      {
        props.worldwide && (
          props.worldwide.map((item, index) => (
            <div key={index} className="worldwide-card mx-2 d-flex flex-column justify-content-between">
              <p className="fs-4">{item.item}</p>
              <p className="fs-1">+ {item.numberDifference}</p>
              <p className="fs-4">{item.totalNumber} Total</p>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Worldwide;
