import { StyleSheet, Text, View } from "react-native";

function Favoris() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCards}>
        <Text style={styles.comingSoonText}>Prochainement</Text>
        <Text style={styles.subtitle}>
          Gardez vos villes préférées à portée de main !
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6dbfe2",
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  containerCards: {
    backgroundColor: "white",
    height: 180,
    borderRadius: 20,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  comingSoonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
});
export default Favoris;
