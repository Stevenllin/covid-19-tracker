import React from 'react';
import { GiDeathSkull, GiHealthNormal } from "react-icons/gi";
import { RiVirusFill } from "react-icons/ri";


const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="nav-item p-3 my-4">
        <RiVirusFill />
      </div>
      <div className="nav-item p-3 my-4">
        <GiDeathSkull />
      </div>
      <div className="nav-item p-3 my-4">
        <GiHealthNormal />
      </div>
    </nav>
  )
}

export default Navigation;