import { Alert } from "react-native";
import openDoorSound from "../openDoorSound";
import { doorElevator } from "../../constants/ElevatorContants";

export default function openDoor(
  currentDoorElevator: number,
  setCurrentDoorElevator: (door: number) => void
) {
  if (currentDoorElevator === doorElevator[0]) {
    Alert.alert("Puerta abierta", "No se puede abrir la puerta");
  } else {
    setCurrentDoorElevator(doorElevator[0]);
    openDoorSound();
  }
}
