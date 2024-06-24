import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {

    evento.preventDefault();

    const fotito = document.querySelector("[data-fotito]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = document.querySelector("[data-precio]").value;    

    await conexionAPI.enviarProducto(fotito,descripcion,precio);
    
    window.location.href="index.html"; 

}


formulario.addEventListener("submit",evento => crearProducto(evento));