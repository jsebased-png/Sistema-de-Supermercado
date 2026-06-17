const productos = [
    { id: 1, nombre: "🍎 Manzana", precio: 2000, categoria: "Frutas" },
    { id: 2, nombre: "🍌 Banano", precio: 1500, categoria: "Frutas" },
    { id: 3, nombre: "🥛 Leche", precio: 4000, categoria: "Lácteos" },
    { id: 4, nombre: "🍞 Pan", precio: 2500, categoria: "Panadería" },
    { id: 5, nombre: "🥚 Huevos", precio: 6000, categoria: "Huevos" },
    { id: 6, nombre: "🍊 Naranja", precio: 1800, categoria: "Frutas" },
    { id: 7, nombre: "🍇 Uvas", precio: 3500, categoria: "Frutas" },
    { id: 8, nombre: "🍉 Sandía", precio: 8000, categoria: "Frutas" },
    { id: 9, nombre: "🥔 Papa", precio: 2200, categoria: "Verduras" },
    { id: 10, nombre: "🥕 Zanahoria", precio: 2000, categoria: "Verduras" },
    { id: 11, nombre: "🥬 Lechuga", precio: 2500, categoria: "Verduras" },
    { id: 12, nombre: "🍅 Tomate", precio: 2300, categoria: "Verduras" },
    { id: 13, nombre: "🧀 Queso", precio: 7000, categoria: "Lácteos" },
    { id: 14, nombre: "🥩 Carne", precio: 12000, categoria: "Carnes" },
    { id: 15, nombre: "🐟 Pescado", precio: 10000, categoria: "Carnes" },
    { id: 16, nombre: "🍗 Pollo", precio: 9500, categoria: "Carnes" },
    { id: 17, nombre: "🍪 Galletas", precio: 3000, categoria: "Snacks" },
    { id: 18, nombre: "🍫 Chocolate", precio: 4500, categoria: "Snacks" },
    { id: 19, nombre: "🥤 Gaseosa", precio: 3500, categoria: "Bebidas" },
    { id: 20, nombre: "☕ Café", precio: 5000, categoria: "Bebidas" },
    { id: 21, nombre: "🍿 Palomitas", precio: 4000, categoria: "Snacks" },
    { id: 22, nombre: "🍍 Piña", precio: 6000, categoria: "Frutas" },
    { id: 23, nombre: "🥒 Pepino", precio: 2100, categoria: "Verduras" },
    { id: 24, nombre: "🍓 Fresas", precio: 5500, categoria: "Frutas" },
    { id: 25, nombre: "🥥 Coco", precio: 7000, categoria: "Frutas" },
    { id: 26, nombre: "🥖 Baguette", precio: 3500, categoria: "Panadería" },
    { id: 27, nombre: "🧃 Jugo", precio: 3000, categoria: "Bebidas" },
    { id: 28, nombre: "🥟 Empanada", precio: 2500, categoria: "Panadería" },
    { id: 29, nombre: "🍔 Hamburguesa", precio: 8500, categoria: "Comida rápida" },
    { id: 30, nombre: "🍕 Pizza", precio: 12000, categoria: "Comida rápida" }
];

let carrito = [];

const productosLista = document.getElementById("productosLista");
productos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <h3>${prod.nombre}</h3>
        <p>Precio: $${prod.precio}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
    `;
    productosLista.appendChild(div);
});

function renderCarrito() {
    const carritoLista = document.getElementById("carritoLista");
    carritoLista.innerHTML = "";

    if (carrito.length === 0) {
        carritoLista.innerHTML = "<p>El carrito está vacío</p>";
    } else {
        carrito.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("carrito-item");
            div.innerHTML = `
                <span>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}</span>
                <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            `;
            carritoLista.appendChild(div);
        });
    }

    actualizarTotales();
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    renderCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    renderCarrito();
}

function actualizarTotales() {
    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    document.getElementById("totalCantidad").textContent = totalCantidad;
    document.getElementById("totalPrecio").textContent = totalPrecio;
}

document.getElementById("limpiarCarrito").addEventListener("click", () => {
    carrito = [];
    renderCarrito();
});