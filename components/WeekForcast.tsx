import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View } from "react-native";

function WeekForcast() {
  return (
    <View style={styles.container_forecast_week}>
      <View style={styles.intro_forecast_week}>
        <Feather name="calendar" size={18} color={"#fff"} />
        <Text style={styles.text_forecast_week}>Prévisions sur 10 jours</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_forecast_week: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 15,
    paddingVertical: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  intro_forecast_week: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 15,
    opacity: 0.7,
  },
  text_forecast_week: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
export default WeekForcast;
