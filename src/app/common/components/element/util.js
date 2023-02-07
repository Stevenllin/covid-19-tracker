import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';
import commonService from 'app/core/service/commonService';

const casesTypeColors = {
  Cases: {
    hex: "#ffb966",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 50,
  },
  Recovered: {
    hex: "#a5ffd5",
    rgb: "#a5ffd5",
    half_op: "#a5ffd5",
    multiplier: 50,
  },
  Deaths: {
    hex: "#ea929a",
    rgb: "#ea929a",
    half_op: "#ea929a",
    multiplier: 600,
  },
};


const showDataOnMap = (data, onSelect) => {
  const handleSelectCountry = (country) => {
    onSelect(country);
  }
  return (
    data.map((country, index) => (
      <Circle
        key={index}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        color={casesTypeColors[country.item].hex}
        fillColor={casesTypeColors[country.item].hex}
        radius={Math.sqrt(country.number) * casesTypeColors[country.item].multiplier}
        onClick={() => handleSelectCountry(country.name)}
      >
        <Popup>
          <div className="info-container">
            <div
                className="info-flag"
                style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            />
            <p className="info-name">{country.name}</p>
            <p className="info-confirmed">{country.item}: {numeral(country.number).format("0,0")}</p>
            <p className="info-confirmed">today: {commonService.prettyPrintStat(country.today)}</p>
            <p className="info-confirmed">perMillion: {numeral(country.million).format("0,0")}</p>
          </div>
      </Popup>
    </Circle>
  ))
  )
}

export default showDataOnMap;