import { conexionAPI } from "./conexionAPI.js";

async function borrarProducto(id){  
     
    console.log(id)

    await conexionAPI.eliminarProducto(id);
    window.location.reload();

}

window.borrarProducto = borrarProducto;