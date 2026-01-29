import { HourlyForecastProps } from "@/assets/types/global";
import { useHourly } from "@/hooks/useHourly";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View } from "react-native";

// Récupère la date actuel et vérifie si elle est supérieur ou égale à la date de l'api
//
function getStartIndexFromNow(times: string[]) {
  const now = new Date();
  const indexTime = times.findIndex((t) => new Date(t) >= now);
  return indexTime;
}

function HourlyForecast({ coords }: HourlyForecastProps) {
  const hour = useHourly(coords);
  const times = hour?.hourly?.time ?? [];
  const startIndex = times ? getStartIndexFromNow(times) : 0;

  return (
    <View style={styles.container_forecast_hourly}>
      <View style={styles.intro_forecast_hourly}>
        <Feather name="clock" size={18} color="#272d28a6" />
        <Text style={styles.text_intro_forecast_hourly}>
          Prévisions heure par heure
        </Text>
      </View>
      <View style={styles.slider_forecast_hourly}>
        <Text>
          {times.map(() => {
            return times[startIndex]
              ? new Date(times[startIndex]).toLocaleTimeString([], {
                  hour: "2-digit",
                })
              : times;
          })}
        </Text>
        <Text>Icon</Text>
        <Text>Temp</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container_forecast_hourly: {
    backgroundColor: "#edf2fea7",
    borderRadius: 10,
    height: "auto",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 20,
  },
  intro_forecast_hourly: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text_intro_forecast_hourly: {
    color: "#272d28a6",
  },
  slider_forecast_hourly: {
    gap: 10,
    paddingTop: 20,
    padding: 5,
  },
});

export default HourlyForecast;
