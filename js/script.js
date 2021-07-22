/* construyendo */
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

/* array con todos los cuadros */
const arrayCuadros = [perro, zorro, mar, vuelo, pareja, pájaro];

/* pidiendo información al usuario */
let cuadroElegido = prompt("Ingresá el nombre del cuadro (Perro, Zorro, Mar, Vuelo, Pareja o Pájaro)");
/* let precioFinal = 0;*/
/* informar que se aplicará el descuento */
alert("Se aplicará el 10% de descuento")

/* encontrando el cuadro elegido */
/* if (CuadroElegido === perro.titulo) {
   alert("El precio final del cuadro es: $ " + (perro.precio - (perro.precio * 10 / 100)))
}  
   else if (CuadroElegido === zorro.titulo) {
      alert("El precio final del cuadro es: $ " + (zorro.precio - (zorro.precio * 10 / 100)))
   }  
   else if (CuadroElegido === mar.titulo) {
      alert("El precio final del cuadro es: $ " + (mar.precio - (mar.precio * 10 / 100)))
   }
   else if (CuadroElegido === vuelo.titulo) {
      alert("El precio final del cuadro es: $ " + (vuelo.precio - (vuelo.precio * 10 / 100)))
   }
   else if (CuadroElegido === pareja.titulo) {
      alert("El precio final del cuadro es: $ " + (pareja.precio - (pareja.precio * 10 / 100)))
   }else if (CuadroElegido === pájaro.titulo) {
      alert("El precio final del cuadro es: $ " + (pájaro.precio - (pájaro.precio * 10 / 100)))
   }
   else {
      alert("No has elegido un cuadro.")
   } */
  

   


   /* para filtrar por precios más adelante */
   /* const baratos = arrayCuadros.filter(Cuadro => Cuadro.precio < 3000);  */

