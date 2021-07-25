
var nombre = prompt("Hola, escribí tu nombre!");
localStorage.setItem("nombre",nombre);

let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML= "¡Bienvenido " + nombre + "!"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);

/* construyendo 
function Cuadro (titulo, medidas, precio) {
   this.titulo = titulo;
   this.medidas = medidas;
   this.precio = precio;
}
const perro = new Cuadro ("Perro", "75cm X 98cm", 7500)
const zorro = new Cuadro ("Zorro", "85cm X 99cm", 6500)
const mar = new Cuadro ("Mar", "125cm X 90cm", 5700)
const vuelo = new Cuadro ("Vuelo", "45cm X 68cm", 2500)
const pareja = new Cuadro ("Pareja", "75cm X 75cm", 2900)
const pájaro = new Cuadro ("Pájaro", "45cm X 45cm", 1500)

/* array con todos los cuadros 
const arrayCuadros = [perro, zorro, mar, vuelo, pareja, pájaro];

let cuadroEncontrado = undefined;

/* Function descuento 10% 
function descuento10 () {
   return cuadroEncontrado.precio - (cuadroEncontrado.precio * 10 / 100)
}
/* buscando el cuadro 
do {
   let cuadroElegido = prompt("Ingresá el nombre del cuadro (Perro, Zorro, Mar, Vuelo, Pareja o Pájaro)");//se pide el dato

   cuadroEncontrado = arrayCuadros.find( cuadro => cuadro.titulo == cuadroElegido );
}  
   while(cuadroEncontrado == undefined);

   alert("El precio del cuadro es: $"+ cuadroEncontrado.precio)//mostrar precio sin descuento
   alert("Se aplicará el 10% de descuento")
   alert("El precio final es: $" + descuento10(cuadroEncontrado))//mostrar precio con descuento
   
   /* para filtrar por precios más adelante */
   /* const baratos = arrayCuadros.filter(Cuadro => Cuadro.precio < 3000);  */

