//Productos

//Creación de array de categorías
const categoria = ["animacion", "marvel", "anime", "videojuegos"];



//Creación de array de objetos
const modelos = [
    {id:1, nombre: "Homero", categoria:"animacion", imagen: "Model.webp", serie:"Los Simpsons", precio: 4, formato: ".stl"},
    {id:2, nombre: "Hulk", categoria:"marvel", imagen: "Model.webp", serie:"Hulk", precio: 0, formato: ".stl"},
    {id:3, nombre: "Goku", categoria:"anime", imagen: "Model.webp", serie:"DBZ", precio: 25, formato: ".stl"},
    {id:4, nombre: "Picollo", categoria:"anime", imagen: "Model.webp", serie:"DBZ", precio: 39, formato: ".stl"},
    {id:5, nombre: "Ryu", categoria:"videojuegos", imagen: "Model.webp", serie:"Street Fighter", precio: 9, formato: ".stl"},
    {id:6, nombre: "Wheatley", categoria:"videojuegos", imagen: "Model.webp", serie:"Portal2", precio: 20, formato: ".stl"}
    ];


//Guardar

const guardarProductosLC = (modelos) => {
    localStorage.setItem("productos", JSON.stringify(modelos));
}

const cargarProductosLC = () => {
    return JSON.parse(localStorage.getItem("modelos")) || [];
}

guardarProductosLC(modelos);

//Funciones
const cargarModelo = () => {
    return JSON.parse(localStorage.getItem("modelo"));
}

const renderProductos = () => {
    const modelo = cargarProductosLC();
    let salidaModelos = "";

    for (let model of modelo) {
        salidaModelos+= `
            <article class="col-sm-12 col-md-6 col-lg-6">
                <a class="" href="#">
                 <img class="w-100" src="../multimedios/${model.imagen}" alt="${model.nombre}">
                    <p class="">"${model.nombre}"</p>
                    <p class="">${model.precio}</p>
                </a>
            </article>`;
    }

    document.getElementById("carga").innerHTML = salidaModelos;
}

renderProductos();