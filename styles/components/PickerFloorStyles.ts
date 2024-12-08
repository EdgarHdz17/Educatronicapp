import { StyleSheet } from "react-native";
import { GlobalColors } from "../GlobalColors";

const stylesPicker = StyleSheet.create({
  container: {
    height: 80,
    width: "70%",
    backgroundColor: GlobalColors.primary,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    borderRadius: 10,
  },
  itemContainer: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },
  floorText: {
    textAlign: "center",
    fontSize: 12,
    color: GlobalColors.white,
    fontWeight: "600",
  },
});

export default stylesPicker;
