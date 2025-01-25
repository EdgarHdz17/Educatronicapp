function automatonCoding(input: any, setResultVerific: any) {
  let currentState = 0; // El estado inicial es 0
  setResultVerific("Comienza tu programa"); //El valor de result es NULL
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    switch (currentState) {
      case 0: // Estado 0
        if (char === "I" || char === "i") {
          currentState = 1; // Forzamos a que nuestro primer estado sea I o i, si es asi va al estado 1
          setResultVerific("Tu código va por buen camino");
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de I o i
        } else {
          setResultVerific("Debes iniciar con el comando I o i");
          return false; // Si no es invalido
        }
        break;
      case 1: // Estado 1
        if (char === "\n") {
          currentState = 2; // Si hay un espacio o mas, pasa al estado 2
          setResultVerific("Tu código va por buen camino");
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de un enter
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no hay un enter, el input es inválido y mencina el error del Automata para los comandos
        }
        break;
      case 2: // Estado 2
        if (char === "\n") {
          continue; // Permite más saltos de línea sin cambiar de estado
        } else if (
          char === "S" ||
          char === "s" ||
          char === "B" ||
          char === "b"
        ) {
          currentState = 3; // Si char es S,s o B,b pasa al estado 3
          setResultVerific("Tu código va por buen camino");
        } else if (
          char === "P" ||
          char === "p" ||
          char === "A" ||
          char === "a"
        ) {
          currentState = 4; //Si char es A,a o P,p pasa al estado 4
        } else if (char === "I" || char === "i") {
          setResultVerific("Error ya haz colacado un comando Inicio");
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de S,s,B,b,P,p,A,a
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no es invalido
        }
        break;
      case 3: // Estado 3
        if (char === " ") {
          currentState = 5; // Si hay un espacio o mas, pasa al estado 5
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no hay un espacio, el input es inválido
        }
        break;
      case 4: // Estado 4
        if (char === " ") {
          currentState = 6; // Si hay un espacio o mas, pasa al estado 6
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no hay un espacio, el input es inválido
        }
        break;
      case 5: // Estado 5
        if (char > 0 && char < 7) {
          currentState = 7; // Si char es mayor a 0 y menor 8, pasar al estado 7
          setResultVerific("Tu código va por buen camino");
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de elegir piso
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no hay un numero mayor y menor  de 0 a 8 regresa un invalido
        }
        break;
      case 6: // Estado 6
        if (char > 0 && char < 10) {
          currentState = 7; // Si char es mayor a 0 y menor a 10, pasar al estado 7
          setResultVerific("Tu código va por buen camino");
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antesde elegir el tiempo
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no hay un numero mayor y menor  de 0 a 8 regresa un invalido
        }
        break;
      case 7: // Estado 7
        if (char === "\n") {
          currentState = 8; // Si char es un enter pasa al estado 8 si es que continua ingresando comandos
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de dar enter
        } else {
          setResultVerific("Tu código tiene errores");
          return false; // Si no hay salto de linea el input es invalido
        }
        break;
      case 8: // Estado 8
        if (char === "\n") {
          continue; // Permite más saltos de línea sin cambiar de estado
        } else if (char === "F" || char === "f") {
          currentState = 9; // Si char es un enter pasa al estado 9
          setResultVerific("La estructura de tu código es correcta");
        } else if (char === " ") {
          continue; //Continua en el estado 8 si hay espacios antes de F
        } else if (
          char === "S" ||
          char === "s" ||
          char === "B" ||
          char === "b"
        ) {
          currentState = 3; //Si char es A,a o P,p pasa al estado 3
        } else if (
          char === "P" ||
          char === "p" ||
          char === "A" ||
          char === "a"
        ) {
          currentState = 4; //Si char es A,a o P,p pasa al estado 4
        } else if (char === "I" || char === "i") {
          setResultVerific("Error ya tienes un comando Inicio");
        } else {
          setResultVerific("Debes terminar con F o f");
          return false;
        }
        break;
      case 9:
        if (char === "\n") {
          currentState = 9;
        } else if (char === " ") {
          continue;
        } else {
          setResultVerific("Error ya haz colocado un comando Fin");
          return false;
        }
        break;
    }
  }
  return currentState === 9;
}

function checkAutomatonCoding(
  text: any,
  setIsValidCoding: any,
  setResultVerific: any
) {
  const isValidCoding = automatonCoding(text, setResultVerific);
  setIsValidCoding(isValidCoding);
}

export default checkAutomatonCoding;
