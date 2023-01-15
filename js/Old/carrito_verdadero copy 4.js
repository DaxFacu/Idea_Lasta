const guardarProductoCarrito = () => {
localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductoCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const agregarAlCarrito = (id) => {
    const productos =cargarModeloLC();
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

function filtrarModeloNombre(nombres) {
    return (modelos.filter(item => item.nombre == nombres) || null);
}


const buscarNombreB = (nombre) => {
    const productos = modelos;
    localStorage.removeItem("modelos");
    productos_buscar = [];
    modelo_filtro= filtrarModeloNombre(nombre);
    for (let model of modelo_filtro) {
        productos_buscar.push(model);
    }

   
    guardarModelosLC(productos_buscar);
    renderModelos();
    
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

function buscarComp(){
    if(document.getElementById("categoriaSelect").value != "intro"){
    if(document.getElementById("categoriaSelect").value == "anime"){
    buscar("anime");
    console.log(document.getElementById("categoriaSelect").value);
}

  
}

if(document.getElementById("categoriaSelect").value == "intro"){
    console.log(document.getElementById("categoriaSelect").value);
    localStorage.removeItem("modelos");
    
    guardarModelosLC(modelos);
    renderModelos();
    }
}

function buscarNombre(){
    if(document.getElementById("buscar").value != ""){
    buscarNombreB(document.getElementById("buscar").value);
    console.log(document.getElementById("buscar").value);
    }
    if(document.getElementById("buscar").value == "" && document.getElementById("categoriaSelect").value == "intro"){
        console.log(document.getElementById("buscar").value);
        localStorage.removeItem("modelos");
        
        guardarModelosLC(modelos);
        renderModelos();
        }
}


// buscar(document.getElementById("categoriaSelect").value);

const DatosSelect = () => {
    // return document.getElementById("buscar").value;
    // console.log("select" + select);
    
}


document.getElementById("categoriaSelect").addEventListener("change",  buscarComp);
document.getElementById("go").addEventListener("click", buscarNombre);




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
