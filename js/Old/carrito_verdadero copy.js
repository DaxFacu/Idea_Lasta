const guardarProductoCarrito = () => {
localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductoCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const agregarAlCarrito = (id) => {
    const productos =cargarProductoLS();
    const productos_carrito = cargarProductoCarrito();
    const producto = productos_carrito.find(item => item.id === id);
    productos_carrito.push(producto);
    guardarProductoCarrito(productos_carrito);
    renderBotonCarrito();
}

// //modif
// const buscar = (id) => {
//     const productos =cargarModelosLC();
//     productos_buscar = [];
//     const producto = productos.find(item => item.id === id);
//     productos_buscar.push(producto);
//     guardarModelosLC(productos_buscar);
    
// }

// buscar(3);

//modif
const buscar = (categoria) => {
    const productos =cargarModelosLC();
    productos_buscar = [];
    const producto = productos.find(item => item.categoria === categoria);
    productos_buscar.push(producto);
    guardarModelosLC(productos_buscar);
    
}


    
// buscar("anime");

const vaciarcarrito = () => {
    localStorage.removeItem("carrito");
}

const totalCarrito = () => {
    const productos_carrito = cargarProductoCarrito();
    return productos_carrito.length;
}

const sumaCarrito = () => {
    const productos_carrito = cargarProductoCarrito();
    return productos_carrito.reduce((total, item) => total += item.precio, 0);
}

const renderBotonCarrito = () => {
let salida = `<button type="button" class="btn btn-primary">
Notifications <span class="badge bg-secondary"> ${totalCarrito()}</span>
</button>`
document.getElementById("boton_carrito").innerHTML = salida;
}
