
var nombre = prompt("Hola, escribí tu nombre!");
var parrafo = document.createElement("P");                      
var t = document.createTextNode("¡Hola " + nombre + "! Espero te agrade mi obra...");    
parrafo.appendChild(t);                                         
document.getElementById("saludo").appendChild(parrafo);          





