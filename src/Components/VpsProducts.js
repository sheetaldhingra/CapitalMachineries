import React, { useState } from "react";
import "../Style/VpsProducts.css";
import { useEffect } from "react";
export default function VpsProducts() {
  const [slideData, setSlideData] = useState([]);
  const headers = {};
  const search = "";
  const getProductsData = async () => {
    const res = await fetch("https://new-crud-api.vercel.app/api/products", {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        setSlideData(data.myData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getProductsData();
  }, [search]);
  return (
    <>
      {/* <Vpsheader /> */}
      {slideData.map((item, index) => {
        return (
          <div className="col-md-6" key={item._id}>
            <div className="row g-0 border productBoxShadow rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                 
                </strong>
                <h3 className="mb-0">{item.title}</h3>
                <div className="mb-1 text-body-secondary"></div>
                <p className="card-text mb-auto">{item.LongDescription}</p>
                
              </div>
              <div className="col-auto d-lg-block m-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="bd-placeholder-img img-fluid"
                />
                {/* <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg> */}
              </div>
            </div>
          </div>
        );
        // if ((index + 1) % 2 === 1 ) {
        //   return (
        //     // <div key={item._id}>
        //     //   <div className="row col-md-12 mt-2 mb-2">
        //     //     <div className="col-md-6">
        //     //       <img src={item.image} alt="Image" className="img-fluid" />
        //     //     </div>
        //     //     <div className="col-md-6">
        //     //       <h2 className="me-2">{item.title}</h2>
        //     //       <p className="me-2">{item.LongDescription}</p>
        //     //     </div>
        //     //   </div>
        //     // </div>
        //     <div key={item._id} className="text-bg-dark rounded me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        //     <div className="my-3 py-3">
        //       <h2 className="display-5">{item.title}</h2>
        //       <p className="lead text-light">{item.LongDescription}</p>
        //     </div>
        //     <div
        //       className="bg-body-tertiary shadow-sm mx-auto"
        //       style={{
        //         width: "80%",
        //         height: "300px",
        //         borderRadius: "21px 21px 0 0",
        //       }}
        //     >
        //       <img
        //         src={item.image}
        //         alt="Jane Doe"
        //         className="img-fluid"
        //       />
        //     </div>
        //   </div>
        //   );
        // } else {
        //   return(
        //   // <div key={item._id}>
        //   //   <div className="row col-md-12 mb-2">
        //   //     <div className="col-md-6 order-md-2">
        //   //       <img src={item.image} alt="Image" className="img-fluid" />
        //   //     </div>
        //   //     <div className="col-md-6 order-md-1">
        //   //       <h2 className="ms-2">{item.title}</h2>
        //   //       <p className="ms-2">{item.LongDescription}</p>
        //   //     </div>
        //   //   </div>
        //   // </div>
        //   <div key={item._id} className="bg-body-tertiary rounded me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        //     <div className="my-3 p-3">
        //       <h2 className="display-5 text-light">{item.title}</h2>
        //       <p className="lead text-light">{item.LongDescription}</p>
        //     </div>
        //     <div
        //       className="bg-dark shadow-sm mx-auto"
        //       style={{
        //         width: "80%",
        //         height: "300px",
        //         borderRadius: "21px 21px 0 0",
        //       }}
        //     >
        //       <img
        //         src={item.image}
        //         alt="Jane Doe"
        //         className="img-fluid"
        //       />
        //     </div>
        //   </div>
        //   )
        // }
      })}
    </>
  );
}
