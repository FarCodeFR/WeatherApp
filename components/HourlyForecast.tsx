import { useHourly } from "@/hooks/useHourly";
import { getWeatherInterpretation } from "@/services/meteo-service";
import { HourlyForecastProps } from "@/types/global";
import Feather from "@expo/vector-icons/Feather";
import { ReactHTMLElement } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

// Récupère la date actuel et vérifie si elle est supérieur ou égale à la date de l'api
function getStartIndexFromNow(times: string[]) {
  const now = new Date();
  const indexTime = times.findIndex((t) => new Date(t) >= now);
  return indexTime === -1 ? 0 : indexTime;
}

function HourlyForecast({ coords }: HourlyForecastProps) {
  const hour = useHourly(coords);
  const timesNow = hour?.hourly?.time ?? [];
  const temps = hour?.hourly?.temperature_2m ?? [];
  const startIndex = getStartIndexFromNow(timesNow);

  const items = timesNow.slice(startIndex, startIndex + 24).map((el, index) => {
    const actuelIndex = startIndex + index;
    const weatherCode = hour?.hourly?.weather_code?.[actuelIndex] ?? 0;
    console.log("Weather code at index", actuelIndex, ":", weatherCode);
    const interpretation = getWeatherInterpretation(weatherCode);
    return {
      key: el,
      hour: new Date(el).toLocaleTimeString("fr-FR", { hour: "2-digit" }),
      temp: Math.round(temps[actuelIndex]),
      icon: interpretation.icon,
    };
  });

  return (
    <View style={styles.container_forecast_hourly}>
      <View style={styles.intro_forecast_hourly}>
        <Feather name="clock" size={18} color={"#fff"} />
        <Text style={styles.text_forecast_hourly}>
          Prévisions heure par heure
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        contentContainerStyle={styles.scroll_content_hourly}
      >
        {items.map((el) => {
          return (
            <View key={el.key} style={styles.hour_item}>
              <Text style={styles.text_hour}>{el.hour}</Text>
              <Image source={el.icon} style={styles.weather_icon} />
              <Text style={styles.text_temp}>{el.temp}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container_forecast_hourly: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
    paddingVertical: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  intro_forecast_hourly: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 15,
    opacity: 0.7,
  },
  scroll_content_hourly: {
    paddingHorizontal: 10,
    gap: 15,
  },
  hour_item: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 7,
  },
  text_forecast_hourly: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  text_hour: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  weather_icon: {
    width: 20,
    height: 20,
    objectFit: "cover",
  },
  text_temp: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HourlyForecast;
