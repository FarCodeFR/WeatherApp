export interface CoordsT {
  lat: number;
  lng: number;
}

export interface HerosProps {
  temperature: number;
  city: string | null;
  lever?: string | number;
  coucher?: string | number;
}

export type weatherT = {
  current_weather: CurrentWeather | null;
  daily?: {
    sunrise: string[];
    sunset: string[];
  };
};
