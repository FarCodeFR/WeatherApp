import { ActivityIndicator, ImageBackground, StyleSheet } from "react-native";

function LoaderComponents() {
  return (
    <ImageBackground style={styles.container} resizeMode="cover" blurRadius={5}>
      <ActivityIndicator size="large" color="rgba(255,255,255,0.85)" />
    </ImageBackground>
  );
}
// Si pas de réseau
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default LoaderComponents;
