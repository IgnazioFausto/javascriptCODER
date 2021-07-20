/* construyendo */
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

/* array con todos los cuadros */
const arrayCuadros = [Perro, Zorro, Mar, Vuelo, Pareja, Pájaro];

/* pidiendo información al usuario */
let CuadroElegido = prompt("Ingresá el nombre del cuadro (Perro, Zorro, Mar, Vuelo, Pareja o Pájaro)")
var PrecioFinal = 0;

/* informar que se aplicará el descuento */
alert("Se aplicará el 10% de descuento")

/* encontrando el cuadro elegido */
if (CuadroElegido === Perro.titulo) {
   alert("El precio final del cuadro es: $ " + (Perro.precio - (Perro.precio * 10 / 100)))
}  
   else if (CuadroElegido === Zorro.titulo) {
      alert("El precio final del cuadro es: $ " + (Zorro.precio - (Zorro.precio * 10 / 100)))
   }  
   else if (CuadroElegido === Mar.titulo) {
      alert("El precio final del cuadro es: $ " + (Mar.precio - (Mar.precio * 10 / 100)))
   }
   else if (CuadroElegido === Vuelo.titulo) {
      alert("El precio final del cuadro es: $ " + (Vuelo.precio - (Vuelo.precio * 10 / 100)))
   }
   else if (CuadroElegido === Pareja.titulo) {
      alert("El precio final del cuadro es: $ " + (Pareja.precio - (Pareja.precio * 10 / 100)))
   }else if (CuadroElegido === Pájaro.titulo) {
      alert("El precio final del cuadro es: $ " + (Pájaro.precio - (Pájaro.precio * 10 / 100)))
   }
   else {
      alert("No has elegido un cuadro.")
   }
   


   /* para filtrar por precios más adelante */
   /* const baratos = arrayCuadros.filter(Cuadro => Cuadro.precio < 3000);  */

