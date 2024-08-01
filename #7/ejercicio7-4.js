
let numero = 47;
do {
    let n1 = prompt("Ingrese un número; para terminar ingrese 0", "número");
    let x = parseInt(n1);

    if (x === 0) {
        alert("Has terminado el juego.");
        break; // Termina el bucle si el usuario ingresa 0
    }

    if (x === numero) {
        alert("Adivinaste el número " + numero);
    } else if (x < numero) {
        alert("El número a adivinar es mayor");
    } else {
        alert("El número a adivinar es menor" );
    }

alert(x +"  "+ numero)
} while (x !== 47);
