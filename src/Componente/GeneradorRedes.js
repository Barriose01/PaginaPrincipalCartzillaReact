import React from "react";

function GeneradorRedes(props){
    return(
        <button className="btn btn-dark">
            <svg xmlns={props.objProp.xmlns} width="16" height="16" fill="currentColor" className={props.objProp.className} viewBox="0 0 16 16">
                <path fill-rule={props.objProp.className === "bi bi-meta" && "evenodd"} d={props.objProp.path}/>
            </svg>
        </button>
    )
}

export default GeneradorRedes;