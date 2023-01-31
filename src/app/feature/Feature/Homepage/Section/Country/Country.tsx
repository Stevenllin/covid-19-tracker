import React, { useState } from 'react';
import Map from 'app/common/components/Map';

const Country: React.FC = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  const [mapZoom, setMapZoom] = useState(3)

  return (
    <div id="country" className="country-container my-2">
      <div className="row mx-1">
        <div className="col-8 p-2">
          <Map center={mapCenter} zoom={mapZoom} />
        </div>
        <div className="col-4 p-2">
          2
        </div>
      </div>
    </div>
  )
}

export default Country;