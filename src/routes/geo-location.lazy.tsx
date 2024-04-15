import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const GeoLocation = () => {
  const [loaded, setLoaded] = useState(false);
  const [coords, setCoords] = useState<LatLngExpression>([0, 0]);
  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          setCoords([coords.latitude, coords.longitude]);
          setLoaded(true);
        });
      }
    });
  }, []);

  return (
    <div className="p-2 w-5/6 h-[700px]">
      {loaded && (
        <MapContainer
          className="h-full"
          center={coords}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={coords}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export const Route = createLazyFileRoute("/geo-location")({
  component: GeoLocation,
});
