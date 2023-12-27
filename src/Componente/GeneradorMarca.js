import React from "react";

function GeneradorMarca(props){
    return(
        <div className="col">
            <a href="#"><img className="w-50 mb-5" src={props.objProp.imagenMarca} alt={props.objProp.nombreMarca}></img></a>
        </div>
    )
}
export default GeneradorMarca