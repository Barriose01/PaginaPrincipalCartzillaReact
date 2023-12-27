import React from "react";

function GeneradorDiaRopa(props){
    return(
        <div className="col BloqueHoodiesInterno CajasProductos mb-0 mb-lg-3">
            <a href="#"><img src={props.objProp.imagenProductoRopaDay} alt={props.objProp.nombreProductoRopaDay} className="d-block w-100"></img></a>
            <a href="#" className="LinksProductos fs-6 text-decoration-none d-block link-secondary">{props.objProp.categoriaRopaDay}</a>
            <a href="#" className="NombreProductoLink fs-6 text-decoration-none">{props.objProp.nombreProductoRopaDay}</a>
            <p className="fs-5 mt-2 PrecioProducto text-primary">{props.objProp.precioProductoRopaDay == null && 
            'Out of stock'}{props.objProp.precioProductoRopaDay}{props.objProp.decimalPrecioRopaDay && 
            <span className="fs-6">{props.objProp.decimalPrecioRopaDay}</span>} {props.objProp.precioAnteriorRopaDay &&
            <span class="PrecioAnterior text-decoration-line-through text-secondary">{props.objProp.precioAnteriorRopaDay}</span>}</p>
        </div>
    )
}

export default GeneradorDiaRopa