import React from "react";

function BlogYContacto(){
    return (
        <div className="BlogYContacto">
              <div className="row row-cols-1 row-cols-md-2 text-center">
                <a href="#" className="col p-5 text-decoration-none text-black" style={{backgroundColor:'#fff1f2'}}>
                  <i className="bi h3 bi-pencil-square"></i>
                  <h4>Read the blog</h4>
                  <p className="fs-6 text-secondary">Latest store, fashion news and trends</p>
                </a>
              
                <a href="#" className="col p-5 text-decoration-none text-black" style={{backgroundColor: '#eff0fa'}}>
                  <i className="bi h3 bi-instagram"></i>
                  <h4>Follow on Instagram</h4>
                  <p className="fs-6 text-secondary">#ShopWithCartzilla</p>
                </a>
              </div>
        </div>
    )
}
export default BlogYContacto