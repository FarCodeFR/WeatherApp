import { hourlyWeek } from "@/services/forecast-mappers";
import { dayWeek } from "@/services/forecast-utils";
import { getWeatherInterpretation } from "@/services/meteo-service";
import { PropsDayHour } from "@/types/global";
import Feather from "@expo/vector-icons/Feather";
import { Image, StyleSheet, Text, View } from "react-native";

function WeekForcast({ daily }: PropsDayHour) {
  const daysForWeek = daily.time.map((date, i) => ({
    key: date,
    day: dayWeek(date),
    code: daily.weather_code[i],
    max: daily.temperature_2m_max[i],
    min: daily.temperature_2m_min[i],
  }));

  // min semaine
  const weekmin = Math.round(Math.min(...daily.temperature_2m_min));
  // max semaine
  const weekmax = Math.round(Math.max(...daily.temperature_2m_max));
  // l'amplitude semaine
  const startX = weekmax - weekmin;
  const largeurBar = 90;

  return (
    <View style={styles.containerWeekForecastCard}>
      <View style={styles.containerWeekForecastHeader}>
        <Feather name="calendar" size={16} color="rgba(255,255,255,0.85)" />
        <Text style={styles.weekForecastHeaderText}>
          PRÉVISIONS SUR 7 JOURS
        </Text>
      </View>

      <View style={styles.containerWeekForecastList}>
        {daysForWeek.map((el) => (
          <View style={styles.containerWeekForecastBorder} key={el.key}>
            <View style={styles.containerWeekForecastRow}>
              <Text style={styles.weekForecastDay}>{el.day}</Text>
              <View style={styles.containerWeekForecastIconSlot}>
                <Image
                  source={getWeatherInterpretation(el.code).icon}
                  style={styles.weather_icon}
                />
              </View>
              <View style={styles.containerWeekForecastTemps}>
                <Text style={styles.weekForecastTempMin}>
                  {Math.round(el.min)}°
                </Text>
                <View style={styles.containerBarWeather}>
                  <View
                    style={[
                      styles.containerForecastBarLine,
                      {
                        left: ((el.min - weekmin) / startX) * largeurBar,
                        width: ((el.max - el.min) / startX) * largeurBar,
                      },
                    ]}
                  ></View>
                </View>
                <Text style={styles.weekForecastTempMax}>
                  {Math.round(el.max)}°
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Card */
  containerWeekForecastCard: {
    margin: 10,
    paddingVertical: 15,
    borderRadius: 18,
    backgroundColor: "rgba(20,20,20,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  },

  /* Header */
  containerWeekForecastHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
    gap: 8,
  },
  weekForecastHeaderText: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: "700",
    textTransform: "uppercase",
  },

  /* List */
  containerWeekForecastList: {
    paddingHorizontal: 6,
  },

  /* Bordure */
  containerWeekForecastBorder: {
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  /* Row */
  containerWeekForecastRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  /* Day */
  weekForecastDay: {
    width: 56,
    color: "rgba(255,255,255,0.95)",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.4,
  },

  /* Icon */
  containerWeekForecastIconSlot: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  weather_icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  // Barre
  containerBarWeather: {
    position: "relative",
    width: 90,
    height: 6,
    borderRadius: 2,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  containerForecastBarLine: {
    position: "absolute",
    height: 4,
    borderRadius: 2,
    backgroundColor: "#FFA500",
  },

  /* Temps */
  containerWeekForecastTemps: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  weekForecastTempMin: {
    color: "rgba(255,255,255,0.65)",
    fontSize: 14,
    fontWeight: "600",
  },
  weekForecastTempSeparator: {
    color: "rgba(255,255,255,0.35)",
    fontSize: 14,
    fontWeight: "700",
  },
  weekForecastTempMax: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default WeekForcast;
