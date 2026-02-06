import { View, Text, StyleSheet } from "react-native";

function Favoris() {
  return (
    <View style={styles.container}>
      <Text>Mes villes favorites</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6dbfe2",
    height: "100%",
    width: "100%",
  },
});
export default Favoris;
