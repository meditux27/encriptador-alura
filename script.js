
function encriptar(){
    var mensajeL =document.getElementById("ingrese-texto").value.toLowerCase();

    var mensajeDes=mensajeL
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    
    
        document.getElementById("visualizar-texto").innerHTML = mensajeDes
        document.getElementById('elementos-mensaje-desencriptador').style.display = 'inline-block';
}
function desencriptar(){
    var mensajeL2 =document.getElementById("ingrese-texto").value.toLowerCase();
    
    var mensajeDes2=mensajeL2
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    
    document.getElementById("visualizar-texto").innerHTML = mensajeDes2
    document.getElementById('elementos-mensaje-desencriptador').style.display = 'inline-block';
}
function copiar(){
    var textoCopy = document.querySelector("#visualizar-texto");
    textoCopy.select();
    document.execCommand("copy");
}
function borrar(){
    document.getElementById("ingrese-texto").value = "";
    document.getElementById('elementos-mensaje-desencriptador').style.display = 'none';
}
