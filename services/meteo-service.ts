import { WeatherInterpretation } from "@/types/global";
const WEATHER_INTERPRETATIONS: WeatherInterpretation[] = [
  {
    codes: [0],
    label: "Ensoleillé",
    image: require("../assets/images/background/bg-sun.jpg"),
    icon: require("../assets/images/weather/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Nuageux",
    image: require("../assets/images/background/bg-cloudy.jpg"),
    icon: require("../assets/images/weather/cloudy.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Pluvieux",
    image: require("../assets/images/background/bg-rain.jpg"),
    icon: require("../assets/images/weather/rain.png"),
  },
  {
    codes: [96, 99],
    label: "Orageux",
    image: require("../assets/images/background/bg-thunder.jpg"),
    icon: require("../assets/images/weather/thunder.png"),
  },
];

export function getWeatherInterpretation(codes: number): WeatherInterpretation {
  const interpretation = WEATHER_INTERPRETATIONS.find((interpretation) =>
    interpretation.codes.includes(codes),
  );
  return interpretation ?? WEATHER_INTERPRETATIONS[0];
}
