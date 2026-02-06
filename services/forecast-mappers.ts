import { HourlyData } from "@/types/global";
import { formatHour, getStartIndexFromNow } from "./forecast-utils";
import { getWeatherInterpretation } from "./meteo-service";

export function hourlyWeek(hourly: HourlyData, count = 24) {
  const hourlyTimes = hourly?.time ?? [];
  const hourlyTemperatures = hourly?.temperature_2m ?? [];
  const startIndex = getStartIndexFromNow(hourlyTimes);
  const forecastItems = hourlyTimes
    .slice(startIndex, startIndex + count)
    .map((el, index) => {
      const hourIndex = startIndex + index;
      const weatherCode = hourly?.weather_code?.[hourIndex] ?? 0;
      const cloudCover = hourly?.cloud_cover?.[hourIndex] ?? 0;
      const interpretation = getWeatherInterpretation(weatherCode, cloudCover);
      console.log(interpretation);
      return {
        key: el,
        hour: formatHour(el),
        temp: Math.round(hourlyTemperatures[hourIndex]),
        icon: interpretation.icon,
      };
    });
  return forecastItems;
}
