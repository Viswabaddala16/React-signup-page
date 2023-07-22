import React, { useState } from "react";

const Counter = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [hemisphere, setHemisphere] = useState("");
  const [month, setMonth] = useState(1);

  function getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);

        if (location.coords.latitude > 0) {
          setHemisphere("Northern Hemisphere");
        } else if (location.coords.latitude < 0) {
          setHemisphere("Southern Hemisphere");
        } else {
          setHemisphere("Equator");
        }
      });
    }
  }

  return (
    <div>
      <h1>Latitude : {latitude}</h1>
      <h2>Longitude : {longitude}</h2>
      <button onClick={getGeoLocation}>Get Location</button>
      {hemisphere && month ? (
        hemisphere === "Northern Hemisphere" && month >= 3 && month <= 9 ? (
          <div>Summer season in {hemisphere}</div>
        ) : (
          <div>Winter season in {hemisphere}</div>
        )
      ) : (
        <div>Fetching data...</div>
      )}
    </div>
  );
};

export default Counter;
