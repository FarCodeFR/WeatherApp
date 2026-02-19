import Heros from "@/components/Heros";
import Loader from "@/components/Loader";
import ScrollSheet from "@/components/ScrollSheet";
import { useLocationCity } from "@/hooks/useLocationCity";
import { computeIsDay, formatHour } from "@/services/forecast-utils";
import { getWeatherInterpretation } from "@/services/meteo-service";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Index() {
  const { weather, city, searchCity } = useLocationCity();
  const currentWeather = weather?.current_weather;
  const apiDay = currentWeather?.is_day;

  const sunriseISO = weather?.daily?.sunrise?.[0];
  const sunsetISO = weather?.daily?.sunset?.[0];
  const nowISO = weather?.current_weather?.time;

  const lever = sunriseISO ? formatHour(sunriseISO) : "Lever indisponible";
  const coucher = sunsetISO ? formatHour(sunsetISO) : "Coucher indisponible";
  console.log(currentWeather);
  const isDaySafe =
    sunriseISO && sunsetISO && nowISO
      ? computeIsDay(nowISO, sunriseISO, sunsetISO)
      : Number(apiDay) === 1;

  const weatherClimat = currentWeather
    ? getWeatherInterpretation(currentWeather.weathercode, isDaySafe)
    : getWeatherInterpretation(0, true);

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
          temperature={Math.round(currentWeather.temperature ?? 0)}
          city={city}
          lever={lever}
          coucher={coucher}
          interpretation={weatherClimat}
        />
        <ScrollSheet
          sunriseISO={sunriseISO}
          sunsetISO={sunsetISO}
          weather={weather}
          searchCity={searchCity}
        />
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
