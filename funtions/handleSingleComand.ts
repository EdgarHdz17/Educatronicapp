function automatonComands(input: any, setResult: any) {
  let currentState = 0; // El estado inicial es 0
  setResult("Ingresa tus comandos"); //El valor de result es NULL
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    switch (currentState) {
      case 0: // Estado 0
        if (char === "S" || char === "s") {
          currentState = 1; // Si char es S o s pasa al estado 1
          setResult("Comando Subir detectado");
        } else if (char === "B" || char === "b") {
          currentState = 1; //Si char es B o b pasa al estado 1
          setResult("Comando Bajar detectado");
        } else if (char === "P" || char === "p") {
          currentState = 3; //Si char es P o p pasa al estado 3
          setResult("Comando Parar detectado");
        } else if (char === "A" || char === "a") {
          currentState = 3; //Si char es A o a pasa al estado 3
          setResult("Comando Abrir detectado");
        } else if (char === "I" || char === "i") {
          currentState = 5; //Si char es I o i pasa al estado 5
          setResult("Comando Inicio detectado");
        } else if (char === "F" || char === "f") {
          currentState = 6; //Si char es F o f pasa al estado 6
          setResult("Comando Fin detectado");
        } else if (char === "\n") {
          setResult("Comando Enter detectado");
          continue; //Continua en el estado si hay espacios antes de cualquier caracter
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de cualquier caracter
        } else {
          setResult(
            `Invalido: El símbolo '${char}' no pertenece al lenguaje de comandos`
          );
          return false; // Si no es invalido
        }
        break;
      case 1: // Estado 1
        if (char === " ") {
          currentState = 2; // Si hay un espacio o mas, pasa al estado 2
          setResult("Sintaxis valida");
        } else {
          setResult("Invalido: Debe haber un espacio despues del comando");
          return false; // Si no hay un espacio, el input es inválido
        }
        break;
      case 2: // Estado 2
        if (char > 0 && char < 7) {
          currentState = 5; // Si char es mayor a 0 y menor 7, pasar al estado 5
          setResult(`Piso '${char}' detectado`);
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antes de elegir piso
        } else {
          setResult(`Invalido: El numero '${char}' no corresponde a un piso`);
          return false; // Si no hay un numero mayor y menor  de 0 a 8 regresa un invalido
        }
        break;
      case 3: // Estado 3
        if (char === " ") {
          currentState = 4; // Si hay un espacio o mas, pasa al estado 4
          setResult("Sintaxis valida");
        } else {
          setResult("Invalido: Debe haber un espacio despues del comando");
          return false; // Si no hay un espacio, el input es inválido
        }
        break;
      case 4: // Estado 4
        if (char > 0 && char < 10) {
          currentState = 5; // Si char es mayor a 0 y menor que 10, pasa al estado 5
          setResult(`Tiempo '${char}' detectado`);
        } else if (char === " ") {
          continue; //Continua en el estado si hay espacios antesde elegir el tiempo
        } else {
          setResult(`Invalido tiempo '${char}' NO valido`);
          return false; // Si no hay un numero mayor de 0 y menor que 10 regresa un invalido
        }
        break;
      case 5: // Estado 5
        if (char === "\n") {
          setResult("Sintaxis valida");
          currentState = 0; // Si char es un enter pasa al estado 0
        } else if (char === " ") {
          setResult("Sintaxis valida");
          continue; //Continua en el estado si hay espacios antes de dar enter
        } else {
          setResult("Invalido: Debe haber un enter");
          return false; // Si no hay salto de linea el input es invalido
        }
        break;
      case 6: // Estado 6
        if (char === "\n") {
          setResult("Sintaxis valida");
        } else if (char === " ") {
          setResult("Sintaxis valida");
          continue; //Continua en el estado si hay espacios antes de dar enter
        } else {
          setResult("Sintaxis invalida");
          return false; // Si no hay salto de linea el input es invalido
        }
        break;
    }
  }
}

function checkAutomatonComand(text: string, setIsValid: any, setResult: any) {
  const isValid = automatonComands(text, setResult);
  setIsValid(isValid);
}

export default checkAutomatonComand;
