import { ScrollView, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";
import stylesCoding from "../../styles/CodignStyles";
import ButtonCode from "../ButtonCode";
import { handleNameProgram } from "../../funtions/handleNameProgram";
import checkAutomatonCoding from "../../funtions/handleProgramCode";
import checkAutomatonComand from "../../funtions/handleSingleComand";
import PickerFloor from "../PickerFloor";
import handleCompilerProgram from "../../funtions/handleCompilerProgram";
import handleSaveProgram from "../../funtions/handleSaveProgram";

const CodingScreen = () => {
  const [nameProgram, setNameProgram] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("Ingresa tus comandos");
  const [resultVerific, setResultVerific] = useState("Comienza tu programa");
  const [isValid, setIsValid] = useState();
  const [isValidCoding, setIsValidCoding] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [programsSaveds, setProgramsSaveds] = useState([]);
  const [programSelect, setProgramSelect] = useState(null);

  return (
    <View style={stylesCoding.container}>
      <View style={stylesCoding.headerContainer}>
        <TextInput
          onChangeText={(text) => handleNameProgram(text, setNameProgram)}
          value={nameProgram}
          style={stylesCoding.inputName}
          placeholder="Nombra tu programa aquí"
        ></TextInput>
      </View>
      <View style={stylesCoding.statusTextContainer}>
        <Text>{resultVerific}</Text>
        <Text>{result}</Text>
        <Text>{isValid ? "Comando valido" : "Comando invalido"}</Text>
      </View>
      <View style={stylesCoding.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={stylesCoding.containerButtons}>
            <PickerFloor
              selectedFloor={selectedFloor}
              setSelectedFloor={setSelectedFloor}
            />
            <ButtonCode
              icon="play-circle"
              textButton="Compilar"
              iconType={"FontAwesome5"}
              onPress={() =>
                handleCompilerProgram(
                  selectedFloor,
                  setSelectedFloor,
                  nameProgram,
                  isValidCoding,
                  code
                )
              }
            />
            <ButtonCode
              icon="usb-port"
              textButton="Guardar"
              iconType={"MaterialCommunityIcons"}
              onPress={() => {
                handleSaveProgram(nameProgram, code, [], () =>
                  console.log("Programa guardado")
                );
              }}
            />
            <ButtonCode
              icon="file-upload"
              textButton="Cargar"
              iconType={"FontAwesome5"}
              onPress={() => {
                console.log("Compilando");
              }}
            />
            <ButtonCode
              icon="trash"
              textButton="Borrar"
              iconType={"FontAwesome6"}
              onPress={() => {
                console.log("Compilando");
              }}
            />
            <ButtonCode
              icon="play-circle"
              textButton="Compilar"
              iconType={"FontAwesome5"}
              onPress={() => {
                console.log("Compilando");
              }}
            />
            <ButtonCode
              icon="gamepad"
              textButton="ver simulación"
              iconType={"FontAwesome5"}
              onPress={() => {
                console.log("Compilando");
              }}
            />
            <ButtonCode
              icon="question-circle"
              textButton="Ayuda"
              iconType={"FontAwesome"}
              onPress={() => {
                console.log("Compilando");
              }}
            />
          </View>
        </ScrollView>
        <View style={stylesCoding.containerCode}>
          <TextInput
            onChangeText={(text) => {
              setCode(text);
              checkAutomatonComand(text, setIsValid, setResult);
              checkAutomatonCoding(text, setIsValidCoding, setResultVerific);
            }}
            value={code}
            style={stylesCoding.inputCode}
            placeholder="Escribe el codigo de tu programa aquí"
            multiline={true}
            textAlignVertical="top"
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default CodingScreen;
