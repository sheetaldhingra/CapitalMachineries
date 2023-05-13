import React from "react";
import Vpsheader from "./Vpsheader";
// import { BiAtom } from "react-icons/bi";
import VpsFooter from "./VpsFooter";
import { useNavigate } from "react-router-dom";
export default function VpsFacilities() {
  const navigate = useNavigate();
  const navigateToContact = () =>{
    navigate("/contact");
  }
  return (
    <>
      <Vpsheader />
      <div className="container px-4 py-5" id="hanging-icons">
      <h1 className="d-flex align-items-center justify-content-center">Facilities</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
          <div className="col d-flex mb-4 align-items-start">
            <div className="icon-square text-body-emphasis rounded bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              {/* <BiAtom /> */}
              <img src={process.env.PUBLIC_URL + "/icons8-laser-96.png"} alt="Laser Engraving" />
            </div>
            <div>
              <h3 className="fs-2">Laser Engraving </h3>
              <p>
                We've high accuracy Laser Engraving facility in our premises for
                all types of metal. Impressions are made even on high hard
                metals like Stavax etc.
              </p>
              <button href="#" className="btn btn-primary" onClick={navigateToContact}>
                Enquire Now
              </button>
            </div>
          </div>
          <div className="col d-flex mb-4 align-items-start">
            <div className="icon-square text-body-emphasis rounded bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              {/* <BiAtom /> */}
              <img src={process.env.PUBLIC_URL + "/icons8-cnc-machine-96.png"} alt="CNC EDM" />
            </div>
            <div>
              <h3 className="fs-2">CNC EDM</h3>
              <p>
                CNC EDM enables us to machine undercut, grooves & even more
                through electric discharge.
              </p>
              <button href="#" className="btn btn-primary" onClick={navigateToContact}>
                Enquire Now
              </button>
            </div>
          </div>
          <div className="col d-flex mb-4 align-items-start">
            <div className="icon-square text-body-emphasis rounded bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              {/* <BiAtom /> */}
              <img src={process.env.PUBLIC_URL + "/icons8-grinding-machine-96.png"} alt="Surface Grinding" />
            </div>
            <div>
              <h3 className="fs-2">Surface Grinding</h3>
              <p>
                Surface Grinding is done precisely on a workpiece upto 1000x550
                MM within 20 microns accuracy.
              </p>
              <button href="#" className="btn btn-primary" onClick={navigateToContact}>
                Enquire Now
              </button>
            </div>
          </div>
          <div className="col d-flex mb-4 align-items-start">
            <div className="icon-square text-body-emphasis rounded bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              {/* <BiAtom /> */}
              <img src={process.env.PUBLIC_URL + "/machine.png"} alt="Injection Moulding" width={96} height={96} />
            </div>
            <div>
              <h3 className="fs-2">Injection Moulding</h3>
              <p>
                250 tonn moulding facility makes it effortless to manufacture
                parts weighing upto 500 grams.
              </p>
              <button href="#" className="btn btn-primary" onClick={navigateToContact}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <VpsFooter />
    </>
  );
}
