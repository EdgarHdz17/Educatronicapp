import { Alert } from "react-native";
import playSound from "./playSoundElevator";

async function handleCompilerProgram(
  selectedFloor: number,
  setSelectedFloor: any,
  nameProgram: string,
  isValidCoding: boolean,
  inputTextCoding: any
) {
  if (nameProgram === "") {
    Alert.alert(
      "Falta nombre",
      "Por favor, ingresa un nombre para el programa."
    );
  } else if (inputTextCoding === "") {
    Alert.alert("Falta Codigo", "Por favor, ingresa el codigo del programa.");
  } else {
    if (!isValidCoding) {
      Alert.alert("Error", "La compilacion NO es posible, tienes errores.");
      return;
    } else {
      console.log("----------Compilacion en proceso----------");
      // setButtonDisabled(true); //Desabilitamos el boton compilar
      // setCompilationInProgress(true); //Actulizamos el estado de que se esta compilando
      // setIconCompile("clock-o"); //Cambiamos el icono de compilar mientras se compila
      if (selectedFloor !== 1) {
        console.log("Subiendo el elevador al piso...", selectedFloor);
        await playSound(
          require("../assets/audio/dtmf_2.wav"),
          selectedFloor - 1,
          1000
        );
      }

      let currentFloor = selectedFloor;
      console.log("Piso elegido:", selectedFloor);
      console.log("Piso actual:", currentFloor);
      console.log("Texto ingresado:\n", inputTextCoding);

      const floorMax = 7;
      const floorMin = 1;
      let numSeg;
      let i = 0;
      let numFloors;
      while (i < inputTextCoding.length) {
        if (inputTextCoding[i] === "I" || inputTextCoding[i] === "i") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("Comando Inicio detectado");
          playSound(require("../assets/audio/dtmf_12.wav"), 1);
          i++;
        } else if (inputTextCoding[i] === "S" || inputTextCoding[i] === "s") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          i++;
          while (inputTextCoding[i] === " ") {
            i++;
          }
          if (!isNaN(inputTextCoding[i])) {
            numFloors = parseInt(inputTextCoding[i]);
            console.log(
              "Comando Subir detectado, subiendo:",
              numFloors,
              "pisos"
            );
            for (let j = 0; j < numFloors; j++) {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              if (currentFloor < floorMax) {
                currentFloor++;
                console.log("Subiendo a piso:", currentFloor);
                setSelectedFloor(currentFloor);
                // upNextLevelElevator();
                playSound(require("../assets/audio/dtmf_2.wav"), 1);
              } else {
                console.log(
                  "El elevador no puede subir más. Límite de piso alcanzado:",
                  floorMax
                );
                Alert.alert(
                  "Piso maximo alcanzado ",
                  "Pasaremos al siguiente comando"
                );
                break;
              }
            }
          } else {
            console.log(
              "Comando Subir detectado, pero el siguiente caracter no es un número."
            );
          }
        } else if (inputTextCoding[i] === "B" || inputTextCoding[i] === "b") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          i++;
          while (inputTextCoding[i] === " ") {
            i++;
          }
          if (!isNaN(inputTextCoding[i])) {
            numFloors = parseInt(inputTextCoding[i]);
            console.log(
              "Comando Bajar detectado, bajando:",
              numFloors,
              "pisos"
            );
            for (let j = 0; j < numFloors; j++) {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              if (currentFloor > floorMin) {
                currentFloor--;
                console.log("Bajando a piso:", currentFloor);
                setSelectedFloor(currentFloor);
                // downNextLevelElevator();
                playSound(require("../assets/audio/dtmf_1.wav"), 1);
              } else {
                console.log(
                  "El elevador no puede bajar más. Límite de piso alcanzado:",
                  floorMin
                );
                Alert.alert(
                  "Piso minimo alcanzado ",
                  "Pasaremos al siguiente comando"
                );
                break;
              }
            }
          } else {
            console.log(
              "Comando Bajar detectado, pero el siguiente caracter no es un número."
            );
          }
        } else if (inputTextCoding[i] === "F" || inputTextCoding[i] === "f") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("Comando Fin detectado");
          playSound(require("../assets/audio/dtmf_d.wav"), 1);
          i++;
        } else if (inputTextCoding[i] === "P" || inputTextCoding[i] === "p") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          i++;
          while (inputTextCoding[i] === " ") {
            i++;
          }
          if (!isNaN(inputTextCoding[i])) {
            let segInicial = 0;
            numSeg = parseInt(inputTextCoding[i]);
            console.log(
              "Comando Parar detectado, parando:",
              numSeg,
              "segundos"
            );
            for (let j = 0; j < numSeg; j++) {
              segInicial++;
              await new Promise((resolve) => setTimeout(resolve, 1000));
              console.log("Pausa del:", segInicial, "segundo");
            }
          } else {
            console.log(
              "Comando Parar detectado, pero el siguiente caracter no es un número."
            );
          }
        } else if (inputTextCoding[i] === "A" || inputTextCoding[i] === "a") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("Comando Abrir detectado, abriendo puertas");
          playSound(require("../assets/audio/dtmf_8.wav"), 1);
          await new Promise((resolve) => setTimeout(resolve, 800));
          console.log("Deteniendo puertas");
          // openDoor();
          playSound(require("../assets/audio/dtmf_3.wav"), 1);
          i++;
          while (inputTextCoding[i] === " ") {
            i++;
          }
          if (!isNaN(inputTextCoding[i])) {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let segInicial = 0;
            numSeg = parseInt(inputTextCoding[i]);
            console.log("Puerta abierta por:", numSeg, "segundos");
            for (let j = 0; j < numSeg; j++) {
              segInicial++;
              await new Promise((resolve) => setTimeout(resolve, 1000));
              console.log("Apertura del:", segInicial, "segundo");
              playSound(require("../assets/audio/dtmf_3.wav"), 1);
            }
          } else {
            console.log(
              "Comando Abrir detectado, pero el siguiente caracter no es un número."
            );
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          console.log("Cerrando puertas");
          playSound(require("../assets/audio/dtmf_4.wav"), 1);
          await new Promise((resolve) => setTimeout(resolve, 800));
          console.log("Deteniendo puertas");
          // closeDoor();
          playSound(require("../assets/audio/dtmf_3.wav"), 1);
        }
        i++;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Piso final:", currentFloor);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Valores restablecidos");
      // Alert.alert("Programa terminado", "Reiniciando el elevador");
      console.log("Bajando el elevador al piso... 1");
      setSelectedFloor(1);
      // setCurrentLevelXElevator(levelsElevator[0]);
      // setIconCompile("play-circle");
      // setButtonDisabled(false);
      // setCompilationInProgress(false);
      console.log("----------Fin de la Compilacion----------");
    }
  }
}

export default handleCompilerProgram;
