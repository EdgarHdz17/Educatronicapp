import { StyleSheet } from "react-native";
import { GlobalColors } from "./GlobalColors";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.primary,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: GlobalColors.secondary,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: GlobalColors.primary,
  },
  titleText: {
    fontSize: 30,
    color: GlobalColors.white,
    fontFamily: "Roboto",
    fontWeight: "600",
  },
  lottieContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default stylesHome;
