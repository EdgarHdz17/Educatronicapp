import { Alert } from "react-native";
import closeDoorSound from "../closeDoorSound";
import { doorElevator } from "../../constants/ElevatorContants";

export default function closeDoor(
  currentDoorElevator: number,
  setCurrentDoorElevator: (door: number) => void
) {
  if (currentDoorElevator === doorElevator[1]) {
    Alert.alert("Puerta cerrada", "No se puede cerrar la puerta");
  } else {
    setCurrentDoorElevator(doorElevator[1]);
    closeDoorSound();
  }
}
