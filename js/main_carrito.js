const renderModelosCarrito = () =>{
    const modelos_carrito = cargarModelosCarrito();
    let salida = "";
    if(totalCarrito()>0){
     salida = `<table class="table">
    <tbody>
    <tr>
    <td colspan="6" class="text-end"><a href="#" class="btn btn-warning" onClick="vaciarCarrito()">Vaciar Carrito <img src="../multimedios/eliminar.webp" alt="Vaciar Carrito" width="16" /></a></td>
    </tr
    <tr>
    <td class="align-middle"> Imagen </td>
    <td class="align-middle"> Nombre </td>
    <td class="align-middle"> Formato </td>
    <td class="align-middle"> Precio </td>
    <td class="align-middle text-end"> Acciones </td>
    </tr>`;

    for (let model of modelos_carrito) {
        salida += `<tr>
        <td><img src="../multimedios/${model.imagen}" alt="${model.nombre}" width="64" /></td>
        <td class="align-middle">${model.nombre}</td>
        <td class="align-middle">${model.formato}</td>
        <td class="align-middle">$${model.precio}</td>
        <td class="align-middle text-end"><a href="#" title="Eliminar Producto" onClick="eliminarModelos(${model.id});"><img src="../multimedios/eliminar.webp" alt="Eliminar Producto" width="16" /></a></td>`;
    }

    salida += `<tr>
    <td colspan="2"><b>Tienes un cupon de descuento?</b> (códigos de prueba TF2502, TF2508) </td>
    <td><b></b></td>
    <td><input id="cuponIn" class="form-control w-25" type="search" placeholder="" aria-label="Search"></td>
    <td colspan="2" class="text-end"><a href="#" class="btn btn-warning" onClick="aplicarCupon()"> Aplicar </a></td>
    </tr
    <tr>
    <td colspan="3"><b>Total</b></td>
    <td><b>$${sumaCarrito()}</b></td>
    <td>&nbsp;</td>
    </tr>
    </tbody>
    </table>`;
}
else
salida = `<div class="alert alert-danger text-center" role="alert">No se encontraron Modelos en el Carrito! <a href="productos.html"> Desea agregar alguno? </a></div>`;
    document.getElementById("cargaCarrito").innerHTML = salida;
}

renderModelosCarrito(); 
renderBotonCarrito();