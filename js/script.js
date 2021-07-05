/* SIMULADOR: Calcular precio final aplicando un 10% de descuento */

/* inicializo variables */
let costoCuadro = prompt("Ingresá el precio del cuadro:")/* pido el dato */
let descuento = (costoCuadro) * 10 / 100;
let costoFinal = 0;

/* declaro función */
function aplicarDescuento (){
   let costoFinal = costoCuadro - descuento;
   alert("El precio final con 10% de descuento es: $ " + costoFinal)/* muestro */
}
/* llamo a la función pasándole los parámetros necesarios */
aplicarDescuento(costoCuadro, descuento)








