import Heros from "@/components/Heros";
import Loader from "@/components/Loader";
import ScrollSheet from "@/components/ScrollSheet";
import { useCity } from "@/hooks/useCity";
import { useUserPosition } from "@/hooks/useUserPosition";
import { useWeather } from "@/hooks/useWeather";
import { getWeatherInterpretation } from "@/services/meteo-service";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Index() {
  const coords = useUserPosition();
  const weather = useWeather(coords);
  const city = useCity(coords);

  const currentWeather = weather?.current_weather;

  const weatherClimat = currentWeather
    ? getWeatherInterpretation(
        currentWeather.weather_code,
        currentWeather.is_day,
      )
    : getWeatherInterpretation(0, 1);

  // Lever / coucher du soleil
  const lever = weather?.daily?.sunrise?.[0]?.split("T")?.[1];
  const coucher = weather?.daily?.sunset?.[0]?.split("T")?.[1];

  return currentWeather ? (
    <View style={styles.container}>
      <ImageBackground
        source={weatherClimat.image}
        style={styles.bg_img_co}
        resizeMode="cover"
        blurRadius={1}
      >
        <View style={styles.overlay} />
        <Heros
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          lever={lever}
          coucher={coucher}
          interpretation={weatherClimat}
        />
        <ScrollSheet coords={coords} weather={weather} />
      </ImageBackground>
    </View>
  ) : (
    <Loader />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    fontSize: 40,
    width: 100,
    height: 100,
  },
  bg_img_co: {
    flex: 1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.26)",
  },
});
