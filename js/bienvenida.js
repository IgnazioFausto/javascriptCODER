
let boton = document.getElementById("ingresaNombre")

boton.addEventListener("click", saludar)

function saludar(){
    var nombreSession = prompt("Hola, escribí tu nombre!");
    var parrafo = document.createElement("P");                      
    var t = document.createTextNode("¡Hola " + nombreSession + "! Espero te agrade mi obra...");    
    parrafo.appendChild(t);                                         
    document.getElementById("saludo").appendChild(parrafo);
    document.getElementById('ingresaNombre').style.display = 'none';
}





       





