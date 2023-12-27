import React from "react";

function GeneradorCarrusel(props){
    let colorFondo = props.objetoProp.colorFondo;
    let active = "";
    if(props.objetoProp.idCarrusel === 1){
        active = " active";
    }
    return(
        <div className={"carousel-item d-flex flex-column flex-lg-row" + active}>
            <img src={props.objetoProp.imagenCarrusel} className="order-1 order-lg-2 ImagenCarrusel d-block " alt={props.objetoProp.titulo}></img>
            <div className="BloqueTextoCarrusel order-2 order-lg-1 " style={{backgroundColor:colorFondo}}>
                <div className="TextoCarrusel text-white">
                    <h3 className="SubtituloCarrusel1 fs-2">{props.objetoProp.subtituloSuperior}</h3>
                    <h2 className="TituloCarrusel fw-bold">{props.objetoProp.titulo}</h2>
                    <h5 className="SubtituloCarrusel2 fs-5 mb-4">{props.objetoProp.subtituloInferior}</h5>
                    <button type="button" className="btn btn-danger">Shop Now {'>'}</button>
                </div>
            </div>       
        </div>
    )
}

export default GeneradorCarrusel