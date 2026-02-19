import { HourlyData } from "@/types/global";
import {
  computeIsDay,
  formatHour,
  getStartIndexFromNow,
} from "./forecast-utils";
import { getWeatherInterpretation } from "./meteo-service";

export function hourlyWeek(
  hourly: HourlyData,
  sunriseISO?: string,
  sunsetISO?: string,
  count = 24,
) {
  // Heure
  const hourlyTimes = hourly?.time ?? [];
  // Temperature
  const hourlyTemperatures = hourly?.temperature_2m ?? [];
  // Premiere heure
  const startIndex = getStartIndexFromNow(hourlyTimes);

  return (
    hourlyTimes
      // Coupe entre l'heure actuel et 24 et map dessu pour afficher
      .slice(startIndex, startIndex + count)
      .map((timeISO, index) => {
        const hourIndex = startIndex + index;
        const weatherCode = hourly?.weather_code?.[hourIndex] ?? 0;
        const isDayForHour =
          sunriseISO && sunsetISO
            ? computeIsDay(timeISO, sunriseISO, sunsetISO)
            : true;
        const interpretation = getWeatherInterpretation(
          weatherCode,
          isDayForHour ? true : false,
        );
        return {
          key: timeISO,
          hour: formatHour(timeISO),
          temp: Math.round(hourlyTemperatures[hourIndex] ?? 0),
          icon: interpretation.icon,
        };
      })
  );
}
