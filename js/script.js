/* SIMULADOR: Calcular precio final aplicando un 10% de descuento */

/* inicializo variables */
//let costoCuadro = prompt("Ingresá el precio del cuadro:")/* pido el dato */
//let descuento = (costoCuadro) * 10 / 100;
//let costoFinal = 0;

/* declaro función */
//function aplicarDescuento (){
   //let costoFinal = costoCuadro - descuento;
   //alert("El precio final con 10% de descuento es: $ " + costoFinal)/* muestro */}
/* llamo a la función pasándole los parámetros necesarios */
//aplicarDescuento(costoCuadro, descuento)

function Cuadro (titulo, medidas, precio) {
   this.titulo = titulo;
   this.medidas = medidas;
   this.precio = precio;
}
const Cuadro1 = new Cuadro ("Perro Salchicha", "75cm X 98cm", 7500)
const Cuadro2 = new Cuadro ("Zorro de Fuego", "85cm X 99cm", 6500)
const Cuadro3 = new Cuadro ("Mar", "125cm X 90cm", 5700)
const Cuadro4 = new Cuadro ("Vuelo", "45cm X 68cm", 2500)
const Cuadro5 = new Cuadro ("Pareja", "75cm X 75cm", 5200)
const Cuadro6 = new Cuadro ("Pájaro", "45cm X 45cm", 1500)


console.log(Cuadro1, Cuadro2, Cuadro3, Cuadro4, Cuadro5, Cuadro6)





