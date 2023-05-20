import React, { useState } from "react";
import "../Style/VpsProducts.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function VpsProducts() {
  const [totalRecord, setTotalRecord] = useState(0);
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [paginationLinksHTML, setpaginationLinksHTML] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const headers = {};
  const search = "";
  var url=process.env.REACT_APP_LocalUrl + "/products?page=1";
  const getProductsData = async () => {
    // const res = await fetch(process.env.REACT_APP_VercelUrl + "/products", {
    const res = await fetch(url, {
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
        setTotalRecord(data.nbHits);
        setMaxPageNum(Math.ceil(totalRecord / 10));
        renderPaginationLinks()
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getProductsData();
  }, [totalRecord]);

  const renderPaginationLinks = () => {
    if (totalRecord > 0) {
      const paginationLinks = [];
      for (let index = 0; index < Math.ceil(totalRecord / 10); index++) {
        
        if(index === 0){
        paginationLinks.push(
          <li className="page-item" key={index}>
            <button className="page-link numBtn firstButton active" pagenum={index + 1} onClick={getPageData}>
              {index + 1}
            </button>
          </li>
        );
        }
        else if(index === (Math.ceil(totalRecord / 10) - 1)){
          paginationLinks.push(
            <li className="page-item" key={index}>
              <button className="page-link numBtn lastButton" pagenum={index + 1} onClick={getPageData}>
                {index + 1}
              </button>
            </li>
          );
        }
        else{
          paginationLinks.push(
            <li className="page-item numItems" key={index}>
              <button className="page-link numBtn" pagenum={index + 1} onClick={getPageData}>
                {index + 1}
              </button>
            </li>
          );
        }
      }
      setpaginationLinksHTML(paginationLinks);
    }
  };
  const getPageData = (event) =>{
    event.stopPropagation();
    $('.numBtn').removeClass('active')
    $(event.target).addClass('active')
    url=process.env.REACT_APP_LocalUrl + "/products?page="+$(event.target).attr('pagenum');
    getProductsData();
    if($(event.target).hasClass('firstButton')){
      $('.previousBtn').addClass('disabled')
      $('.nextBtn').removeClass('disabled')
    }
    else if($(event.target).hasClass('lastButton')){
      $('.previousBtn').removeClass('disabled')
      $('.nextBtn').addClass('disabled')
    }
    else{
      $('.previousBtn').removeClass('disabled')
      $('.nextBtn').removeClass('disabled')
    }
  }
  const goToprevious =()=>{
    var currentPage = parseInt($('.page-item .numBtn.active').attr('pagenum'))
    $('.page-item .numBtn').removeClass('active')
    $('.page-item .numBtn[pagenum='+(currentPage - 1)+']').addClass('active')
    url=process.env.REACT_APP_LocalUrl + "/products?page="+(currentPage-1);
    getProductsData();
    if($('.page-item .numBtn[pagenum='+(currentPage - 1)+']').hasClass('firstButton')){
      $('.previousBtn').addClass('disabled')
    }
    $('.nextBtn').removeClass('disabled')
  }
  const goToNext = ()=>{
    var currentPage = parseInt($('.page-item .numBtn.active').attr('pagenum'))
    $('.page-item .numBtn').removeClass('active')
    $('.page-item .numBtn[pagenum='+(currentPage + 1)+']').addClass('active')
    url=process.env.REACT_APP_LocalUrl + "/products?page="+(currentPage+1);
    getProductsData();
    if($('.page-item .numBtn[pagenum='+(currentPage + 1)+']').hasClass('lastButton')){
      $('.nextBtn').addClass('disabled')
    }
    $('.previousBtn').removeClass('disabled')
  }
  return (
    <>
      {/* <Vpsheader /> */}
      {slideData.map((item, index) => {
        return (
          <div className="col-md-6" key={item._id}>
            <div className="row g-0 border productBoxShadow rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary"></strong>
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
      <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item ">
          <button className="page-link previousBtn disabled" onClick={goToprevious} tabIndex="-1">
            Previous
          </button>
        </li>
        {paginationLinksHTML}
        <li className="page-item">
          <button className="page-link nextBtn" onClick={goToNext} >
            Next
          </button>
        </li>
      </ul>
    </nav>
    </>
  );
}
