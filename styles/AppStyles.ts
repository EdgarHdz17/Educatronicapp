import { StyleSheet } from "react-native";
import { GlobalColors } from "./GlobalColors";

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.primary,
  },
});

export default stylesApp;
