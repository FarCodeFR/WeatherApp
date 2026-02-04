import { dayWeek } from "@/services/forecast-utils";
import { getWeatherInterpretation } from "@/services/meteo-service";
import { PropsDayHour } from "@/types/global";
import Feather from "@expo/vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, Image, StyleSheet, Text, View } from "react-native";

function WeekForcast({ daily }: PropsDayHour) {
  const daysForWeek = daily.time.map((date, i) => ({
    key: date,
    day: dayWeek(date),
    code: daily.weather_code[i],
    max: daily.temperature_2m_max[i],
    min: daily.temperature_2m_min[i],
    now: daily.temperature_2m_mean[0],
  }));

  // min semaine
  const weekmin = Math.round(Math.min(...daily.temperature_2m_min));
  // max semaine
  const weekmax = Math.round(Math.max(...daily.temperature_2m_max));
  // l'amplitude semaine
  const startX = weekmax - weekmin;
  const largeurBar = 90;
  // Température actuel
  const currentTemps = daily.temperature_2m_mean[0];

  // Palette température
  const getTemperatureColors = (
    maxTemp: number,
  ): [ColorValue, ColorValue, ...ColorValue[]] => {
    if (maxTemp < 10) return ["#4facfe", "#00f2fe"];
    if (maxTemp < 20) return ["#00f2fe", "#f9d423"];
    if (maxTemp < 28) return ["#f9d423", "#ff8c00"];
    return ["#ff8c00", "#ff0844"];
  };

  return (
    <View style={styles.containerWeekForecastCard}>
      <View style={styles.containerWeekForecastHeader}>
        <Feather name="calendar" size={16} color="rgba(255,255,255,0.85)" />
        <Text style={styles.weekForecastHeaderText}>
          PRÉVISIONS SUR 7 JOURS
        </Text>
      </View>

      <View style={styles.containerWeekForecastList}>
        {daysForWeek.map((el, index) => (
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
                  <LinearGradient
                    colors={getTemperatureColors(el.max)}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[
                      styles.containerForecastBarLine,
                      {
                        left: ((el.min - weekmin) / startX) * largeurBar,
                        width: ((el.max - el.min) / startX) * largeurBar,
                      },
                    ]}
                  />
                  {index === 0 && (
                    <View
                      style={[
                        styles.currentTempPoint,
                        {
                          left:
                            ((currentTemps - weekmin) / startX) * largeurBar -
                            3,
                        },
                      ]}
                    />
                  )}
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
    height: 4,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.15)",
  },

  containerForecastBarLine: {
    position: "absolute",
    height: 4,
    borderRadius: 10,
    backgroundColor: "transparent",
  },

  // Point
  currentTempPoint: {
    position: "absolute",
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: "white",
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.4)",
    top: -1.5,
    zIndex: 10,
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
