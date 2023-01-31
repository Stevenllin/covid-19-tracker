import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

const Map = ({ center, zoom }) => {
  
  return (
    <div className="map">
      <LeafletMap maxZoom={5} scrollWheelZoom={false} minZoom={2} center={center} zoom={zoom}>
        <TileLayer
          noWrap={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </LeafletMap>
    </div>
  )
}

export default Map;