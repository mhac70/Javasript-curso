let telefono = "1234¡5678";
let tel = Number(telefono);
console.log(typeof tel);

let telefono = "1234¡5678";
let tel = Number(telefono);
console.log(telefono.split("¡"));  // split separa la cadena donde encuentra el caracter


let telefono = "1234-5678";
let tel = Number(telefono);
console.log(telefono.replace("-","")) // replace remplaza el caracter indicado por otro caracter




let telefono2="1234¡5678";
let tel2=parseInt(telefono2);
console.log(typeof tel2); // el typeof muestra el tipo de dato de la variable

let cantidadbultos="55.2 bultos";
let cantidadParseada=parseFloat(cantidadbultos);
console.log(cantidadParseada);

