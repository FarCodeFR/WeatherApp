import { useEffect, useMemo, useState, useCallback } from "react";
import { reverseGeocodeAsync } from "expo-location";

import { CityAPI } from "@/api/meteo";
import { useUserPosition } from "@/hooks/useUserPosition";
import { useWeather } from "@/hooks/useWeather";
import { CoordsT } from "@/types/global";

export function useLocationCity() {
  const gpsCoords = useUserPosition();

  const [coords, setCoords] = useState<CoordsT | null>(null);
  const [city, setCity] = useState<string | null>(null);

  // Coordonnées
  useEffect(() => {
    if (gpsCoords) setCoords(gpsCoords);
  }, [gpsCoords]);

  //  Mets à jour city avec la localisation
  useEffect(() => {
    async function fetchCity() {
      if (!coords) {
        return;
      }
      try {
        const result = await reverseGeocodeAsync({
          latitude: coords.lat,
          longitude: coords.lng,
        });
        setCity(result?.[0]?.city ?? "Ville inconnue");
      } catch (e) {
        console.error(e);
        setCity("Ville inconnue");
      }
    }
    fetchCity();
  }, [coords]);

  // Météo coords
  const weather = useWeather(coords);

  //  Mets à jour city avec la barre de recherche
  const searchCity = useCallback(async (cityName: string) => {
    const city = cityName.trim();
    if (!city) {
      return;
    }
    try {
      const response = await CityAPI.searchCity(city);
      const result = response?.results?.[0];
      if (!result) {
        return;
      }
      setCoords({
        lat: result.latitude,
        lng: result.longitude,
      });
    } catch (error) {
      console.error("Erreur recherche ville:", error);
    }
  }, []);

  return { coords, city, weather, searchCity };
}
