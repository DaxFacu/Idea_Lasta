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

function filtrarModeloCategoria(categorias) {
    return (modelos.filter(item => item.categoria == categorias) || null);
}


const buscar = (categoria) => {
    const productos = modelos;
    localStorage.removeItem("modelos");
    productos_buscar = [];
    modelo_filtro= filtrarModeloCategoria(categoria);
    for (let model of modelo_filtro) {
        productos_buscar.push(model);
    }

   
    guardarModelosLC(productos_buscar);
    renderModelos();
    
}

function buscar_comp(){
    localStorage.removeItem("modelos");
if(document.getElementById("categoriaSelect").value == "anime"){
    buscar("anime");
    console.log(document.getElementById("categoriaSelect").value);
}
}

// buscar(document.getElementById("categoriaSelect").value);

const DatosSelect = () => {
    // return document.getElementById("buscar").value;
    // console.log("select" + select);
    
}


document.getElementById("categoriaSelect").addEventListener("change", DatosSelect);
document.getElementById("go").addEventListener("click", buscar_comp);




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
