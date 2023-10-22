import React, { useState } from "react";
import "../Style/VpsProducts.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import $ from "jquery";

export default function VpsProducts(props) {
  const [totalRecord, setTotalRecord] = useState(0);
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [paginationLinksHTML, setpaginationLinksHTML] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const headers = {};
  const search = "";
  var url = process.env.REACT_APP_VercelUrl + "/" + props.url + "?page=1";
  const getProductsData = async () => {
    // const res = await fetch(process.env.REACT_APP_VercelUrl + "/products", {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
        }
        $(".moldLoader").addClass("d-flex");
        // $(".moldContent").addClass("d-flex").removeClass("d-none");
        return response.json();
      })
      .then((data) => {
        $(".moldLoader").addClass("d-flex");
        // $(".moldContent").addClass("d-flex").removeClass("d-none");
        setSlideData(data.myData);
        setTotalRecord(data.nbHits);
        setMaxPageNum(Math.ceil(totalRecord / 10));
        renderPaginationLinks();
        if (data.myData.length > 0) {
          $(".noResult").addClass("d-none");
          $(".moldLoader").removeClass("d-flex").addClass("d-none");
          $(".moldContent").addClass("d-flex").removeClass("d-none");
        } else {
          $(".noResult").removeClass("d-none");
          $(".moldLoader").removeClass("d-flex").addClass("d-none");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    $(".moldLoader").addClass("d-flex");
    getProductsData();
  }, [totalRecord]);

  const renderPaginationLinks = () => {
    if (totalRecord > 0) {
      if (totalRecord > 10) {
        $(".nextBtn").removeClass("disabled");
      } else {
        $(".nextBtn").addClass("disabled");
      }
      const paginationLinks = [];
      for (let index = 0; index < Math.ceil(totalRecord / 10); index++) {
        if (index === 0) {
          paginationLinks.push(
            <li className="page-item" key={index}>
              <button
                className="page-link numBtn firstButton active"
                pagenum={index + 1}
                onClick={getPageData}
              >
                {index + 1}
              </button>
            </li>
          );
        } else if (index === Math.ceil(totalRecord / 10) - 1) {
          paginationLinks.push(
            <li className="page-item" key={index}>
              <button
                className="page-link numBtn lastButton"
                pagenum={index + 1}
                onClick={getPageData}
              >
                {index + 1}
              </button>
            </li>
          );
        } else {
          paginationLinks.push(
            <li className="page-item numItems" key={index}>
              <button
                className="page-link numBtn"
                pagenum={index + 1}
                onClick={getPageData}
              >
                {index + 1}
              </button>
            </li>
          );
        }
      }
      setpaginationLinksHTML(paginationLinks);
    }
  };
  const getPageData = (event) => {
    event.stopPropagation();
    $(".numBtn").removeClass("active");
    $(event.target).addClass("active");
    url =
      process.env.REACT_APP_VercelUrl +
      "/" +
      props.url +
      "?page=" +
      $(event.target).attr("pagenum");
    getProductsData();
    if ($(event.target).hasClass("firstButton")) {
      $(".previousBtn").addClass("disabled");
      $(".nextBtn").removeClass("disabled");
    } else if ($(event.target).hasClass("lastButton")) {
      $(".previousBtn").removeClass("disabled");
      $(".nextBtn").addClass("disabled");
    } else {
      $(".previousBtn").removeClass("disabled");
      $(".nextBtn").removeClass("disabled");
    }
  };
  const goToprevious = () => {
    var currentPage = parseInt($(".page-item .numBtn.active").attr("pagenum"));
    $(".page-item .numBtn").removeClass("active");
    $(".page-item .numBtn[pagenum=" + (currentPage - 1) + "]").addClass(
      "active"
    );
    url =
      process.env.REACT_APP_VercelUrl +
      "/" +
      props.url +
      "?page=" +
      (currentPage - 1);
    getProductsData();
    if (
      $(".page-item .numBtn[pagenum=" + (currentPage - 1) + "]").hasClass(
        "firstButton"
      )
    ) {
      $(".previousBtn").addClass("disabled");
    }
    $(".nextBtn").removeClass("disabled");
  };
  const goToNext = () => {
    var currentPage = parseInt($(".page-item .numBtn.active").attr("pagenum"));
    $(".page-item .numBtn").removeClass("active");
    $(".page-item .numBtn[pagenum=" + (currentPage + 1) + "]").addClass(
      "active"
    );
    url =
      process.env.REACT_APP_VercelUrl +
      "/" +
      props.url +
      "?page=" +
      (currentPage + 1);
    getProductsData();
    if (
      $(".page-item .numBtn[pagenum=" + (currentPage + 1) + "]").hasClass(
        "lastButton"
      )
    ) {
      $(".nextBtn").addClass("disabled");
    }
    $(".previousBtn").removeClass("disabled");
  };
  return (
    <>
      {/* <Vpsheader /> */}
      {slideData.length > 0 ? (
        slideData.map((item, index) => {
          return (
            <>
              <div className="container" key={item._id}>
                <div className="row" key={item.title}>
                  {(index + 1) % 2 === 1 ? (
                    <>
                      <div className="col-lg-6 mb-3 d-flex align-items-center justify-content-center" key={item._id + "3"}>
                        {/* Product Image */}
                        <img
                          src={item.image !== "" ? item.image : item.LongDescription.split(",")[0]}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-6 mb-3" key={item._id + "4"}>
                        {/* Product Description */}
                        <h2>{item.title}</h2>
                        <hr />
                        <ul className="list-group list-group-flush">
                          {item.Specification1 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification1}
                              </li>
                            </>
                          )}
                          {item.Value1 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value1}</li>
                            </>
                          )}
                          {item.Specification2 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification2}
                              </li>
                            </>
                          )}
                          {item.Value2 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value2}</li>
                            </>
                          )}
                          {item.Specification3 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification3}
                              </li>
                            </>
                          )}
                          {item.Value3 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value3}</li>
                            </>
                          )}
                          {item.Specification4 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification4}
                              </li>
                            </>
                          )}
                          {item.Value4 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value4}</li>
                            </>
                          )}
                          {item.Specification5 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification5}
                              </li>
                            </>
                          )}
                          {item.Value5 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value5}</li>
                            </>
                          )}
                        </ul>

                        {/* Product Specifications */}
                        {item.LongDescription.split(",")[1] !== "" && item.image === "" &&
                        item.LongDescription.split(",")[1] !== undefined ? (
                          <>
                            <h3>Specifications:</h3>
                            <img
                              src={item.LongDescription.split(",")[1]}
                              alt={item.title}
                              className="img-fluid"
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-lg-6 mb-3" key={item._id + "4"}>
                        {/* Product Description */}
                        <h2>{item.title}</h2>
                        <hr />
                        <ul className="list-group list-group-flush">
                          {item.Specification1 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification1}
                              </li>
                            </>
                          )}
                          {item.Value1 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value1}</li>
                            </>
                          )}
                          {item.Specification2 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification2}
                              </li>
                            </>
                          )}
                          {item.Value2 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value2}</li>
                            </>
                          )}
                          {item.Specification3 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification3}
                              </li>
                            </>
                          )}
                          {item.Value3 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value3}</li>
                            </>
                          )}
                          {item.Specification4 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification4}
                              </li>
                            </>
                          )}
                          {item.Value4 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value4}</li>
                            </>
                          )}
                          {item.Specification5 !== "" && (
                            <>
                              <li className="list-group-item">
                                {item.Specification5}
                              </li>
                            </>
                          )}
                          {item.Value5 !== "" && (
                            <>
                              <li className="list-group-item">{item.Value5}</li>
                            </>
                          )}
                        </ul>

                        {/* Product Specifications */}
                        {item.LongDescription !== "" && item.image === "" &&
                        item.LongDescription !== undefined ? (
                          <>
                            <h3>Specifications:</h3>
                            <img
                              src={item.LongDescription.split(",")[1]}
                              alt={item.title}
                              className="img-fluid"
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col-lg-6 mb-3 d-flex align-items-center justify-content-center" key={item._id + "5"}>
                        {/* Product Image */}
                        <img
                          src={item.image !== "" ? item.image : item.LongDescription.split(",")[0]}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
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
        })
      ) : (
        <div className="coming-soon d-none noResult mt-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} className="text-center">
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL + "/noresult.jpg"}
                  alt="noResult"
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {slideData.length > 0 ? (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item ">
              <button
                className="page-link previousBtn disabled"
                onClick={goToprevious}
                tabIndex="-1"
              >
                Previous
              </button>
            </li>
            {paginationLinksHTML}
            <li className="page-item">
              <button className="page-link nextBtn" onClick={goToNext}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
}
