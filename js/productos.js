const modelos = [
    {id:1, nombre: "Homero", categoria:"animacion", imagen: "Homero.webp", serie:"Los Simpsons", precio: 4, formato: ".stl", agregado: "no", color:"green"},
    {id:2, nombre: "Hulk", categoria:"marvel", imagen: "Hulk.webp", serie:"Hulk", precio: 0, formato: ".stl", agregado: "no", color:"green"},
    {id:3, nombre: "Goku", categoria:"anime", imagen: "Goku.webp", serie:"DBZ", precio: 25, formato: ".stl", agregado: "no", color:"green"},
    {id:4, nombre: "Picollo", categoria:"anime", imagen: "Picollo.webp", serie:"DBZ", precio: 39, formato: ".stl", agregado: "no", color:"green"},
    {id:5, nombre: "Ryu", categoria:"videojuegos", imagen: "Ryu.webp", serie:"Street Fighter", precio: 9, formato: ".stl", agregado: "no", color:"green"},
    {id:6, nombre: "Wheatley", categoria:"videojuegos", imagen: "Weatley.webp", serie:"Portal2", precio: 20, formato: ".stl", agregado: "no", color:"green"}
    ];


    const guardarModelosLC = (modelos) => {
        localStorage.setItem("modelos", JSON.stringify(modelos));
    }

    const cargarModelosLC = () => {
        return JSON.parse(localStorage.getItem("modelos")) || [];
    }

    guardarModelosLC(modelos);