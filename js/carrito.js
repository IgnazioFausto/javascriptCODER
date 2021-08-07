/* carrito */

//recupero datos de json
document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('carrito.json')
        const data = await res.json()
        pintarProductos(data)
        detectarBotones(data)
    } catch (error) {
        console.log(error)//por si tiene error
    }
}


//ordenando los cuadros en template
    const contendorProductos = document.querySelector('#contenedor-productos')
    const pintarProductos = (data) => {
    const template = document.querySelector('#template-productos').content
    const fragment = document.createDocumentFragment()
    
    data.forEach(producto => {
        
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5').textContent = producto.title
        template.querySelector('p span').textContent = producto.precio
        template.querySelector('button').dataset.id = producto.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    contendorProductos.appendChild(fragment)
}
//array de carrito
let carrito = {}

/* Botones */
const detectarBotones = (data) => {
    const botones = document.querySelectorAll('.card button')

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
            carrito[producto.id] = { ...producto }
            
            pintarCarrito()
        })
    })
}
//tomando los items con querySelector
const items = document.querySelector('#items')
//items en el carrito
const pintarCarrito = () => {

    //espacio dentro del html para los items
    items.innerHTML = ''

    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()

    Object.values(carrito).forEach(producto => {
        
        template.querySelectorAll('td')[0].textContent = producto.title
        template.querySelector('span').textContent = producto.precio * producto.cantidad
        //boton eliminar cuadro
        template.querySelector('.btn-danger').dataset.id = producto.id
        //para que no se superpongan entre cuadros selec.
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

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

    template.querySelectorAll('td')[0].textContent = nCantidad;
    template.querySelector('span').textContent = nPrecio;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);

    footer.appendChild(fragment);

    //para vaciar el carrito
    const boton = document.querySelector('#vaciar-carrito');
    boton.addEventListener('click', () => {
        carrito = {};
        pintarCarrito();
    })

}

const accionBotones = () => {
    const botonesEliminar = document.querySelectorAll('#items .btn-danger');

    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
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
