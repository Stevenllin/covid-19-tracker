import React, { useState, useEffect } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import showDataOnMap from '../element/util';
import { NavigationStateValuesEnum, NavigationStateTextEnum } from 'app/core/enum';

const Map = ({ center, zoom, onSelect }) => {
  const countryDataList = useSelector((state) => state.global.countryDataList);
  const navigation = useSelector((state) => state.global.navigationState);
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (navigation) {
      case (NavigationStateValuesEnum.Cases): {
        const countryDataListUpdate = countryDataList.map(item => {
          return {
            item: NavigationStateTextEnum.Cases,
            name: item.country,
            countryInfo: item.countryInfo,
            number: item.cases,
            today: item.todayCases,
            million: item.casesPerOneMillion
          }
        });
        setData(countryDataListUpdate);
        break;
      }
      case (NavigationStateValuesEnum.Deaths): {
        const countryDataListUpdate = countryDataList.map(item => {
          return {
            item: NavigationStateTextEnum.Deaths,
            name: item.country,
            countryInfo: item.countryInfo,
            number: item.deaths,
            today: item.todayDeaths,
            million: item.deathsPerOneMillion
          }
        });
        setData(countryDataListUpdate);
        break;
      }
      case (NavigationStateValuesEnum.Recovered): {
        const countryDataListUpdate = countryDataList.map(item => {
          return {
            item: NavigationStateTextEnum.Recovered,
            name: item.country,
            countryInfo: item.countryInfo,
            number: item.recovered,
            today: item.todayRecovered,
            million: item.recoveredPerOneMillion
          }
        });
        setData(countryDataListUpdate);
        break;
      }
      default: setData([])
    }
  }, [navigation]);

  return (
    <div className="map">
      <LeafletMap maxZoom={5} scrollWheelZoom={false} minZoom={2} center={center} zoom={zoom}>
        <TileLayer
          noWrap={true}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(data, onSelect)}
      </LeafletMap>
    </div>
  )
}

export default Map;