import { StyleSheet, View } from "react-native";

function WeatherWeek() {
  return <View style={styles.containerWeek}></View>;
}

const styles = StyleSheet.create({
  containerWeek: {
    width: "100%",
    height: 400,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "rgb(92, 102, 150)",
    boxShadow: "0px 1px 6px 0px white",
  },
});

export default WeatherWeek;
