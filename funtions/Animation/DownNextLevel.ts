import { Alert } from "react-native";
import downLevelSound from "../downLevelSound";
import { levelsElevator, doorElevator } from "../../constants/ElevatorContants";

export default function downNextLevelElevator(
  currentDoorElevator: number,
  setCurrentLevelXElevator: (
    level: number | ((prevLevel: number) => number)
  ) => void
) {
  if (currentDoorElevator === doorElevator[0]) {
    Alert.alert("Puerta abierta", "No se puede bajar con la puerta abierta");
  } else {
    setCurrentLevelXElevator((prevLevel) => {
      const currentIndex = levelsElevator.indexOf(prevLevel);
      if (currentIndex > 0) {
        const nextLevel = levelsElevator[currentIndex - 1];
        downLevelSound();
        return nextLevel;
      } else {
        Alert.alert("Nivel Minimo", "Ya no se puede bajar más");
        return prevLevel;
      }
    });
  }
}
