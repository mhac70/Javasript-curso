
let n1 = prompt("Ingreser un numero", "numero");
let n2 = prompt("ingreser otro numero", "numero");
let n3 = prompt("ingresar tercer numero", "numero");

if ((parseInt(n1) > parseInt(n2)) && (parseInt(n2) > parseInt(n3))) {
    alert(n1 + "," + n2 + "," + n3);
} else if ((parseInt(n2) > parseInt(n1)) && (parseInt(n1) > parseInt(n3))) {
    alert(n2 + "," + n1 + "," + n3);
     
}
else{
    alert(n3+","+n2+","+n1);
}


