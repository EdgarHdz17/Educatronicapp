import { StyleSheet } from "react-native";

const stylesSimulation = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
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
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
});

export default stylesSimulation;
