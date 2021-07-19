
function Cuadro (titulo, medidas, precio) {
   this.titulo = titulo;
   this.medidas = medidas;
   this.precio = precio;
}
const Perro = new Cuadro ("Perro", "75cm X 98cm", 7500)
const Zorro = new Cuadro ("Zorro", "85cm X 99cm", 6500)
const Mar = new Cuadro ("Mar", "125cm X 90cm", 5700)
const Vuelo = new Cuadro ("Vuelo", "45cm X 68cm", 2500)
const Pareja = new Cuadro ("Pareja", "75cm X 75cm", 2900)
const Pájaro = new Cuadro ("Pájaro", "45cm X 45cm", 1500)

const arrayCuadros = [Perro, Zorro, Mar, Vuelo, Pareja, Pájaro];
   
/* const baratos = arrayCuadros.filter(Cuadro => Cuadro.precio < 3000);  */

/* pidiendo información al usuario */
let CuadroElegido = prompt("Ingresá el nombre del cuadro (Perro, Zorro, Mar, Vuelo, Pareja o Pájaro)")
var PrecioFinal = 0;
alert("Se aplicará el 10% de descuento")

/* encontrando el cuadro elegido */
/* HACER CON SWITCH LPM */



