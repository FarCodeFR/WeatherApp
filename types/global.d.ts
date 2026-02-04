import { ImageSourcePropType } from "react-native";

export interface CoordsT {
  lat: number;
  lng: number;
}

export interface HerosProps {
  temperature: number;
  city: string | null;
  lever?: string | number;
  coucher?: string | number;
  interpretation: WeatherInterpretation;
}
export interface HourlyData {
  time: string[];
  temperature_2m: number[];
  weather_code?: number[];
}

export type WeatherInterpretation = {
  codes: number[];
  label: string;
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
};

export type ScrollSheetProps = {
  coords: CoordsT | null;
  weather: WeatherT | null;
};
export type HourlyForecastProps = {
  hourly: HourlyData;
};

export type DailyData = {
  sunrise: string[];
  sunset: string[];
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  temperature_2m_mean: number[];
};

export type WeekForecastProps = DailyData;

export type PropsDayHour = {
  daily: DailyData;
};

export type WeatherT = {
  current_weather: CurrentWeather | null;
  hourly: HourlyData;
  daily: DailyData;
};
