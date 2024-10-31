import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginTop: 16,
    backgroundColor: "#262626",
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 15,
    flexWrap: "wrap",
    width: 270,
    textAlign: "left"
  },

  checkbox: {
    borderRadius: 10,
    backgroundColor: "#262626"
  },

  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  }
});
