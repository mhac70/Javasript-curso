
let n1 = prompt("Ingrese un número para terminar ingrese 0", "número");
let x = parseInt(n1);

while (x > 0) {
    alert("El cuadrado es " + x * x);
    let n1 = prompt("Ingrese un número para terminar ingrese 0", "número");
    x = parseInt(n1); // Actualiza x con el nuevo valor ingresado
}