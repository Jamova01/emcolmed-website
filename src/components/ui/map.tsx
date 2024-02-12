import React, { useRef, ReactNode } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
  center: [];
  attribution: ReactNode;
}

export const Map: React.FC<MapProps> = ({ center, attribution }) => {
  // const mapRef = useRef<MapContainer>(null);

  return (
    <MapContainer
      // center={center}
      // zoom={13}
      // ref={mapRef}
      style={{ height: "352px", width: "352px" }}
      className="-z-10"
    >
      <TileLayer
        // attribution={attribution}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
