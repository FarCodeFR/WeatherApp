import { HerosProps } from "@/assets/types/global";
import { StyleSheet, Text, View } from "react-native";

function Heros({ temperature, city, lever, coucher }: HerosProps) {
  return (
    <View style={styles.boxPosition}>
      <Text style={styles.herosText}>{city}</Text>
      <Text style={styles.tempsText}>{temperature || "20"}°</Text>
      <View style={styles.boxDayNight}>
        <Text style={styles.textDay}>➚ {lever || "18h00"}</Text>
        <Text style={styles.textNight}>{coucher || "9h00"} ➘</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxPosition: {
    width: "100%",
    height: 250,
    alignContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  herosText: {
    color: "#ffffff",
    fontSize: 34,
    margin: 30,
    fontFamily: "SFProSemiboldItalic",
    marginBottom: 0,
  },
  tempsText: {
    color: "#ffffff",
    fontSize: 96,
    textAlign: "center",
    paddingLeft: 20,
    lineHeight: 110,
    fontFamily: "SFProRegular",
    margin: 0,
  },
  boxDayNight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 40,
    marginTop: -5,
  },
  textDay: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "SFProRegular",
  },
  textNight: {
    fontSize: 20,
    fontFamily: "SFProRegular",
    color: "#ffffff",
  },
});

export default Heros;
