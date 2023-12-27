import React from "react";
import objetoAPI from "../DatosAPI/ObjetoAPI";
import GeneradorCarrusel from "./GeneradorCarrusel";
import GeneradorBloqueInfeCarrusel from "./GeneradorBloqueInfeCarrusel";

function Carrusel(){

    let carruselObjeto = objetoAPI.carrusel;
    carruselObjeto = carruselObjeto.map((item)=>{
        return (
            <GeneradorCarrusel key = {item.idCarrusel} objetoProp = {item}></GeneradorCarrusel>
        )
    })
    let bloqueCarruselObj = objetoAPI.bloqueDebajoCarrusel;
    bloqueCarruselObj = bloqueCarruselObj.map((item)=>{
        return(
            <GeneradorBloqueInfeCarrusel key={item.idBloqueCarrusel} objetoProp={item}></GeneradorBloqueInfeCarrusel>
        )
    })

    return(
        <div className="BloqueCarrusel mb-0">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                 {carruselObjeto}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="BloqueDebajoCarrusel mx-auto mb-5 mx-lg-5 mb-lg-0  p-4 bg-white rounded" style={{zIndex: 10}}>
                <div className="row row-cols-1 row-cols-sm-3 text-center">
                    {bloqueCarruselObj}
                </div>
            </div>
          </div>
    )
}

export default Carrusel