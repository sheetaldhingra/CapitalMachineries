import React from "react";
import "../Style/Product.css";
import Vpsheader from "./Vpsheader";
import VpsProducts from "./VpsProducts";
import VpsFooter from "./VpsFooter";

export default function VpsProductsBootStrap() {
  return (
    <>
      <Vpsheader />
      <main>
        <div className="container my-4 d-none">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card rounded shadow-lg">
              <img className="bd-placeholder-img rounded card-img-top" width="100%"
                  height="350" src={process.env.PUBLIC_URL + "/Haas VM 3.jpg"} />
                  <div className="card-body">
                  <h1 className="card-text d-flex justify-content-center">Haas</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded shadow-lg">
              <img className="bd-placeholder-img rounded card-img-top" width="100%"
                  height="350" src={process.env.PUBLIC_URL + "/Hantian ma1200.jpg"} />
                  <div className="card-body">
                  <h1 className="card-text d-flex justify-content-center">Hantian</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded shadow-lg">
                <img className="bd-placeholder-img rounded card-img-top" width="100%"
                  height="350" src={process.env.PUBLIC_URL + "/ACCUTE X CNC EDM.jpg"}  />
                <div className="card-body">
                  <h1 className="card-text d-flex justify-content-center">CNC EDM</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="horizontal-line d-flex my-4">Products</h1>
        <div className="row m-auto container">
          <VpsProducts />
        </div>
      </main>
      <div className="container">
        <hr />
      </div>
      <VpsFooter />
    </>
  );
}
