import { Alert } from "react-native";

export default function handleSaveProgram(
  nameProgram: string,
  inputTextCoding: string,
  programsSaveds: Array<{ nameProgram: string; inputTextCoding: string }>,
  setProgramsSaveds: React.Dispatch<
    React.SetStateAction<{ nameProgram: string; inputTextCoding: string }[]>
  >
) {
  if (nameProgram === "") {
    Alert.alert(
      "Falta nombre",
      "Por favor, ingresa un nombre para el programa."
    );
  } else if (inputTextCoding === "") {
    Alert.alert("Falta Codigo", "Por favor, ingresa el codigo del programa.");
  } else {
    // Verificar si el programa ya existe en la lista
    const isDuplicate = programsSaveds.some(
      (program) => program.nameProgram === nameProgram
    );
    if (isDuplicate) {
      Alert.alert(
        "Nombre duplicado",
        "Ya existe un programa con el mismo nombre. Por favor, ingresa un nombre diferente."
      );
    } else {
      const programfind = {
        nameProgram: nameProgram,
        inputTextCoding: inputTextCoding,
      };
      setProgramsSaveds([...programsSaveds, programfind]);
      Alert.alert(
        "Programa guardado",
        "El programa ha sido guardado exitosamente"
      );
    }
  }
}
