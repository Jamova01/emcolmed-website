"use client";

import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const mapRef = useRef(null);
  const latitude = 3.474057627044904;
  const longitude = -76.52726465396861;
  const position = [latitude, longitude];
  return (
    <MapContainer
      center={position}
      zoom={13}
      ref={mapRef}
      style={{ height: "352px", width: "352" }}
      className="-z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
