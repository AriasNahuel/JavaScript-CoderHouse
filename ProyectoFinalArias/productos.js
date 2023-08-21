let productosEnCarrito = []

if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function getProducts() {
    return fetch('data.json').then(response => response.json())
}


let divProductos = document.getElementById("productos")
let btnGuardarItem = document.getElementById("guardarItemBtn")
let btnVerCatalogo = document.getElementById("verCatalogo")
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")

function mostrarCatalogo(array) {
    divProductos.innerHTML = ""

    for (const item of array) {
        let nuevoItem = document.createElement("div")
        nuevoItem.classList.add("col-12", "col-md-6", "col-lg-4", "my-4")
        nuevoItem.innerHTML = `<div id="${item.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${item.imagen}" alt="${item.nombre} de ${item.marca}">
        <div class="card-body tarjetaProducto">
            <h4 class="card-title">${item.nombre}</h4>
            <p>Marca: ${item.marca}</p>
            <p class="">Precio: <b>$${item.precio}</b></p>
        <button id="agregarBtn${item.id}" class="btn btn-outline-danger">Agregar al carrito</button>
        </div>
</div>`
        divProductos.appendChild(nuevoItem)
        let btnAgregar = document.getElementById(`agregarBtn${item.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(item)
            mensajeProductoAgregado()
        })
    }
}

function agregarAlCarrito(item) {
    productosEnCarrito.push(item)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
        <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="${productoCarrito.nombre}">
        <div class="card-body tarjetaProducto">
                <h4 class="card-title">${productoCarrito.nombre}</h4>            
                <p class="card-text">$${productoCarrito.precio}</p> 
                <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
        </div>    
    </div>`
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            mensajeEliminarProducto()
            productosEnCarrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        })
    });

    array.forEach(() => {
        document.getElementById(`botonVaciar`).addEventListener("click", () => {
            mensajeVaciarCarrito()
            productosEnCarrito = []
            localStorage.removeItem("carrito", JSON.stringify(productosEnCarrito))
        })

    });

    array.forEach(() => {
        document.getElementById(`botonFinalizarCompra`).addEventListener("click", () => {
            mensajeCompraRealizada()
            productosEnCarrito = []
            localStorage.removeItem("carrito", JSON.stringify(productosEnCarrito))
        })

    });

}

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})

getProducts().then(products => {
    mostrarCatalogo(products);
});

function mensajeCompraRealizada() {
    Swal.fire(
        'Felicitaciones!',
        'Compra realizada',
        'success');
    let snd = new Audio("./snd/confirmar carrito.mp3");
    snd.play();
}

function mensajeVaciarCarrito() {
    Swal.fire(
        'Carrito Vaciado',
        '',
        'warning');
        let snd = new Audio("./snd/vaciar carrito.mp3");  
        snd.play();
}

function mensajeProductoAgregado() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    })
    let snd = new Audio("./snd/agregar carrito.mp3");
    snd.play();
}

function mensajeEliminarProducto() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    })

    Toast.fire({
        icon: 'warning',
        title: 'Producto eliminado del carrito'
    })
    let snd = new Audio("./snd/quitar carrito.mp3");  
    snd.play();
}
