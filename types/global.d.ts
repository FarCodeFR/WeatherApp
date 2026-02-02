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
};
export type HourlyForecastProps = {
  coords: CoordsT;
};

export type WeatherT = {
  current_weather: CurrentWeather | null;
  hourly?: HourlyData;
  daily?: {
    sunrise: string[];
    sunset: string[];
  };
};
