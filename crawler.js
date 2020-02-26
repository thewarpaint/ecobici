const url = 'https://www.ecobici.cdmx.gob.mx/availability_map/getJsonObject';

async function getData() {
  const response = await fetch(url, { method: 'POST' });
  const stations = await response.json();

  return {
    type: 'FeatureCollection',
    features: stations.map(mapStation),
  };
}

function mapStation(station) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        station.lon,
        station.lat,
      ]
    },
    properties: {
      id: station.id,
      address: station.address,
      district: station.district,
      name: station.name,
      nearby_stations: station.nearbyStations.split(','),
      station_types: station.stationType.split(','),
      zip_code: station.zip,
    },
  };
}

getData()
  .then((collection) => console.log(JSON.stringify(collection, null, 2)));