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
  cloud_cover?: number[];
}

export type WeatherInterpretation = {
  codes: number[];
  label: string;
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
};

export type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
};

export type ScrollSheetProps = {
  // coords: CoordsT | null;
  searchCity: (cityName: string) => void | Promise<void>;
  weather: WeatherT | null;
  sunriseISO?: string;
  sunsetISO?: string;
};
export type HourlyForecastProps = {
  hourly: HourlyData;
  sunriseISO?: string;
  sunsetISO?: string;
};

export type DailyData = {
  sunrise: string[];
  sunset: string[];
  time: string[];
  is_day?: number[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  temperature_2m_mean: number[];
};

export type WeekForecastProps = DailyData;

export type PropsDayHour = {
  daily?: DailyData;
};

export type WeatherT = {
  current_weather: CurrentWeather | null;
  hourly: HourlyData;
  daily: DailyData;
};
