async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    return conexionConvertida
}


async function enviarProducto(fotito,descripcion,precio){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            fotito:fotito,
            descripcion:descripcion,
            precio:precio
        })
    })

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


export const conexionAPI={
    listarProductos,
    enviarProducto    
}
