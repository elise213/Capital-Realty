import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";

export const Map = () => {
  const { store, actions } = useContext(Context);

  let lat = 25.727264069277847;
  let lng = -80.2627160981497;

  const [city, setCity] = useState({
    center: { lat: lat, lng: lng },
  });

  // Define the Marker component
  const Marker = () => (
    <div style={{ color: "red" }}>
      <i className="fa-solid fa-location-dot fa-2xl"></i>
    </div>
  );

  return (
    <div>
      <div className="map">
        <GoogleMapReact
          // Put the google API key here!!
          bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
          center={city.center}
          defaultZoom={14}
        >
          <Marker
            lat={lat}
            lng={lng}
            color="red"
            // text={result.name}
            // key={i}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
