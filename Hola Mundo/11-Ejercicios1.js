"user strict"

//Ejercicio 1 

// programa que pida dos numeros y que nos diga cual es el menor y si son iguales
//PULS : 
var numero1 = parseInt (prompt("Introduce el primer numero, 0"));
var numero2 = parseInt (prompt("Introduce el segundo numero, 0"));

//isNaN devulve un true o un false dependinedo de lo que tiene la condicion que esta dentro de esa funcion, en este caso es un numero por lo tanto devolvera un true 
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt (prompt("Introduce el primer numero, 0"));
    numero2 = parseInt (prompt("Introduce el segundo numero, 0"));
}
//console.log(numero1, numero2);

if (numero1 == numero2) {
    alert("LOS NUMEROS SON IGUALES ");
}else if (numero1 > numero2) {
    alert("El numero mayor es" + numero1);
    alert("El numero menor es" + numero2);
}else if (numero2 > numero1) {
    alert("El numero mayor es" + numero2);
    alert("El numero menor es" + numero1);
    
}else{
    alert("Introduce numeros correctos");
}