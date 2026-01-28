import { ImageBackground, StyleSheet, View } from "react-native";

function Loader() {
  return (
    <View style={styles.containerLoading}>
      <ImageBackground
        source={require("../assets/images/background/bg-night.png")}
        style={styles.bg_img_deco}
        resizeMode="cover"
        blurRadius={5}
      />
    </View>
  );
}
// Si pas de réseau
const styles = StyleSheet.create({
  containerLoading: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgb(92, 102, 150)",
  },
  bg_img_deco: {
    flex: 1,
    zIndex: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "10px",
  },
});

export default Loader;
