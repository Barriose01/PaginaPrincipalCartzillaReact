import React from "react";
import objetoAPI from "../DatosAPI/ObjetoAPI";
import GeneradorCategoria from "./GeneradorCategoria";
import GeneradorRedes from "./GeneradorRedes";

function Footer(){

    let objCategoria = objetoAPI.departamentos;
    objCategoria = objCategoria.map((item)=>{
        return (
            <GeneradorCategoria key={item.idDepartamento} objProp = {item}></GeneradorCategoria>
        )
    })
    let objRedes = objetoAPI.redes;
    objRedes = objRedes.map((item)=>{
        return(
            <GeneradorRedes key={item.idRed} objProp={item}></GeneradorRedes>
        )
    })
    return (
        <div className="Footer">
            <div className="PrimerFooter p-5" style={{backgroundColor: '#373f50'}}>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="col">
                  <h5 className="text-white mb-3">Shop departments</h5>
                    {objCategoria}
                </div>
                <div className="col">
                  <h5 className="text-white mb-3 mt-3 mt-sm-0">Account & shipping info</h5>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Your account</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Shipping rates & policies</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Refunds & replacements</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Order tracking</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Delivery info</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Taxes & fees</a></p>
                  <h5 className="text-white my-3">About us</h5>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">About company</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Our team</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">Careers</a></p>
                  <p className="LinksPrimerFooter"><a href="#" className="text-decoration-none">News</a></p>
                </div>
                <div className="col">
                  <h5 className="text-white mb-3 mt-3 mt-sm-0">Stay informed</h5>
                  <div className="ContenedorEmail d-flex">
                    <input className="form-control" type="email" placeholder="Your email"></input>
                    <button className="btn btn-danger">Subscribe*</button>
                  </div>
                  <p className="InfoEmail">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>
                  <h5 className="text-white my-3">Download our app</h5>
                  <div className="ContenedroBotonApp d-flex">
                    <div className="Apps me-4 mb-2 p-2 rounded" style={{backgroundColor: '#2b3445'}}>
                      <a className="btn-market btn-apple d-flex text-decoration-none text-white" href="#" role="button">
                        <div className="ContenedorLogo my-auto me-2">
                          <i className="AppLogo h3 bi bi-apple text-white"></i>
                        </div>
                        <div className="TextoApp">
                          <span className="btn-market-subtitle d-inline-block InfoEmail">Download on the</span>
                          <span className="btn-market-title d-block fs-5">App Store</span>
                        </div>
                      </a>
                    </div>
                    <div className="Apps me-4 mb-2 p-2 rounded" style={{backgroundColor: '#2b3445'}}>
                      <a className="btn-market btn-apple d-flex text-decoration-none text-white" href="#" role="button">
                        <div className="ContenedorLogo my-auto me-2">
                          <i className="AppLogo h3 bi bi-google-play"></i>
                        </div>
                        <div className="TextoApp">
                          <span className="btn-market-subtitle d-inline-block InfoEmail">Download on the</span>
                          <span className="btn-market-title d-block fs-5">Google Play</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SegundoFooter p-5" style={{backgroundColor: '#2b3445'}}>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col">
                  <h5 className="text-white my-3">Fast and free delivery</h5>
                  <p className="InfoSegundoFooter">Free delivery for all orders over $200</p>
                </div>
                <div className="col">
                  <h5 className="text-white my-3">Money back guarantee</h5>
                  <p className="InfoSegundoFooter">We return money within 30 days</p>
                </div>
                <div className="col">
                  <h5 className="text-white my-3">24/7 costumer support</h5>
                  <p className="InfoSegundoFooter">Friendly 24/7 costumer support</p>
                </div>
                <div className="col">
                  <h5 className="text-white my-3">Secure online payment</h5>
                  <p className="InfoSegundoFooter">We possess SSL/Secure certificate</p>
                </div>
              </div>
              <hr className="hr-light mb-5"></hr>
              <div className="row row-cols-1 row-cols-md-2">
                <div className="col text-center text-md-start">
                  <a href="#"><img src="https://cartzilla.createx.studio/img/footer-logo-light.png" className="w-25 mb-4" alt="logo"></img></a>
                  <div className="d-flex justify-content-center justify-content-md-start">
                    <p className="LinksSegundoFooter"><a href="#" className="text-decoration-none">Outlets</a></p>
                    <p className="LinksSegundoFooter"><a href="#" className="text-decoration-none">Afiliates</a></p>
                    <p className="LinksSegundoFooter"><a href="#" className="text-decoration-none">Support</a></p>
                    <p className="LinksSegundoFooter"><a href="#" className="text-decoration-none">Privacy</a></p>
                    <p className="LinksSegundoFooter"><a href="#" className="text-decoration-none">Terms of use</a></p>
                  </div>
                </div>
                <div className="col text-center text-md-end">
                  <div className="Redes mb-4">
                    {objRedes}
                  </div>
                  <div className="Pago">
                    <img src="https://cartzilla.createx.studio/img/cards-alt.png" alt="medios de pago" className="w-25"></img>
                  </div>
                </div>
              </div>
              <p className="InfoSegundoFooter mt-5">© All rights reserved. Made by Createx Studio. Eddie Casanas 2023</p>
            </div>
        </div>
    )
}
export default Footer