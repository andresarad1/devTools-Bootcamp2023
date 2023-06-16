/*
Dibujando una X con asteriscos
Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). La X debe tener un tamaño variable según el número ingresado.
Debes implementar una función llamada drawX(tamano), donde el parámetro tamano es un número entero y dibuje la X correspondiente.
Ejemplo:
// Llamada a la función
dibujarX(5);
// Resultado esperado
// *   *
//  * *
//   *
//  * *
// *   *
En el ejemplo anterior, la función drawX() se ejecuta con el tamaño 5. El programa dibuja una X formada por asteriscos, donde el tamaño se adapta
según el número ingresado.
En este caso, se muestra una X con dimensiones 5x5.
Tu objetivo es implementar la función drawX() de manera que genere correctamente la X con asteriscos de acuerdo al tamaño especificado.

*/
function drawX(tamano) {
    // Este fragemnto código es para que la X solo tenga un punto central, exigiendo numeros impares
    // if (tamano % 2 === 0) {
    //   console.log("El tamaño debe ser un número impar.");
    //   return;
    // }
  
    for (let i = 0; i < tamano; i++) {
      let line = "";
      for (let j = 0; j < tamano; j++) {
        if (j === i || j === tamano - i - 1) {
          line += "*";
        } else {
          line += " ";
        }
      }
      console.log(line);
    }
  }

drawX(5)