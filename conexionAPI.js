async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();

    return conexionConvertida
}


async function enviarProducto(/*id,*/fotito,descripcion,precio){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            /*id:id,*/
            fotito:fotito,
            descripcion:descripcion,
            precio:precio
        })
    })

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}


async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json"},  
    })

    const conexionConvertida = conexion.json();

    return conexionConvertida
}





export const conexionAPI={
    listarProductos,
    enviarProducto,
    eliminarProducto    
}
