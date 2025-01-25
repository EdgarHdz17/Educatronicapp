import { Alert } from "react-native";

export default function handleLoadProgram(
  nameProgramSelect: string,
  programsSaveds: Array<{ nameProgram: string; inputTextCoding: string }>,
  setNameProgram: React.Dispatch<React.SetStateAction<string>>,
  setInputTextCoding: React.Dispatch<React.SetStateAction<string>>,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setProgramSelect: React.Dispatch<
    React.SetStateAction<{ nameProgram: string; inputTextCoding: string }>
  >,
  setResult: React.Dispatch<React.SetStateAction<string>>,
  setResultVerific: React.Dispatch<React.SetStateAction<string>>,
  setIsValidCoding: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedFloor: React.Dispatch<React.SetStateAction<number>>
) {
  const selectProgram = programsSaveds.find(
    (program) => program.nameProgram === nameProgramSelect
  );
  if (selectProgram) {
    setNameProgram(selectProgram.nameProgram);
    setInputTextCoding(selectProgram.inputTextCoding);
    setModalVisible(false);
    setProgramSelect(selectProgram);
    setResult("Necesito verificar tus comandos");
    setResultVerific("Da un espacio para verificar");
    setIsValidCoding(false);
    setSelectedFloor(1);
    Alert.alert("Programa cargado", "El programa ha sido cargado exitosamente");
  }
}
