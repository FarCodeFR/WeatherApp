import { SearchBarProps } from "@/types/global";
import { StyleSheet, TextInput } from "react-native";

function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <TextInput
      style={styles.containerSearchBar}
      placeholder="Recherche ta ville"
      placeholderTextColor={"white"}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType="search"
      autoCorrect={false}
      autoCapitalize="words"
    />
  );
}
const styles = StyleSheet.create({
  containerSearchBar: {
    margin: 10,
    color: "white",
    paddingVertical: 15,
    borderRadius: 18,
    padding: 10,
    fontFamily: "SFProRegular",
    backgroundColor: "rgba(20,20,20,0.35)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
    overflow: "hidden",
  },
});
export default SearchBar;
