
function Cuadro (titulo, medidas, precio) {
   this.titulo = titulo;
   this.medidas = medidas;
   this.precio = precio;
}
const Cuadro1 = new Cuadro ("Perro Salchicha", "75cm X 98cm", 7500)
const Cuadro2 = new Cuadro ("Zorro de Fuego", "85cm X 99cm", 6500)
const Cuadro3 = new Cuadro ("Mar", "125cm X 90cm", 5700)
const Cuadro4 = new Cuadro ("Vuelo", "45cm X 68cm", 2500)
const Cuadro5 = new Cuadro ("Pareja", "75cm X 75cm", 2900)
const Cuadro6 = new Cuadro ("Pájaro", "45cm X 45cm", 1500)


const arrayCuadros = [Cuadro1, Cuadro2, Cuadro3, Cuadro4, Cuadro5, Cuadro6];
   for (let index = 0; index < arrayCuadros.length; index++) {
      console.log(arrayCuadros[index])
}

const baratos = arrayCuadros.filter(Cuadro => Cuadro.precio < 3000); 
console.log(baratos);





