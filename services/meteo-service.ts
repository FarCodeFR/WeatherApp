import { WeatherInterpretation } from "@/types/global";

// Fonction utilitaire pour transformer l'interprétation selon le moment
export function getWeatherInterpretation(
  codes: number,
  isDay: boolean,
): WeatherInterpretation {
  const WEATHER_INTERPRETATIONS: WeatherInterpretation[] = [
    {
      codes: [0],
      label: isDay ? "Ensoleillé" : "Nuit claire",
      image: isDay
        ? require("../assets/images/background/bg-sun.jpg")
        : require("../assets/images/background/bg-night.webp"),
      icon: isDay
        ? require("../assets/images/weather/sun.png")
        : require("../assets/images/weather/night.png"),
    },
    {
      codes: [1, 2, 3, 45, 48],
      label: isDay ? "Nuageux" : "Nuit nuageuse",
      image: require("../assets/images/background/bg-cloudy.jpg"),
      icon: require("../assets/images/weather/cloudy.png"),
    },
    {
      codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
      label: isDay ? "Pluvieux" : "Nuit pluvieuse",
      image: require("../assets/images/background/bg-rain.jpg"),
      icon: require("../assets/images/weather/rain.png"),
    },
    {
      codes: [96, 99],
      label: isDay ? "Orageux" : "Nuit orageuse",
      image: require("../assets/images/background/bg-thunder.jpg"),
      icon: require("../assets/images/weather/thunder.png"),
    },
    {
      codes: [71, 73, 75, 77, 85, 86],
      label: isDay ? "Neige" : "Neige nocturne",
      video: require("../assets/video/snow.mp4"),
      image: require("../assets/images/background/bg-night.webp"),
      icon: require("../assets/images/weather/snow.png"),
    },
  ];

  const interpretation = WEATHER_INTERPRETATIONS.find((interpretation) =>
    interpretation.codes.includes(codes),
  );
  return interpretation ?? WEATHER_INTERPRETATIONS[0];
}
