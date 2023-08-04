class Producto {
    constructor(id, nombreProducto, precio, image) {
        this.id = id;
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.image = image;
    }
}

class ProductoRepository {
    constructor() {
        this.productos = [
            new Producto(1, "Ramen Maruchan Carne", 1100, "/img/0001 Ramen Maruchan - Carne.jpg"),
            new Producto(2, "Ramen Maruchan Pollo", 1100, "/img/0002 Ramen Maruchan - Pollo.jpg"),
            new Producto(3, "Ramen Maruchan Camaron", 1100, "/img/0003 Ramen Maruchan - Camaron.jpg"),
            new Producto(4, "Ramen Samyang Natural", 800, "/img/0004 Ramen Samyang - Natural.jpg"),
            new Producto(5, "Ramen Samyang Mariscos", 1525, "/img/0005 Ramen Samyang - Mariscos.jpg"),
            new Producto(6, "Ramen Samyang Carne", 1600, "/img/0006 Ramen Samyang - Carne.jpg"),
            new Producto(7, "Gaseosa Lima", 1675, "/img/0007 Gaseosa Lima.png"),
            new Producto(8, "Gaseosa Melon", 1675, "/img/0008 Gaseosa Melón.png"),
            new Producto(9, "Gaseosa Sandia", 1675, "/img/0009 Gaseosa Sandía.png"),
            new Producto(10, "Jugo Anana", 1250, "/img/0010 Jugo Ananá.jpg"),
            new Producto(11, "Jugo Mango", 1250, "/img/0011 Jugo Mango.jpg"),
            new Producto(12, "Jugo Uva", 1250, "/img/0012 Jugo Uva.jpg"),
            new Producto(13, "Soju Natural", 2415, "/img/0013 Soju Natural.jpg"),
            new Producto(14, "Soju Manzana", 2415, "/img/0014 Soju Manzana.jpg"),
            new Producto(15, "Soju Uva", 2415, "/img/0015 Soju Uva.jpg")
        ];
    }

    getProductById(id) {
        return this.productos.filter(producto => producto.id === id)[0];
    }

    findAll() {
        return this.productos;
    }

    buscarProducto(nombreProducto) {
        return this.productos.find(Producto);
    }
}

class ItemCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    getSubtotal() {
        return this.producto.precio * this.cantidad;
    };
}

class Carrito {
    constructor() {
        this.items = [];
    }

    agregarItem(producto) {
        this.items.push(new ItemCarrito(producto, 1));
        console.log("Producto agregado exitosamente");
        console.log(producto["nombreProducto"]);
    }

    quitarItem(producto){
        this.items.splice(carrito.indexOf(new ItemCarrito(producto, 1)),1);
    }

    confirmarCarrito() {
        this.items = [];
        //Agregar cartel confirmación
    }

    calcularTotal() {
        let total = 0;
        this.items.forEach((item) => {
            total = + item.getSubtotal();
        });
        console.log(total);
    }

    vaciarCarrito() {
        this.items = [];
        //cartel de carrito vacío
    }

    getItems() {
        return this.items;
    }
}

function beepAgregarItem() {
    let beep = new Audio("../snd/beep-sound-8333.mp3");
    beep.play();
}

const carrito = new Carrito();
const repositorio = new ProductoRepository();
function confirmarCarrito() {
    carrito.confirmarCarrito();
}

function vaciarCarrito() {
    if (confirm("¿Desea vaciar el carrito?")) {
        carrito.vaciarCarrito();
    }//Poner botón confirmar
}

function agregarItem(id) {
    mensajeAgregarCarrito();
    beepAgregarItem();
    carrito.agregarItem(repositorio.getProductById(id));
    listarCarrito();
}

function quitarItem(id){
    mensajeEliminarCarrito();
    carrito.quitarItem(repositorio.getProductById(id))
    listarCarrito();
}

function listarCarrito() {
    const tableCart = document.querySelector(".table");
    $('.table > table').empty();
    let itemsCarrito = carrito.getItems();
    for (const itemCarrito of itemsCarrito) {
        tableCart.insertRow().innerHTML = `     
                                <tr id="${itemCarrito.id}">
                                <td>${itemCarrito.producto.nombreProducto}</td>
                                <td>${itemCarrito.cantidad}</td>
                                <td>${itemCarrito.producto.precio}</td>
                                <td>${itemCarrito.getSubtotal()}</td>
                                <td><svg onclick="quitarItem(this)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></td>
                                </tr>
                                `;
    }
}

carrito.calcularTotal();
const container = document.querySelector(".container");


let productos = repositorio.findAll();
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.className = "card";
    contenedor.innerHTML = `                       
                            <img src="${producto.image}">
                            <p><b>${producto.nombreProducto}</b></p>
                            <b>$${producto.precio}</b>
                            <button class="boton" onclick="agregarItem(${producto.id})">Agregar al carrito</button>`;
    container.appendChild(contenedor);
}

