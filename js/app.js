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

    agregarItem(producto, cantidad) {
        this.items.push(new ItemCarrito(producto, cantidad));
    }

    confirmarCarrito() {
        this.items = [];
        //Agregar cartel confirmación
    }

    calcularTotal() {
        console.log("Carrito de compras:");
        document.write(`<br><br>`)
        let total = 0;
        this.items.forEach((item) => {
            total = + item.getSubtotal();
        });

        //let total = this.items.reduce((sum, item) => sum + item.subtotal, 0);
        console.log(`Total a pagar: $${total}`);
        document.write(`------------------------<br>`);
        document.write(`<b>Total a pagar:</b> $${total}`);
    }

    vaciarCarrito() {
        this.items = [];
        //cartel de carrito vacío
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

    carrito.agregarItem("a","1");
}

function vistaModalCarrito() {

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
