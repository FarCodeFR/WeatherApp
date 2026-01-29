import { CoordsT } from "@/assets/types/global";
import { reverseGeocodeAsync } from "expo-location";
import { useEffect, useState } from "react";

export const useCity = (coords: CoordsT | null) => {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    if (coords) {
      fetchCity(coords);
    }
  }, [coords]);

  // Coordonnées ( ville )
  async function fetchCity(coordinates: CoordsT) {
    const townHere = await reverseGeocodeAsync({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    });
    if (townHere.length === 0) {
      setCity("Ville inconnue");
    } else {
      setCity(townHere[0].city);
    }
  }
  return city;
};
