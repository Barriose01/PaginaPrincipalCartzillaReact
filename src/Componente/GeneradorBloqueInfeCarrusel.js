import React from "react";

function GeneradorBloqueInfeCarrusel(props){
    return(
        <div className="col">
            <a href="#"><img src={props.objetoProp.imagenBloqueDebajoCarrusel} className="w-100 d-block" alt={props.objetoProp.tituloBloqueDebajoCarrusel}></img></a>
            <a href="#" className="fs-5 LinkHombre link-dark text-decoration-none">{props.objetoProp.tituloBloqueDebajoCarrusel}</a>
        </div>
        
    )
}

export default GeneradorBloqueInfeCarrusel