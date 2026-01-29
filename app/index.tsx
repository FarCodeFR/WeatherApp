import Loader from "@/components/Loader";
import { ImageBackground, StyleSheet, View } from "react-native";
import Heros from "../components/Heros";
import { useUserPosition } from "../hooks/useUserPosition";
import { useWeather } from "@/hooks/useWeather";
import { useCity } from "@/hooks/useCity";
import ScrollSheet from "@/components/ScrollSheet";

export default function Index() {
  const coords = useUserPosition();
  const weather = useWeather(coords);
  const city = useCity(coords);

  const currentWeather = weather?.current_weather;
  // Lever / coucher du soleil
  const lever = weather?.daily?.sunrise?.[0]?.split("T")?.[1];
  const coucher = weather?.daily?.sunset?.[0]?.split("T")?.[1];

  return currentWeather ? (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background/bg-night.png")}
        style={styles.bg_img_co}
        resizeMode="cover"
      >
        <Heros
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          lever={lever}
          coucher={coucher}
        />
        <ScrollSheet coords={coords} />
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
  },
});
