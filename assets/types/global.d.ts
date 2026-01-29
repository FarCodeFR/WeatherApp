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

export type ScrollSheetProps = {
  coords: CoordsT | null;
};
export type HourlyForecastProps = {
  coords: CoordsT;
};

export type weatherT = {
  current_weather: CurrentWeather | null;
  hourly?: {
    time: string[];
  };
  daily?: {
    sunrise: string[];
    sunset: string[];
  };
};
