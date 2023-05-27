import React, { useEffect } from "react";
import "../Style/VpsProductsview.css";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export default function VpsProductView() {
  const obsOptions = {};
  useEffect(() => {
    const inViewport = (entries, observer) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };
    const Obs = new IntersectionObserver(inViewport);
    const ELs_inViewport = document.querySelectorAll("#productImages");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }, [obsOptions]);
  return (
    <div
      className="rounded mb-2"
      // style={{ backgroundColor: "rgb(105 105 105 / 13%)" }}
      style={{ backgroundColor: "#D4D4D4" }}
    >
      <div className="container" id="productGallery">
        <div className="row">
          <div className="col-sm-12 col-md-6 ">
            <h1 className="d-flex productQuote my-4 text-light justify-content-center">
              <ImQuotesLeft />
            </h1>
            <h1
              className="text-dark position-relative productviewheading section-heading"
              style={{ position: "relative", top: "25%!important" }}
            >
              Precision molds, limitless possibilities: <strong>VPS Engineering Corporation</strong>
            </h1>
          </div>
          <div
            className="col-sm-12 row col-md-6"
            id="productImages"
            // style={{
            //   backgroundImage: `url(${
            //     process.env.PUBLIC_URL + "/logo1.png"
            //   })`
            // }}
          >
            <div className="col-sm-12 col-md-6 imageanimate productImgShadow">
              <img
                src={process.env.PUBLIC_URL + "/HPDCZINCMOLD.jpg"}
                className="img-fluid rounded m-2"
                alt="Product"
                width={800}
                height={600}
              />
            </div>
            <div className="col-sm-12 col-md-6 productImgShadow">
              <img
                src={process.env.PUBLIC_URL + "/BLOWMOLD.jpg"}
                className="img-fluid rounded m-2"
                alt="Product"
                width={402}
                height={268}
              />
            </div>
            <div className="col-sm-12 col-md-6 productImgShadow">
              <img
                src={process.env.PUBLIC_URL + "/SLIDERMOLD.jpg"}
                className="img-fluid rounded m-2"
                alt="Product"
                width={350}
                height={266}
              />
            </div>
            <div className="col-sm-12 col-md-6 productImgShadow">
              <img
                src={process.env.PUBLIC_URL + "/STIPPERPLATEMOLD.jpg"}
                className="img-fluid rounded m-2"
                alt="Product"
                width={350}
                height={266}
              />
            </div>
          </div>
        </div>
        <div className="d-flex m-3 justify-content-center">
          <h1 className="mx-4 productQuote">
            <ImQuotesLeft />
          </h1>
          <h1 className="my-5">
            Empowering innovation through precision molds.
          </h1>
          <h1 className="mx-4 productQuote">
            <ImQuotesRight />
          </h1>
        </div>
      </div>
    </div>
  );
}
