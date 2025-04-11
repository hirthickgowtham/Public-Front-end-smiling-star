import React, { useEffect, useState } from "react";
import styles from "./MapSection.module.css";
import { GoogleMap, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";

const centerCoordinates = { lat: 11.017590, lng: 79.481209 }; // Your center location

const MapSection = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBO8kIc2QJ9BoQrNpwonzcBL7r9QcVzzxE",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(origin);

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin,
            destination: centerCoordinates,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error("Error fetching directions", result);
            }
          }
        );
      });
    } else {
      alert("Geolocation not supported by your browser.");
    }
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className={styles.mapWrapper}>
      <h2 className={styles.heading}>Get Directions to Our Center</h2>
      <GoogleMap
        mapContainerClassName={styles.mapContainer}
        center={centerCoordinates}
        zoom={12}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default MapSection;
