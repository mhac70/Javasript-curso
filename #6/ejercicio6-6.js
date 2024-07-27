
console.log("1.......Sumar")
console.log("2.......Restar")
console.log("3.......Salir")

let n1 = prompt("Ingrese un numero", "Numero")
let n2 = prompt("Ingrese otro numero", "numero")
let tot = 0
let op = prompt("Elija la operacion que desea", "del 1 al 3")

switch (op) {
    case '1':
        tot = parseFloat(n1) + parseFloat(n2)
        console.log("El resultado de la suma es ====> " + tot)
        break;
    case '1':
        tot = parseFloat(n1) - parseFloat(n2)
        console.log("El resultado de la resta es ====> " + tot)
        break;
    default:
        break;
}