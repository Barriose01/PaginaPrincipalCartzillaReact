import React from "react";

function GeneradorCategoria(props){
    return(
        <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">{props.objProp.nombreDepartamento}</a></p>
    )
}

export default GeneradorCategoria;