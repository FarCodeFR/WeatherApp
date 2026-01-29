import React, { useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CustomBackground from "./BgSheet";
import HourlyForecast from "./HourlyForecast";
import { ScrollSheetProps } from "@/assets/types/global";

const ScrollSheet = ({ coords }: ScrollSheetProps) => {
  // hooks
  const snapPoints = useMemo(() => ["95%"], []);
  // le tableau est le même en mémoire
  // BottomSheet reste stable
  // éviter de recréer snapPoints à chaque render

  // callbacks
  // Même logique que useMemo, mais pour les fonctions.
  const handleSheetChange = useCallback(() => {
    console.log("handleSheetChange");
  }, []);

  return (
    <GestureHandlerRootView style={styles.containerPrincipal}>
      <BottomSheet
        index={0}
        backgroundComponent={CustomBackground}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
        handleComponent={null}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {coords ? <HourlyForecast coords={coords} /> : null}{" "}
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
