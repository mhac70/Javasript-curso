
let n1 = prompt("ingrese un numero", "un numero");
let n2 = prompt("Ingrese otro numero", "otro numero");



let resultado=0

n1=parseFloat(n1)
n2=parseFloat(n2)
console.log("1........Sumar")
console.log("2........Restar")
console.log("3........Multiplicar")
console.log("4........Dividir")
console.log("5........Salir")

let op = prompt("elija su opción del 1 al 5","del 1 al 5");
let opn=parseInt(op);
switch (opn) {
    case 1:
        resultado=n1+n2;
        console.log("El resultado de la suma es ===> ", resultado);
        break;
    case 2:
        resultado=n1-n2;
        console.log("El resultado de la resta es ===> ", resultado);
        break;
    case 3:
        resultado=n1*n2;
        console.log("El resultado de la Multiplicación es ===> ", resultado);
        break;
    case 4:
        resultado=n1/n2;
        console.log("El resultado de la resta es ===> ", resultado);
        break;

    default:
        break;
}