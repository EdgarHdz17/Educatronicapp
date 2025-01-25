import { levelsElevator } from "../../constants/ElevatorContants";
import { Alert } from "react-native";
import upLevelSound from "../upLevelSound";

export default function upNextLevelElevator(
  setCurrentLevelXElevator: (
    level: number | ((prevLevel: number) => number)
  ) => void
) {
  setCurrentLevelXElevator((prevLevel: number) => {
    const currentIndex = levelsElevator.indexOf(prevLevel); // Obtiene el índice del nivel actual en el arreglo de niveles del elevador
    if (currentIndex < levelsElevator.length - 1) {
      // Verificamos si no estamos en el último nivel
      const nextLevel = levelsElevator[currentIndex + 1]; //Recorre el siguiene nivel
      upLevelSound(); //Ejecuta el sonido de subir nivel
      return nextLevel; // Devolvemos el siguiente nivel
    } else {
      Alert.alert("Nivel Máximo", "Ya no se puede subir más");
      return prevLevel; //Devuelve el nivel 7
    }
  });
}
