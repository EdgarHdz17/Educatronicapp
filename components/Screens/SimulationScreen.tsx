import { View } from "react-native";
import React, { useState } from "react";
import stylesSimulation from "../../styles/SimulationStyles";
import SVGSimulation from "../SVG/ElevatorSimulation";
import { Dimensions } from "react-native";
import { levelsElevator, doorElevator } from "../../constants/ElevatorContants";
import stopSound from "../../funtions/stopSound";
import upNextLevelElevator from "../../funtions/Animation/UpNextLevel";
import downNextLevelElevator from "../../funtions/Animation/DownNextLevel";
import closeDoor from "../../funtions/Animation/CloseDoor";
import openDoor from "../../funtions/Animation/OpenDoor";
import ButtonControl from "../ButtonControl";

const SimulationScreen = () => {
  const sectionBuildWidth = Dimensions.get("window").width;
  const sectionBuildHeight = Dimensions.get("window").height * 0.7;
  const [currentLevelXElevator, setCurrentLevelXElevator] = useState(
    levelsElevator[0]
  );
  const [currentDoorElevator, setCurrentDoorElevator] = useState(
    doorElevator[1]
  );

  //Funcion para cerrar puerta
  const handleCloseDoor = () => {
    closeDoor(currentDoorElevator, setCurrentDoorElevator);
  };

  //Funcion para abrir puerta
  const handleDoorOpen = () => {
    openDoor(currentDoorElevator, setCurrentDoorElevator);
  };

  //Funcion para recorrer el elevador de 1 en 1 cada que se presiona el boton subir
  const handleNextLevelElevator = () => {
    upNextLevelElevator(setCurrentLevelXElevator);
  };

  //Funcion para recorrer el elevador de 1 en 1 cada que se presiona el boton bajar
  const handleDownNextLevelElevator = () => {
    downNextLevelElevator(currentLevelXElevator, setCurrentLevelXElevator);
  };

  return (
    <View style={stylesSimulation.container}>
      <View style={stylesSimulation.controlContainer}>
        <ButtonControl
          icon="caretup"
          iconType="AntDesign"
          textButton="Subir"
          onPress={handleNextLevelElevator}
        />
        <ButtonControl
          icon="caretdown"
          iconType="AntDesign"
          textButton="Bajar"
          onPress={handleDownNextLevelElevator}
        />
        <ButtonControl
          icon="door-open"
          iconType="MaterialCommunityIcons"
          textButton="Abrir"
          onPress={handleDoorOpen}
        />
        <ButtonControl
          icon="door-closed"
          iconType="MaterialCommunityIcons"
          textButton="Cerrar"
          onPress={handleCloseDoor}
        />
        <ButtonControl
          icon="stop-circle"
          iconType="FontAwesome"
          textButton="Detener"
          onPress={stopSound}
        />
      </View>
      <View style={stylesSimulation.simulationContainer}>
        <SVGSimulation
          pathHeight={sectionBuildHeight}
          pathWidth={sectionBuildWidth}
          levelXElevator={currentLevelXElevator}
          statusDoor={currentDoorElevator}
        />
      </View>
    </View>
  );
};

export default SimulationScreen;
