import { Alert } from "react-native";

export const handleNameProgram = (
  text: string,
  setNameProgram: (text: string) => void
) => {
  if (text.length <= 20) {
    setNameProgram(text);
  } else {
    Alert.alert("Advertencia", "El nombre no puede superar los 20 caracteres");
    setNameProgram(text.substring(0, 20));
  }
};
