'use strict'

//Varibles VAR Y LET
// prueba con var 
var numero = 40;

if(true){
 var numero = 50;
console.log(numero); // valor= 50 
}
console.log(numero); // valor es 50 

// Let variable en bloque, variable local

var texto = (" Curso JS VictorRoblesWeb.es");
console.log(texto);

if(true){
let texto = (" Curso que esta haciendo Carlos para aprender JS ")
console.log(texto);
}
console.log(texto);