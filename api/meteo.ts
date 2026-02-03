import { CoordsT } from "@/types/global";

export class MeteoAPI {
  static async fetchWeatherCoords(coords: CoordsT) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&current_weather=true&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,temperature_2m_mean,sunrise,sunset&timezone=auto`,
    );
    try {
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
