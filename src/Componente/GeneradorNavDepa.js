import React from "react";


function GeneradorNavDepa(props){
    return (
        <div className="col mb-4">
            <div className="SeccionImagenNavBar">
                <img className="Imagen ImagenNav w-100" src={props.objetoProp.imagenDepa} alt={props.objetoProp.altImagenDepa}></img>
                <h6 className="mx-3">{props.objetoProp.nombreDepa}</h6>
                <li><a className="dropdown-item" href="#">{props.objetoProp.categoriaDepa1}</a></li>
                <li><a className="dropdown-item" href="#">{props.objetoProp.categoriaDepa2}</a></li>
                <li><a className="dropdown-item" href="#">{props.objetoProp.categoriaDepa3}</a></li>
            </div>
        </div>
    )
}

export default GeneradorNavDepa