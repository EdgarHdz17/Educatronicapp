import { StyleSheet } from "react-native";
import { GlobalColors } from "../GlobalColors";

const stylesButtonControl = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    backgroundColor: GlobalColors.primary,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textButton: {
    fontSize: 12,
    width: 80,
    textAlign: "center",
    fontWeight: "600",
    color: GlobalColors.white,
  },
});

export default stylesButtonControl;
