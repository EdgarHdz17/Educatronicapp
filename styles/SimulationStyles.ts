import { StyleSheet } from "react-native";

const stylesSimulation = StyleSheet.create({
  container: {
    flex: 1,
  },
  controlContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
    width: "100%",
    paddingHorizontal: 10,
  },
  simulationContainer: {
    flex: 10,
  },
});

export default stylesSimulation;
