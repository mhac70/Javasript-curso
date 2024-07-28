let x = 0;
let numero;
do {
    numero = prompt("Ingrese un número entero 0 para salir", "número entero");
    x = x + parseInt(numero);
} while (parseInt(numero)!==0);

alert("La suma es "+x);
