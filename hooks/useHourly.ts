import { MeteoAPI } from "@/api/meteo";
import { CoordsT, weatherT } from "@/assets/types/global";
import { useEffect, useState } from "react";

export const useHourly = (coords: CoordsT | null) => {
  const [hourly, setHourly] = useState<weatherT | null>(null);

  //  Météo ( API )
  useEffect(() => {
    if (!coords) {
      return;
    } else {
      fetchHourly(coords);
    }
  }, [coords]);

  // Météo
  async function fetchHourly(coordinates: CoordsT) {
    try {
      const hourlyResponse = await MeteoAPI.fetchWeatherCoords(coordinates);
      setHourly(hourlyResponse);
    } catch (err) {
      console.error("Impossible de charger les heures", err);
    }
  }
  return hourly;
};
