import React from "react";
import objetoAPI from "../DatosAPI/ObjetoAPI";
import GeneradorProductos from "./GeneradorProductos";
import GeneradorDiaRopa from "./GeneradorDiaRopa";
import GeneradorMarca from "./GeneradorMarca";

function ContenidoCuerpo(){

    let objProductos = objetoAPI.productosPrincipales;
    objProductos = objProductos.map((item)=>{
        return(
            <GeneradorProductos key = {item.idProductoPrincipal} objProp = {item}></GeneradorProductos>
        )
    })
    let objProductosDia = objetoAPI.productosRopaDay;
    objProductosDia = objProductosDia.map((item)=>{
        return (
            <GeneradorDiaRopa key = {item.idProductoRopaDay} objProp = {item}></GeneradorDiaRopa>
        )
    })
    let objMarca = objetoAPI.marcas;
    objMarca = objMarca.map((item)=>{
        return (
            <GeneradorMarca key = {item.idMarca} objProp = {item}></GeneradorMarca>
        )
    })
    let objOferta = objetoAPI.ofertaLimitada[0];
    let colorFondoOferta = objOferta.colorFondoOferta;
    let ropaDay = objetoAPI.ropaDay[0];
    let colorFondoRopaDay = ropaDay.colorFondoRopaDay;

    return (
        <div className="Contenido mx-5">
            <div className="TrendingProducts  text-center">
                <h3>Trending Products</h3>
            </div>
            <div className="Productos">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {objProductos}
              </div>
              <button type="button" className="btn btn-outline-primary my-5 mx-auto d-block">More products {'>'}</button>
            </div>
            <div className="AnuncionsYHoodies">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col col-md-8 mb-4 mb-md-0">
                        <div className="ContainerFlexCol d-flex flex-column flex-md-row">
                            <img src={objOferta.imagenFondoOferta} alt={objOferta.nombreProductoOferta} className="ImagenAnuncio order-2"></img>
                            <div className="BloqueTextoAnuncio order-1" style={{backgroundColor:colorFondoOferta}}>
                            <p className="SubtituloAnuncio fs-5">Hurry up! Limited time offer</p>
                            <h3 className="TituloAnuncio">{objOferta.nombreProductoOferta}</h3>
                            <button className="btn btn-danger">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4 Anuncio text-center" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6K-GYUVASggg-3p0-EXOs1A46eI8OSJK5Q&usqp=CAU)'}}>
                        <h5 claclassNamess="TituloAnuncioBloque">Your Add Banner Here</h5>
                        <p className="fs-6 SubtituloAnuncioBloque">Hurry up to reserve your spot</p>
                        <button className="btn btn-danger">Contact us</button>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 mt-5">
                <div className="col BloqueHoodieImagen">
                  <div className="BloqueTextoImagenHoodie" style={{backgroundColor: colorFondoRopaDay}}>
                    <h3 className="TituloHoodie ps-4">{ropaDay.nombreRopaDay}</h3>
                    <p className="ps-4"><a href="#" className="link-danger">Shop {ropaDay.shopRopa}</a></p>
                    <img className="ImagenHoodieHombre d-none d-md-block w-100" src={ropaDay.imagenRopaDay} alt={ropaDay.nombreRopaDay}></img>
                  </div>
                </div>
                <div className="col BloqueHoodies">
                  <div className="row row-cols-2 row-cols-lg-3">
                    {objProductosDia}
                  </div>
                </div>
              </div>
            </div>
            <div className="ShopByBrand text-center my-5">
              <h3>Shop by brand</h3>
            </div>
            <div className="Marcas mb-5">
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 text-center">
                {objMarca}
              </div>
            </div>
        </div>
    )
}
export default ContenidoCuerpo