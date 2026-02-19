import { ScrollSheetProps } from "@/types/global";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomBackground from "./BgSheet";
import HourlyForecast from "./HourlyForecast";
import SearchBar from "./SearchBar";
import WeekForcast from "./WeekForecast";
import LoaderComponents from "./LoaderComponents";

const ScrollSheet = ({
  sunriseISO,
  sunsetISO,
  weather,
  searchCity,
}: ScrollSheetProps) => {
  const [cityText, setCityText] = useState("");

  const snapPoints = useMemo(() => ["95%"], []);

  // function pour récupérer les infos de la barre de recherche
  // en enlevant les espaces et en réinitialisant le state une fois envoyé
  const handleSubmit = useCallback(() => {
    const cityName = cityText.trim();
    if (!cityName) {
      console.log("Erreur lors de la récupération de la ville");
      return;
    } else {
      searchCity(cityName);
      setCityText("");
    }
  }, [cityText, searchCity]);

  const handleSheetChange = useCallback((index: number) => {
    console.log("BottomSheet index:", index);
  }, []);

  const hourly = weather?.hourly;
  const daily = weather?.daily;

  return (
    <GestureHandlerRootView style={styles.containerPrincipal}>
      <BottomSheet
        index={0}
        backgroundComponent={CustomBackground}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        handleComponent={null}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            styles.contentContainer,
            { paddingBottom: 80 },
          ]}
        >
          {hourly ? (
            <HourlyForecast
              hourly={hourly}
              sunriseISO={sunriseISO}
              sunsetISO={sunsetISO}
            />
          ) : (
            <LoaderComponents />
          )}
          {daily ? <WeekForcast daily={daily} /> : <LoaderComponents />}
          <SearchBar
            value={cityText}
            onChange={setCityText}
            onSubmit={handleSubmit}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    margin: 0,
  },
  contentContainer: {
    flexGrow: 1,
    alignSelf: "center",
    color: "white",
    width: "90%",
  },
  contentText: {
    color: "white",
    textAlign: "center",
  },
});

export default ScrollSheet;
