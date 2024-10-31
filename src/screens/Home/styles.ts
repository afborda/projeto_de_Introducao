import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 24
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    marginTop: -27
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 54,
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    fontSize: 16,
    color: "#FFFFFF"
  },
  buttom: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  empty: {
    color: "#fff",
    fontSize: 16,
    marginTop: 16
  }
});
