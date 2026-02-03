import { ScrollSheetProps } from "@/types/global";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomBackground from "./BgSheet";
import HourlyForecast from "./HourlyForecast";
import WeekForcast from "./WeekForcast";

const ScrollSheet = ({ weather }: ScrollSheetProps) => {
  //  useMemo évite de recréer le tableau à chaque render.
  const snapPoints = useMemo(() => ["95%"], []);
  //  useCallback évite de recréer la fonction à chaque render
  const handleSheetChange = useCallback((index: number) => {
    console.log("BottomSheet index:", index);
  }, []);
  // Les heures
  const hourly = weather?.hourly;
  // Les jours
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
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {hourly ? (
            <HourlyForecast hourly={hourly} />
          ) : (
            <Text>Chargement...</Text>
          )}
          {daily && hourly ? (
            <WeekForcast daily={daily} />
          ) : (
            <Text>Chargement...</Text>
          )}
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
