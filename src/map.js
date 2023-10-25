import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

function Map() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3NkaHVuIiwiYSI6ImNsbzVlN2RhaDA5YzgyanFkZDZmdzEzbTMifQ.oUTKb69t8JApv75tlcUE2g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [17.9133, 47.0919],
      zoom: 13
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "bottom-right")

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });

    map.addControl(directions, 'top-left');
  }, []);

  return (

      <div className="Map">
        <header className="Map-header">
          <title>Map</title>
        </header>
      <div id='map' style={{ width: '100vw', height: '100vh' }}></div>
    </div>

  );
}

export default Map;