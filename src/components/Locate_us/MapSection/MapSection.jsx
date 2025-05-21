import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import styles from './MapSection.module.css';

const MapSection = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  // 🔘 Google Maps Button Handler
  const handleOpenInGoogleMaps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const destination = "11.9404912,79.8147756"; // Chennai

          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}&travelmode=driving`;

          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          console.error('Error getting location:', error);
          alert("Couldn't fetch your location. Please allow location access.");
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView([11.0168, 76.9558], 7);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(mapRef.current);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLatLng = [position.coords.latitude, position.coords.longitude];
        const shopLatLng = [11.9404912, 79.8147756]; // smiling star

        const control = L.Routing.control({
          waypoints: [L.latLng(userLatLng), L.latLng(shopLatLng)],
          routeWhileDragging: false,
          addWaypoints: false,
          draggableWaypoints: false,
          fitSelectedRoutes: true,
          show: false,
          lineOptions: {
            styles: [{ color: '#4285F4', weight: 6, opacity: 0.9 }],
          },
          createMarker: (i, wp) =>
            L.marker(wp.latLng, {
              icon: L.icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
                iconSize: [34, 34],
                iconAnchor: [17, 34],
                popupAnchor: [0, -30],
              }),
            }),
        }).addTo(mapRef.current);

        control.on('routesfound', function (e) {
          const route = e.routes[0];
          const summary = route.summary;

          const distanceKm = (summary.totalDistance / 1000).toFixed(1);
          const totalMinutes = Math.round(summary.totalTime / 60);

          const hours = Math.floor(totalMinutes / 60);
          const minutes = totalMinutes % 60;
          let durationFormatted = '';

          if (hours > 0) {
            durationFormatted = `${hours} hr${hours > 1 ? 's' : ''}`;
            if (minutes > 0) {
              durationFormatted += ` ${minutes} min${minutes > 1 ? 's' : ''}`;
            }
          } else {
            durationFormatted = `${minutes} min${minutes > 1 ? 's' : ''}`;
          }

          const popupContent = `📍 <b>Distance:</b> ${distanceKm} km<br>⏱ <b>Duration:</b> ${durationFormatted}`;
          const midPoint = route.coordinates[Math.floor(route.coordinates.length / 2)];

          L.popup({
            closeButton: true,
            closeOnClick: true,
            offset: L.point(0, -10),
            className: 'custom-popup',
          })
            .setLatLng(midPoint)
            .setContent(popupContent)
            .openOn(mapRef.current);
        });
      },
      (error) => {
        console.error('Geolocation error:', error);
        alert('Unable to access your location. Please enable GPS and try again.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <h2 className={styles.mapTitle}>🗺 Direction to the center</h2>
      <div ref={mapContainerRef} className={styles.mapContainer} />
      <button onClick={handleOpenInGoogleMaps} className={styles.mapButton}>
        Open in Google Maps
      </button>
    </div>
  );
};

export default MapSection;
