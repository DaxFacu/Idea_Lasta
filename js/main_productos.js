const renderModelos = () =>{
    const modelos = cargarModelosLC();
    let salida ="";
    console.log(modelos);
    for(model of modelos){
       salida+=`<article class="col-sm-12 col-md-6 col-lg-4 text-center p-3">
       <a class="" href="#"   >
        <img class="w-75 " src="../multimedios/${model.imagen}" alt="${model.nombre}">
           <p class="">"${model.nombre}"</p>
           <p class="">$${model.precio}</p>
       </a>
       <button class="btn btn-info w-50  type="button" onClick="(agregarAlCarrito(${model.id}));" ">Agregar al carrito</button>
   </article>`; 
    }

    document.getElementById("carga").innerHTML = salida;
}

renderModelos();
renderBotonCarrito();