"user strict"

// while es una estructura de control de flujo. En concreto un tipo de estructura para crear bucles con los que ejecutar un número x de veces un bloque de código.
// Se cumprueba una condicion y despues se ejecuta un bloque de codigo
var year = 2018;

while (year <= 2051) {
    //// Se ejecuta esto
    console.log("Estamos en el año"+year);
    year++;
//Se realiza el breack para finalizar una estructura de ejecucion o control
    if (year == 2030) {
        break
    }

}

// // Do While es aquella en que el cuerpo del bucle se repite mientras que se cumple una determinada condición
// // se ejecuta el bloque de codigo y luego se comprueba la condicion

// var years = 30;

// do {
//     alert("SOLO CUANDO SEA DIFERENTE A 20")
//     years++;
    
// } while (years > 25);