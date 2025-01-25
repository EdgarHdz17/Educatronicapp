import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import stylesSimulation from "../../styles/SimulationStyles";
import SVGSimulation from "../SVG/ElevatorSimulation";
import { Dimensions } from "react-native";
import { levelsElevator, doorElevator } from "../../constants/ElevatorContants";
import { Alert } from "react-native";
import upLevelSound from "../../funtions/upLevelSound";
import downLevelSound from "../../funtions/downLevelSound";
import openDoorSound from "../../funtions/openDoorSound";
import closeDoorSound from "../../funtions/closeDoorSound";
import stopSound from "../../funtions/stopSound";

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
  function closeDoor() {
    if (currentDoorElevator === doorElevator[1]) {
      Alert.alert("Puerta cerrada", "No se puede cerrar la puerta");
    } else {
      console.log("Cerrando puertas");
      setCurrentDoorElevator(doorElevator[1]);
      console.log("Deteniendo puertas");
      closeDoorSound();
    }
  }

  //Funcion para abrir puerta
  function openDoor() {
    if (currentDoorElevator === doorElevator[0]) {
      Alert.alert("Puerta abierta", "No se puede abrir la puerta");
    } else {
      console.log("Abriendo puertas");
      setCurrentDoorElevator(doorElevator[0]);
      console.log("Deteniendo puertas");
      openDoorSound();
    }
  }

  //Funcion para recorrer el elevador de 1 en 1 cada que se presiona el boton subir
  function upNextLevelElevator() {
    if (currentDoorElevator === doorElevator[0]) {
      Alert.alert("Puerta abierta", "No se puede subir con la puerta abierta");
    } else {
      setCurrentLevelXElevator((prevLevel) => {
        const currentIndex = levelsElevator.indexOf(prevLevel);
        if (currentIndex < levelsElevator.length - 1) {
          const nextLevel = levelsElevator[currentIndex + 1];
          console.log(
            `Subiendo al nivel ${levelsElevator.indexOf(nextLevel) + 1}`
          );
          upLevelSound();
          return nextLevel;
        } else {
          Alert.alert("Nivel Máximo", "Ya no se puede subir más");
          return prevLevel;
        }
      });
    }
  }

  //Funcion para recorrer el elevador de 1 en 1 cada que se presiona el boton bajar
  function downNextLevelElevator() {
    if (currentDoorElevator === doorElevator[0]) {
      Alert.alert("Puerta abierta", "No se puede bajar con la puerta abierta");
    } else {
      setCurrentLevelXElevator((prevLevel) => {
        const currentIndex = levelsElevator.indexOf(prevLevel);
        if (currentIndex > 0) {
          const nextLevel = levelsElevator[currentIndex - 1];
          console.log(
            `Bajando al nivel ${levelsElevator.indexOf(nextLevel) + 1}`
          );
          downLevelSound();
          return nextLevel;
        } else {
          Alert.alert("Nivel Minimo", "Ya no se puede bajar más");
          return prevLevel;
        }
      });
    }
  }

  return (
    <View style={stylesSimulation.container}>
      <View style={stylesSimulation.controlContainer}>
        <TouchableOpacity onPress={upNextLevelElevator}>
          <Text>Subir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={downNextLevelElevator}>
          <Text>Bajar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openDoor}>
          <Text>Abrir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeDoor}>
          <Text>Cerrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={stopSound}>
          <Text>Detener</Text>
        </TouchableOpacity>
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
