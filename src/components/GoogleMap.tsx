import React, { useEffect, useState } from 'react';

interface Location {
  coordinates: { lat: number; lng: number };
  title: string;
}



const GoogleMap: React.FC<Location> = (location) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.defer = true;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      // Cleanup: Remove the script from the document when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: location.coordinates,
      zoom: 8,
    };
    setMap(new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions));
    new google.maps.Marker({
      position: location.coordinates,
      map,
      title: location.title
    });
  };

  return (
    <div id="map" style={{ width: '100%', height: '300px' }}>
      {/* Map will be displayed here */}
    </div>
  );
};

export default GoogleMap;
