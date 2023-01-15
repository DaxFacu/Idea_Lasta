const guardarModelosCarrito = (productos) => {
localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarModelosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const agregarAlCarrito = (id) => {
    const productos =cargarModelosLC();
    const productos_carrito = cargarModelosCarrito();
    const producto = productos.find(item => item.id === id);
    if(productos_carrito.find(item => item.id === id)){  
    }
    else{
        productos_carrito.push(producto);
        guardarModelosCarrito(productos_carrito);
        renderBotonCarrito();
    }
}

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
else if(document.getElementById("categoriaSelect").value == "animacion"){
    buscar("animacion");
    console.log(document.getElementById("categoriaSelect").value);
}
else if(document.getElementById("categoriaSelect").value == "marvel"){
    buscar("marvel");
    console.log(document.getElementById("categoriaSelect").value);
}
else if(document.getElementById("categoriaSelect").value == "videojuegos"){
    buscar("videojuegos");
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

if(document.getElementById("categoriaSelect") !=null){
document.getElementById("categoriaSelect").addEventListener("change",  buscarComp);
document.getElementById("go").addEventListener("click", buscarNombre);
}

const eliminarModelos = (id) => {
    const modelos_carrito = cargarModelosCarrito();
    const modelos = modelos_carrito.filter(item => item.id !== id);
    guardarModelosCarrito(modelos);
    renderModelosCarrito();
    renderBotonCarrito();
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderModelosCarrito();
    renderBotonCarrito();
}

const totalCarrito = () => {
    const productos_carrito = cargarModelosCarrito();
    return productos_carrito.length;
}

const sumaCarrito = () => {
    const productos_carrito = cargarModelosCarrito();
    total= productos_carrito.reduce((total, item) => total += item.precio, 0);
    let cupon = JSON.parse(localStorage.getItem("cupon"));
    if(cupon!=null){
        if(total - cupon>0){
        total= total - cupon;
        return total + "(-"+  cupon + " " + "cupón aplicado)"
        document.getElementById("cuponIn").value = "Cupon aplicado";
        }
        else{
            return 0 + "(-"+  cupon + " " + "cupón aplicado)";
        }
    }
    else{
        return total;
    }
}

const aplicarCupon = () => {
    let cupon="0";
    if(document.getElementById("cuponIn")!=null){
    cupon = document.getElementById("cuponIn").value;
    console.log(cupon);
    if(cupon==="TF2502") {
        let cuponDescuento = 2;
        localStorage.setItem("cupon", JSON.stringify(cuponDescuento));
        sumaCarrito();
        location.reload();
    }
    if(cupon==="TF2508") {
        let cuponDescuento = 8;
        localStorage.setItem("cupon", JSON.stringify(cuponDescuento));
        sumaCarrito();
        location.reload();
    }
}
}

const renderBotonCarrito = () => {
let salida = `<button type="button" class="btn btn-primary">
Carrito <span class="badge bg-secondary"> ${totalCarrito()}</span>
</button>`
document.getElementById("boton_carrito").innerHTML = salida;
}
