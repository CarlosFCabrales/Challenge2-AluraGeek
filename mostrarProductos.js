import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(id,fotito,descripcion,precio) {
    const producto = document.createElement("div");
    producto.className="columnaItems";
    producto.innerHTML=`<div class="itemVenta">                                        
                    <img class="itemImagen" src="${fotito}">
                    <p class="itemDescripcion">"${descripcion}"</p>
                    <p class="itemPrecio">"${precio}"</p>                    
                    <input class="itemBorrar" type="submit" onclick="borrarProducto(${id});" value="Eliminar">
                </div>`;

    return producto;                    
}

async function listarProductos(){
    const listAPI = await conexionAPI.listarProductos()

    listAPI.forEach(producto=>lista.appendChild(crearCard(producto.id,producto.fotito,producto.descripcion,producto.precio)))
}


listarProductos()
