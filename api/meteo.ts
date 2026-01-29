import { CoordsT } from "@/assets/types/global";

export class MeteoAPI {
  static async fetchWeatherCoords(coords: CoordsT) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&hourly=temperature_2m&current_weather=true&daily=sunrise,sunset&timezone=auto`,
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
