import React from 'react';
import Icon from 'app/common/components/Icon/Icon';
import { NavigationOption } from 'app/core/defines/common/navigationOption';

const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <nav>
        <ul className="d-flex flex-column justify-content-center h-100">
          {
            NavigationOption.map((item, index) => (
              <li key={index} className="d-flex justify-content-center my-4">
                <Icon name={item.text} />
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;