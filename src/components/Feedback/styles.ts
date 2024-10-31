import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginTop: 32,
    justifyContent: "space-between"
  },
  containerTextBlue: {
    flex: 1,
    flexDirection: "row"
  },
  containerTextPurple: {
    flexDirection: "row"
  },

  textBlue: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Inter"
  },

  textPurple: {
    color: "#8284FA",
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Inter"
  },

  containerNumber: {
    height: 19,
    width: 25,
    backgroundColor: "#333333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8
  },
  number: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "bold"
  },
  line: {
    height: 2,
    backgroundColor: "#4A4A4A",
    width: "100%",
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 16
  }
});
