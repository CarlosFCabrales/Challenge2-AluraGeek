import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
/* let numeroMaximo = 100;  */

async function crearProducto(evento) {

    evento.preventDefault();

    /* let num =  Math.floor(Math.random()*numeroMaximo)+1;
    const id = num.toString();  */

    const fotito = document.querySelector("[data-fotito]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;    

    await conexionAPI.enviarProducto(/*id,*/fotito,descripcion,precio);
    
    window.location.href="index.html"; 

}


formulario.addEventListener("submit",evento => crearProducto(evento));
