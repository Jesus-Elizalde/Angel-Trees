"use client";
import { Marker, useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import React, { useState } from "react";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

type Props = {
  coords: {
    lat: number;
    lng: number;
  };
  zoom: boolean;
  size: {
    width: string;
    height: string;
  };
};

const GoogleMaps = ({ coords, size, zoom }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC5Ug1aGQdp6VDq_7Wv6UQPsSwwCVArWs0",
  });

  const containerStyle = {
    width: size.width,
    height: size.height,
  };

  const center = {
    lat: coords.lat,
    lng: coords.lng,
  };

  const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: zoom,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      //   options={options}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <Marker
        position={{
          lat: coords.lat,
          lng: coords.lng,
        }}
        icon={{
          url: "/f1icon.svg",
          scaledSize: new window.google.maps.Size(75, 75),
          origin: new window.google.maps.Point(0, 0),
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMaps;
