import React from "react";
import Vpsheader from "./Vpsheader";
import VpsFooter from "./VpsFooter";
import '../Style/VpsProductsview.css'

export default function VpsManufacturing() {
  return (
    <>
      <Vpsheader />
      <div className="container my-4" id="about">
        <div className="row my-4">
          <div className="col-sm-12 my-4 col-md-6">
            <h1 className="text-dark section-heading">Surface Grinder</h1>
            <p className="about-content mt-5">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
          </div>
          <div className="col-sm-12 my-4 col-md-6 d-flex justify-content-center productImgShadow align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/KENT 510 SURFACE GRENDER.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
        </div>
        <div className="row my-4">
        <div className="col-sm-12 my-4 col-md-6 d-flex justify-content-center productImgShadow align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/Haas VM 3.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
          <div className="col-sm-12 my-4 col-md-6">
            <h1 className="text-dark section-heading">VMC</h1>
            <p className="about-content mt-5">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-sm-12 my-4 col-md-6">
            <h1 className="text-dark section-heading">CNC EDM</h1>
            <p className="about-content mt-5">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
          </div>
          <div className="col-sm-12 my-4 col-md-6 d-flex justify-content-center productImgShadow align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/ACCUTE X CNC EDM.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
        </div>
        <div className="row my-4">
        <div className="col-sm-12 my-4 col-md-6 d-flex justify-content-center productImgShadow align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/Haas VM 3.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
          <div className="col-sm-12 my-4 col-md-6">
            <h1 className="text-dark section-heading">Tool Room</h1>
            <p className="about-content mt-5">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-sm-12 my-4 col-md-6">
            <h1 className="text-dark section-heading">Laser Engraving</h1>
            <p className="about-content mt-5">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 my-4 d-flex justify-content-center productImgShadow align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/Laser Engraving Machine.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
        </div>
        <div className="row my-4">
        <div className="col-sm-12 col-md-6 my-4 d-flex justify-content-center productImgShadow align-items-center">
            <img
              src={process.env.PUBLIC_URL + "/IMG_2335.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
          <div className="col-sm-12 my-4 col-md-6">
            <h1 className="text-dark section-heading">Injection Molding</h1>
            <p className="about-content mt-5">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
          </div>
        </div>
      </div>
      <VpsFooter />
    </>
  );
}
