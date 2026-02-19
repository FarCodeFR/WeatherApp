import { BlurView } from "expo-blur";
import { View, Text, StyleSheet } from "react-native";

function Favoris() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        <Text>Mes villes favorites</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6dbfe2",
    height: "100%",
    width: "100%",
    padding: 20,
    paddingTop: 100,
  },
  containerCards: {
    backgroundColor: "white",
    height: 150,
    borderRadius: 20,
    padding: 10,
    width: "100%",
  },
});
export default Favoris;
