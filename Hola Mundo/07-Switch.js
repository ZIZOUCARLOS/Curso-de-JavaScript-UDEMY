"use strict"
// switch = La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case , y ejecuta declaraciones asociadas a ese case , así como las declaraciones en los case que siguen
var edad = 40 ;
var imprime = "";
switch (edad) {
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad"

        //break para pasar a el siguente caso
        
        break;
        case 25:
        imprime = "Ya eres un adulto"

        break;
        case 40:
        imprime = "Crisis de los cuarenta"

        break;
        case 75:
        imprime = "Ya eres una persona Mayor"

    default:
        imprime = "Tu edad es neutra"
        break;
}
console.log(imprime);
