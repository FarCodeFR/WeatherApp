import { HerosProps } from "@/types/global";
import { StyleSheet, Text, View } from "react-native";

function Heros({
  interpretation,
  temperature,
  city,
  lever,
  coucher,
}: HerosProps) {
  return (
    <View style={styles.boxPosition}>
      <Text style={styles.herosText}>{city}</Text>
      <Text style={styles.tempsText}>{temperature || "20"}°</Text>
      <Text style={styles.climatText}>{interpretation.label}</Text>
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
  climatText: {
    color: "#bfbfbfdb",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "SFProRegular",
    marginTop: -10,
  },
  boxDayNight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 40,
    marginTop: 10,
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
