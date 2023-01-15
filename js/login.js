const guardarDatos =  () => {
    let mail = document.getElementById("mail").value;
    localStorage.setItem("usuario", JSON.stringify(mail));
    console.log("datos guardados");
    location.reload();
    location.href = "./productos.html";

}

const recuperarDatos = () => {
    return JSON.parse(localStorage.getItem("usuario"));
}

let dato= recuperarDatos();
if(dato!=null){
    let salida = `<a class="nav-link active"  aria-current="page" href="../page/login.html">${recuperarDatos()}</a>`;
    document.getElementById("user").innerHTML = salida;
    console.log(recuperarDatos);
}
else
{
    let salida = `<a class="nav-link active"  aria-current="page" href="../page/login.html">Iniciar sesion</a>`;
    document.getElementById("user").innerHTML = salida;
}


if(document.getElementById("btnGuardarDatos")!= null){
    document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos);
}