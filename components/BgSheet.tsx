import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import { View, StyleSheet } from "react-native";

const CustomBackground = ({ style }: BottomSheetBackgroundProps) => {
  return <View style={[styles.background, style]} />;
};

const styles = StyleSheet.create({
  background: {
    backdropFilter: "transparent",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});

export default CustomBackground;
