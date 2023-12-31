/* 
Crear un número de teléfono

Escribe una función que acepte un array con 10 números enteros positivos (entre 0 y 9) y devuelva una cadena de texto con esos números en 
forma de número de teléfono.
Ejemplo:
createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-7890"
createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) => devuelve "(305) 127-7249"

El formato del número de teléfono devuelto debe ser correcto para completar este desafío. ¡No olvides el espacio después 
del paréntesis de cierre!
*/
function createPhoneNumber(array) {

    if(array.length === 10 && array.every(num => num >= 0 && num <= 9)){
        array = array.join("").toString()
        let format = "(" + array.slice(0,3) + ") " + array.slice(3, 6) + "-" + array.slice(6, array.length)
        console.log(format);
        return format
    }else{
        console.log("tu array no es correcto, deber ser de 10 números enteros positivos entre 0 y 9")
    }
}

createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0])
createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) 

