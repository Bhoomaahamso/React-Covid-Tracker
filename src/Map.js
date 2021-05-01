import React from "react";
import "./Map.css";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import { showData } from "./utils";

function Map({ center, zoom, casesType, mapcountries }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className="Map">
      <LeafletMap>
        <ChangeView center={center} zoom={zoom} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
            contributors'
        />
        {showData(mapcountries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
