/*
e - enter 
o - ober 
i - imes 
u - ufat
a - ai 
*/
function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //i para que afecte minusculas y mayusculas
    //g es para toda la linea u oracion
    //m afecta multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");

    document.getElementById("img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("texto2").style.textAlign = "left";
    document.getElementById("texto2").style.margin = "1rem";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    //i para que afecte minusculas y mayusculas
    //g es para toda la linea u oracion
    //m afecta multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");

    document.getElementById("img").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("texto2").style.textAlign = "left";
    document.getElementById("texto2").style.margin = "1rem";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar() {
    var contenido = document.querySelector("#texto2")
    contenido.select();
    document.execCommand("copy");
}

