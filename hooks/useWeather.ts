import { MeteoAPI } from "@/api/meteo";
import { CoordsT, WeatherT } from "@/types/global";
import { useEffect, useState } from "react";

export const useWeather = (coords: CoordsT | null) => {
  const [weather, setWeather] = useState<WeatherT | null>(null);

  //  Météo ( API )
  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  // Météo
  async function fetchWeather(coordinates: CoordsT) {
    try {
      const weatherResponse = await MeteoAPI.fetchWeatherCoords(coordinates);
      setWeather(weatherResponse);
    } catch (err) {
      console.error("Impossible de charger la météo", err);
    }
  }
  return weather;
};
