/* carrito */

//recupero datos de json
$(document).ready(function () {
    $.ajax({
        url:'carrito.json',
        type: 'GET',
    })
    //si la llamada es exitosa
    .done( async () => {
            const res = await fetch('carrito.json')
            const data = await res.json()
            pintarProductos(data)
            detectarBotones(data)
        })
        //si falla...
        .fail(function(error){
            console.error('Error al cargar JSON', error);
        });
    }
)
//ordenando los cuadros en template
    const contendorProductos = $('#contenedor-productos')
    const pintarProductos = (data) => {
    const template = document.querySelector('#template-productos').content
    const fragment = document.createDocumentFragment()
    
    data.forEach(producto => {
        
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5').textContent = producto.title
        template.querySelector('h6').textContent = producto.medidas
        template.querySelector('p span').textContent = producto.precio
        template.querySelector('button').dataset.id = producto.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    $('#contenedor-productos').prepend(fragment); 
}
//array de carrito 
let carrito = {}

/* Botones */
const detectarBotones = (data) => {
    const botones = document.querySelectorAll('button')
    
    botones.forEach(btn => {
        $(btn).click(function () { 
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
            carrito[producto.id] = { ...producto }//para poder agregar mas
            
            pintarCarrito()
        })
    })
}
//tomando los items
const items = document.querySelector("#items")
//items en el carrito
const pintarCarrito = () => {

    //espacio dentro del html para los items
    items.innerHTML = ''

    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()

    Object.values(carrito).forEach(producto => {
        
        template.querySelectorAll('td')[0].textContent = producto.title
        template.querySelectorAll('td')[1].textContent = producto.medidas
        template.querySelector('span').textContent = producto.precio
        //boton eliminar cuadro
        template.querySelector('.btn-danger').dataset.id = producto.id
        //para que no se superpongan entre cuadros selec.
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    $("#items").prepend(fragment);

    pintarFooter()
    accionBotones()
}

//footer del carrito
const footer = document.querySelector('#footer-carrito')
const pintarFooter = () => {
    //espacio dentro de HTML 
    footer.innerHTML = ''

    const template = document.querySelector('#template-footer').content;
    const fragment = document.createDocumentFragment();
    // sumar cantidad de cuadros y sumar totales $
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0);
    //mostrar cantidad de cuadros y total.
    template.querySelectorAll('td')[0].textContent = nCantidad;
    template.querySelector('span').textContent = nPrecio;
    const clone = template.cloneNode(true);
    $(fragment).prepend(clone); 
    $(footer).prepend(fragment);

    // para ocultar o mostrar el footer-carrito, dependiendo de si hay o no cuadros en la tabla
    if (nCantidad === 0 ) {
        $('.container-table').slideUp(1000);
    }else {
        $('.container-table').slideDown(1000);
    }
    //para vaciar el carrito
    var boton = $('#vaciar-carrito');
    $(boton).click( () => { 
        carrito = {};//señalamos que el carrito debe quedar vacío.
        pintarCarrito();
        $('#comprar-carrito, #vaciar-carrito').hide(); //escondemos botones de comprar y vaciar carrito.
    })
    //para comprar el carrito
    var boton = $('#comprar-carrito');
    $(boton).click( () => {
        $('.spinner-border').css("display", "inline-block")//spinner cargando
        .delay(5000)
        .fadeOut(1000);
        $('.container-table').hide(); //se esconde el container de la tabla
        $('#aviso-compra').delay(6000).hide().append(`  

        <div class="alert alert-success alertaCompra">
        <strong>¡Listo!</strong> La compra se ha realizado con éxito.</div> 
        `) //aviso de compra
        .fadeIn("slow");
        $('#aviso-compra') 
        .delay(6000)
        .slideUp(1000, function (){
            $('#aviso-compra')
            .empty();
        });
        carrito = {}; //se vacia el carrito
        pintarCarrito(); 
        $('#comprar-carrito').hide(); //escondemos botones de
        $('#vaciar-carrito').hide();  //comprar y vaciar carrito.
    })
}
const accionBotones = () => {
    const botonesEliminar = document.querySelectorAll('#items .btn-danger');

    botonesEliminar.forEach(btn => {
        $(btn).click(function () { 
            //quitar cuadros
            const producto = carrito[btn.dataset.id]
            producto.cantidad--
            if (producto.cantidad === 0) {
                delete carrito[btn.dataset.id]
            } else {
                carrito[btn.dataset.id] = { ...producto }
            }
            pintarCarrito();
        })
    })
}
