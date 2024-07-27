let numes = prompt("ingrese el numero de su mes del año", "numero mes del 1 al 12");
let n=parseInt(numes);

switch (n) {
    case 1:
        alert("Tu mes es Enero");
        break;
    case 2:
        alert("Tu mes es Febrero");
        break;
    case 3:
        alert("Tu mes es Marzo");
        break;
    case 4:
        alert("Tu mes es Abril");
        break;
    case 5:
        alert("Tu mes es Mayo");
        break;
    case 6:
        alert("Tu mes es Junio");
        break;
    case 7:
        alert("Tu mes es Julio");
        break;
    case 8:
        alert("Tu mes es Agosto");
        break;
    case 9:
        alert("Tu mes es Septiembre");
        break;
    case 10:
        alert("Tu mes es Octubre");
        break;
    case 10:
        alert("Tu mes es Noviembre");
        break;
    case 10:
        alert("Tu mes es Diciembre");
        break;


    default:
        alert("No es un mes valido");
        break;
}