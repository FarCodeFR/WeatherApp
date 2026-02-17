import { CoordsT } from "@/types/global";

export class MeteoAPI {
  static async fetchWeatherCoords(coords: CoordsT) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&current_weather=true&hourly=temperature_2m,weather_code,cloud_cover&daily=weather_code,temperature_2m_max,temperature_2m_min,temperature_2m_mean,sunrise,sunset&timezone=auto`,
      );
      if (!response.ok) {
        throw new Error("Erreur API météo");
      } else {
        return response.json();
      }
    } catch (err) {
      console.error(err);
    }
  }
}
export class CityAPI {
  static async searchCity(city: string) {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=10&language=fr&format=json`,
      );
      if (!response.ok) {
        throw new Error("Erreur API météo");
      } else {
        return response.json();
      }
    } catch (err) {
      console.error(err);
    }
  }
}
