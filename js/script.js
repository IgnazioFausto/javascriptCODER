let nombreIngresado = prompt("Ingresá tu nombre");
let apellidoIngresado = prompt("Ingresá tu apellido");

if ((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert ("¡Hola y bienvenido " +nombreIngresado +" " +apellidoIngresado +"!")
}
else {
    alert("Datos incompletos")
}