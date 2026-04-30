import Heros from "@/components/Heros";
import Loader from "@/components/Loader";
import ScrollSheet from "@/components/ScrollSheet";
import { useLocationCity } from "@/hooks/useLocationCity";
import { computeIsDay, formatHour } from "@/services/forecast-utils";
import { getWeatherInterpretation } from "@/services/meteo-service";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

export default function Index() {
  const { weather, city, searchCity } = useLocationCity();
  const currentWeather = weather?.current_weather;
  const day = currentWeather?.is_day;

  const sunriseISO = weather?.daily?.sunrise?.[0];
  const sunsetISO = weather?.daily?.sunset?.[0];
  const nowISO = weather?.current_weather?.time;

  const lever = sunriseISO ? formatHour(sunriseISO) : "Lever indisponible";
  const coucher = sunsetISO ? formatHour(sunsetISO) : "Coucher indisponible";

  // Vérification que isDay est bien en journée entre lever et coucher de soleil
  const isDaySafe =
    sunriseISO && sunsetISO && nowISO
      ? computeIsDay(nowISO, sunriseISO, sunsetISO)
      : Number(day) === 1;

  const weatherClimat = currentWeather
    ? getWeatherInterpretation(currentWeather.weathercode, isDaySafe)
    : getWeatherInterpretation(0, true);

  // Vidéo

  const videoSource = weatherClimat.video;

  const player = useVideoPlayer(videoSource ?? null, (p) => {
    if (!videoSource) return;
    p.loop = true;
    p.play();
  });
  return currentWeather ? (
    <View style={styles.container}>
      {/* FOND : vidéo ou image */}
      {videoSource ? (
        <VideoView
          player={player}
          contentFit="cover"
          style={styles.background}
        />
      ) : (
        <ImageBackground
          source={weatherClimat.image}
          style={styles.background}
          resizeMode="cover"
          blurRadius={1}
        />
      )}

      {/* OVERLAY */}
      <View style={styles.overlay} />

      {/* CONTENU DEVANT */}
      <View style={styles.content}>
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
      </View>
    </View>
  ) : (
    <Loader />
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },

  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.26)",
    zIndex: 1,
  },

  content: {
    flex: 1,
    zIndex: 2,
  },
});
