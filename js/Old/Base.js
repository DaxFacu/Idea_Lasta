const renderModelos = () =>{
    const modelos = cargarModelosLC();
    let salida ="";
    console.log(modelos);
    for(model of modelos){
       salida+=`<article class="col-sm-12 col-md-6 col-lg-6">
       <a class="" href="#">
        <img class="w-100" src="../multimedios/${model.imagen}" alt="${model.nombre}">
           <p class="">"${model.nombre}"</p>
           <p class="">${model.precio}</p>
       </a>
   </article>`; 
    }

    document.getElementById("carga").innerHTML = salida;
}

renderModelos();