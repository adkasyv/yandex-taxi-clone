import GoogleMapReact from "google-map-react";
import React from "react";

const Map = () => {
  return (
    <div className="h-screen w-full">
      <GoogleMapReact bootstrapURLKeys={{ key: String(process.env.MAP_KEY) }} />
    </div>
  );
};

export default Map;
