import React from "react";

function GeneradorProductos(props){
    return(
        <div className="col CajasProductos">
            <a href="#"><img src={props.objProp.imagenProductoPrincipal} alt={props.objProp.nombreProducto} className="d-block w-100"></img></a>
            <a href="#" className="LinksProductos fs-6 text-decoration-none d-block link-secondary">{props.objProp.categoriaProducto}</a>
            <a href="#" className="NombreProductoLink fs-6 text-decoration-none">{props.objProp.nombreProducto}</a>
            <p className="fs-5 mt-2 PrecioProducto text-primary">{props.objProp.precioProducto === null && 
            "Out of stock"}{props.objProp.precioProducto}{props.objProp.decimalPrecio && <span className="fs-6 me-2">{props.objProp.decimalPrecio}</span>}
            {props.objProp.precioAnterior && <span class="PrecioAnterior text-decoration-line-through text-secondary">{props.objProp.precioAnterior}</span>}</p>
        </div>
    )
}

export default GeneradorProductos;