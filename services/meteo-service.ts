import { WeatherInterpretation } from "@/types/global";

// On ajoute une fonction utilitaire pour transformer l'interprétation selon le moment
export function getWeatherInterpretation(
  codes: number,
  isDay: number,
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

  const interpretation = WEATHER_INTERPRETATIONS.find((interpretation) =>
    interpretation.codes.includes(codes),
  );

  return interpretation ?? WEATHER_INTERPRETATIONS[0];
}
