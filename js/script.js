let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

// Coloca esta sección en lugar de la función cargar existente
function cargar(item) {
    quitarBordes();
    mostrador.style.width = "100%";
    seleccion.style.width = "80%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    // Acceder a los elementos específicos del producto seleccionado
    let imgProducto = item.querySelector("img");
    let modeloProducto = item.querySelector(".descripcion");
    let precioProducto = item.querySelector(".precio");

    imgSeleccionada.src = imgProducto.src;
    modeloSeleccionado.innerHTML ="Producto: " + modeloProducto.innerHTML;
    descripSeleccionada.innerHTML = "Datos de " + modeloProducto.innerHTML;
    precioSeleccionado.innerHTML ="Marca: " + precioProducto.innerHTML;

    // Desplazamiento suave hacia la sección detallada
    seleccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}
function stopPropagation(event) {
    event.stopPropagation();
}