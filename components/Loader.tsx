import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";

function Loader() {
  return (
    <ImageBackground
      source={require("../assets/images/background/bg-night.png")}
      style={styles.container}
      resizeMode="cover"
      blurRadius={5}
    >
      <ActivityIndicator size="large" color="#00ff00" />
      <Text style={styles.message}>Connexion interrompue</Text>
    </ImageBackground>
  );
}
// Si pas de réseau
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 24,
  },
});

export default Loader;
