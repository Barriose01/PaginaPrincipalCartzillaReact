import React from "react";
import objetoAPI from "../DatosAPI/ObjetoAPI";
import GeneradorNavDepa from "./GeneradorNavDepa";

function Navbar(){

    let departamentos = objetoAPI.departamentosNav
    departamentos = departamentos.map((item)=>{
        return (
            <GeneradorNavDepa key = {item.idDepa} objetoProp = {item}></GeneradorNavDepa>
        )
    })
    return(
        <nav className="px-5 navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand d-sm-block flex-shrink-0" href="#">
                <img className="Logo" src="https://cartzilla.createx.studio/img/logo-dark.png" alt="logo"></img>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-lg-flex flex-column align-items-start" id="navbarSupportedContent">
                <form className="d-flex mt-5 w-75" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  </form>
                <ul className="navbar-nav mt-3  mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Departments
                    </a>
                       <ul className="ListaNav dropdown-menu container">
                            <div className="row m-auto p-4">
                                {departamentos}
                            </div>
                       </ul>
                  </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">NFT Marketplace
                                <p className="TextoSecundarioDropdown fs-6 text-body-secondary">NFTs, Multivendor, Auctions</p>
                            </a>  
                          </li>
                          <li>
                             <a className="dropdown-item" href="#">Fashion Store v.1
                                <p className="TextoSecundarioDropdown fs-6 text-body-secondary">classNameic shop layout</p>
                             </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Electronics Store
                               <p className="TextoSecundarioDropdown fs-6 text-body-secondary">Slider + promo Banners</p>
                            </a>
                         </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Shop
                        </a>
                        <ul className="ListaShop dropdown-menu container">
                            <div className="row row-cols-3">
                              <div className="col col-12 col-lg-4">
                                <h5 className="mx-3">Shop layouts</h5>
                                <li><a className="dropdown-item" href="#">Shop layouts</a></li>
                                <li><a className="dropdown-item" href="#">Shop layouts</a></li>
                                <li><a className="dropdown-item" href="#">Shop layouts</a></li>
                                <li><a className="dropdown-item" href="#">Shop layouts</a></li>
                                <li><a className="dropdown-item" href="#">Shop layouts</a></li>
                                <li><a className="dropdown-item" href="#">Shop layouts</a></li>
                              </div>
                              <div className="col col-12 col-lg-4">
                                <h5 className="mx-3">Food delivery</h5>
                                <li><a className="dropdown-item" href="#">Category page</a></li>
                                <li><a className="dropdown-item" href="#">Single Item (Restaurant)</a></li>
                                <li><a className="dropdown-item" href="#">Cart (Your Order)</a></li>
                                <li><a className="dropdown-item" href="#">Chekout (Address & Payment)</a></li>
                              </div>
                              <div className="col col-12 col-lg-4">
                                <h5 className="mx-3">Shop Pages</h5>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                              </div>
                              <div className="col col-12 col-lg-4">
                                <h5 className="mx-3">Marketplace</h5>
                                <li><a className="dropdown-item" href="#">Category page</a></li>
                                <li><a className="dropdown-item" href="#">Single Item Page</a></li>
                                <li><a className="dropdown-item" href="#">Vendor Page</a></li>
                                <li><a className="dropdown-item" href="#">Cart</a></li>
                                <li><a className="dropdown-item" href="#">Chekout</a></li>
                              </div>
                              <div className="col col-12 col-lg-8">
                                <h5 className="mx-3">NFT Marketplace</h5>
                                <li><a className="dropdown-item" href="#">NFTs MarletPlace</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                                <li><a className="dropdown-item" href="#">Elemento</a></li>
                              </div>
                              <div className="col col-12 col-lg-4">
                                <h5 className="mx-3">Grocery Store</h5>
                                <li><a className="dropdown-item" href="#">Vendor Page</a></li>
                                <li><a className="dropdown-item" href="#">Cart</a></li>
                                <li><a className="dropdown-item" href="#">Chekout</a></li>
                              </div>
                            </div>
                        </ul>
                      </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">Shop User Account &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">Orders History</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Profile Settings</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Account Adresses</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 1</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 2</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 3</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Vendor Dashboard &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">Settings</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Purchases</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Favorites</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Sales</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Products</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Add New Products</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Payouts</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">NFT Marketplace &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">Account Adresses</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 1</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 2</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 3</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 4</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="dropdown-item" href="#">Sign In / Sign Up</a></li>
                      <li><a className="dropdown-item" href="#">Password Recovery</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">Navbar Variants &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 0</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 1</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 2</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 3</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">ELEMENTO 4</a>
                          </li>
                        </ul>
                      </li>
                      <li><hr className="dropdown-divider"></hr></li>
                      <li><a className="dropdown-item" href="#">About Us</a></li>
                      <li><a className="dropdown-item" href="#">Contacts</a></li>
                      <li>
                        <a className="dropdown-item" href="#">Help Center &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">Help Topics</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Single Topic</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Submit a Request</a>
                          </li>
                        </ul>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">Sticky Footer Demo</a></li>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">Blog Lists Layouts &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">List with Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">List no Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Blog Grid Layouts &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">Grid with Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Grid no Sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Single Posts Layouts &raquo;</a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a className="dropdown-item" href="#">Article with Sidebar</a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">Article no Sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}
export default Navbar