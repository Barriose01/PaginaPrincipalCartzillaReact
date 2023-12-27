import React from "react";
import Navbar from "./NavBar";
import Carrusel from "./Carrusel";
import ContenidoCuerpo from "./ContenidoCuerpo";
import BlogYContacto from "./BlogYContacto";
import Footer from "./Footer";

function MainContainer(){
    return(
        <div>
            <Navbar></Navbar>
            <Carrusel></Carrusel>
            <ContenidoCuerpo></ContenidoCuerpo>
            <BlogYContacto></BlogYContacto>
            <Footer></Footer>
        </div>
        
    )
}
export default MainContainer