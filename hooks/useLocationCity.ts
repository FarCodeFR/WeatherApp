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

  //  Mets à jour city
  useEffect(() => {
    async function fetchCity() {
      if (!coords) return;
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

  // 3) Météo dépend des coords
  const weather = useWeather(coords);

  // 4) Recherche : nom de ville -> coords
  const searchCity = useCallback(async (cityName: string) => {
    const name = cityName.trim();
    if (!name) return;

    const data = await CityAPI.searchCity(name);
    const first = data?.results?.[0];
    if (!first) return;

    setCoords({ lat: first.latitude, lng: first.longitude });
  }, []);

  return { coords, city, weather, searchCity };
}
