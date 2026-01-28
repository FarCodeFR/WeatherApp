import { MeteoAPI } from "../api/meteo";
import { type CoordsT, type weatherT } from "@/assets/types/global";
import Heros from "../components/Heros";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  reverseGeocodeAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import WeatherWeek from "@/components/WeatherWeek";
import Loader from "@/components/Loader";

export default function Index() {
  // Coordonnées de l'utilisateur
  const [coords, setCoords] = useState<CoordsT | null>(null);
  const [weather, setWeather] = useState<weatherT | null>(null);
  const [city, setCity] = useState<string | null>(null);
  // Meteo actuel
  const currentWeather = weather?.current_weather;
  // Lever / coucher du soleil
  const lever = weather?.daily?.sunrise?.[0]?.split("T")?.[1];
  const coucher = weather?.daily?.sunset?.[0]?.split("T")?.[1];

  // Position de l'utilisateur
  useEffect(() => {
    userPosition();
  }, []);

  async function userPosition() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: 47.21, lng: -1.55 });
    }
  }

  //  Météo ( API )
  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);
  async function fetchWeather(coordinates: CoordsT) {
    try {
      const weatherResponse = await MeteoAPI.fetchWeatherCoords(coordinates);
      setWeather(weatherResponse);
    } catch (err) {
      console.error("Impossible de charger la météo", err);
    }
  }

  // Coordonnées ( ville )
  async function fetchCity(coordinates: CoordsT) {
    const townHere = await reverseGeocodeAsync({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    });
    if (townHere.length === 0) {
      setCity("Ville inconnue");
    } else {
      setCity(townHere[0].city);
    }
  }
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
        <WeatherWeek />
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
