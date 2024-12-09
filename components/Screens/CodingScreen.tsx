import { ScrollView, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";
import stylesCoding from "../../styles/CodignStyles";
import ButtonCode from "../ButtonCode";
import { handleNameProgram } from "../../funtions/handleNameProgram";
import checkAutomatonCoding from "../../funtions/handleProgramCode";
import checkAutomatonComand from "../../funtions/handleSingleComand";
import IconsButtons from "../../constants/IconsButtons";
import PickerFloor from "../PickerFloor";
import handleCompilerProgram from "../../funtions/handleCompilerProgram";

const CodingScreen = () => {
  const [nameProgram, setNameProgram] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState("Ingresa tus comandos");
  const [resultVerific, setResultVerific] = useState("Comienza tu programa");
  const [isValid, setIsValid] = useState(false);
  const [isValidCoding, setIsValidCoding] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(1);

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
            {IconsButtons.map((button, index) => (
              <ButtonCode
                key={index}
                text={button.text}
                icon={button.icon}
                iconType={button.iconType}
              />
            ))}
          </View>
        </ScrollView>
        <View style={stylesCoding.containerCode}>
          {/* <Button
            title="Compilar"
            onPress={() =>
              handleCompilerProgram(
                selectedFloor,
                setSelectedFloor,
                nameProgram,
                isValidCoding,
                code
              )
            }
          /> */}
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
