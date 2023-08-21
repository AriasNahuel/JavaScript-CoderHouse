class Item {
    constructor(id, marca, nombre, precio, imagen) {
        this.id = id,
        this.marca = marca,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El nombre es ${this.nombre}, la marca es ${this.marca} y su precio es ${this.precio}`)
    }
}

const Item1 = new Item (1, "Maruchan", "Ramen Carne", 1300, "0001 Ramen Maruchan - Carne.jpg")
const Item2 = new Item (2, "Maruchan", "Ramen Pollo", 1300, "0002 Ramen Maruchan - Pollo.jpg")
const Item3 = new Item (3, "Maruchan", "Ramen Mariscos", 1300, "0003 Ramen Maruchan - Camaron.jpg")
const Item4 = new Item (4, "Samyang", "Ramen Natural", 800, "0004 Ramen Samyang - Natural.jpg")
const Item5 = new Item (5, "Samyang", "Ramen Camaron", 1500, "0005 Ramen Samyang - Camaron.jpg")
const Item6 = new Item (6, "Samyang", "Ramen Carne", 1500, "0006 Ramen Samyang - Carne.jpg")
const Item7 = new Item (7, "Nutrition & Taste", "Gaseosa Lima", 1800, "0007 Gaseosa Lima.png")
const Item8 = new Item (8, "Nutrition & Taste", "Gaseosa Melón", 1800, "0008 Gaseosa Melón.png")
const Item9 = new Item (9, "Nutrition & Taste", "Gaseosa Sandía", 1800, "0009 Gaseosa Sandía.png")
const Item10 = new Item (10, "Hao Wei Dao", "Jugo Ananá", 1100, "0010 Jugo Ananá.jpg")
const Item11 = new Item (11, "Hao Wei Dao", "Jugo Mango", 1100, "0011 Jugo Mango.jpg")
const Item12 = new Item (12, "Hao Wei Dao", "Jugo Uva", 1100, "0012 Jugo Uva.jpg")
const Item13 = new Item (13, "Chum Churum", "Soju Natural", 2800, "0013 Soju Natural.jpg")
const Item14 = new Item (14, "Chum Churum", "Soju Manzana", 3200, "0014 Soju Manzana.jpg")
const Item15 = new Item (15, "Chum Churum", "Soju Uva", 3200, "0015 Soju Uva.jpg")

let estanteria = []

if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item11, Item12, Item13, Item14, Item15)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}