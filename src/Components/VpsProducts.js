import React, { useState } from "react";
import "../Style/VpsProducts.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function VpsProducts(props) {
  const [totalRecord, setTotalRecord] = useState(0);
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [paginationLinksHTML, setpaginationLinksHTML] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const headers = {};
  const search = "";
  var url=process.env.REACT_APP_VercelUrl + "/" + props.url + "?page=1";
  const getProductsData = async () => {
    // const res = await fetch(process.env.REACT_APP_VercelUrl + "/products", {
    const res = await fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
        }
        $('.moldLoader').removeClass('d-flex').addClass('d-none');
        $('.moldContent').addClass('d-flex').removeClass('d-none');
        return response.json();
      })
      .then((data) => {
        $('.moldLoader').removeClass('d-flex').addClass('d-none');
        $('.moldContent').addClass('d-flex').removeClass('d-none');
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
      if(totalRecord > 10){
        $('.nextBtn').removeClass('disabled')
      }
      else{
        $('.nextBtn').addClass('disabled')
      }
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
    url=process.env.REACT_APP_VercelUrl + "/" + props.url + "?page="+$(event.target).attr('pagenum');
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
    url=process.env.REACT_APP_VercelUrl + "/" + props.url + "?page="+(currentPage-1);
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
    url=process.env.REACT_APP_VercelUrl + "/" + props.url + "?page="+(currentPage+1);
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
          <>
          <div className="container d-flex justify-content-center my-5 moldLoader" key="loadingparent">
        <div className="spinner-grow spinner-grow-sm mx-1" role="status" key="loading1">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status" key="loading2">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status" key="loading3">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status" key="loading4">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status" key="loading5">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status" key="loading6">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <div className="container" key={item._id + "1"}>
      <div className="row" key={item._id + "2"}>
        {(index+1) % 2 === 1 ? <>
        <div className="col-lg-6 mb-3" key={item._id + "3"}>
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 mb-3" key={item._id + "4"}>
          {/* Product Description */}
          <h2>{item.title}</h2>
          <p>
          {item.LongDescription}
          </p>

          {/* Product Specifications */}
          {item.Specification1 !== "" && item.Specification1 !== undefined && item.Value1 !== "" && item.Value1 !== undefined ? <><h3>Specifications:</h3>
          <table className="table">
            <tbody>
              {item.Specification1 !== "" && item.Value1 !== "" ? <tr>
                <td>{item.Specification1}</td>
                <td>{item.Value1}</td>
              </tr> : ""}
              {item.Specification2 !== "" && item.Value2 !== "" ? <tr>
                <td>{item.Specification2}</td>
                <td>{item.Value2}</td>
              </tr> : ""}
              {item.Specification3 !== "" && item.Value3 !== "" ? <tr>
                <td>{item.Specification3}</td>
                <td>{item.Value3}</td>
              </tr> : ""}
              {item.Specification4 !== "" && item.Value4 !== "" ? <tr>
                <td>{item.Specification4}</td>
                <td>{item.Value4}</td>
              </tr> : ""}
              {item.Specification5 !== "" && item.Value5 !== "" ? <tr>
                <td>{item.Specification5}</td>
                <td>{item.Value5}</td>
              </tr> : ""}
              {/* Add more rows for additional specifications */}
            </tbody>
          </table></> : ""}
          
        </div>
         </> : <>
         <div className="col-lg-6 mb-3" key={item._id + "5"}>
          {/* Product Description */}
          <h2>{item.title}</h2>
          <p>
          {item.LongDescription}
          </p>

          {/* Product Specifications */}
          {item.Specification1 !== "" && item.Specification1 !== undefined && item.Value1 !== "" && item.Value1 !== undefined ? <><h3>Specifications:</h3>
          <table className="table">
            <tbody>
              {item.Specification1 !== "" && item.Value1 !== "" ? <tr>
                <td>{item.Specification1}</td>
                <td>{item.Value1}</td>
              </tr> : ""}
              {item.Specification2 !== "" && item.Value2 !== "" ? <tr>
                <td>{item.Specification2}</td>
                <td>{item.Value2}</td>
              </tr> : ""}
              {item.Specification3 !== "" && item.Value3 !== "" ? <tr>
                <td>{item.Specification3}</td>
                <td>{item.Value3}</td>
              </tr> : ""}
              {item.Specification4 !== "" && item.Value4 !== "" ? <tr>
                <td>{item.Specification4}</td>
                <td>{item.Value4}</td>
              </tr> : ""}
              {item.Specification5 !== "" && item.Value5 !== "" ? <tr>
                <td>{item.Specification5}</td>
                <td>{item.Value5}</td>
              </tr> : ""}
              {/* Add more rows for additional specifications */}
            </tbody>
          </table></> : ""}
        </div>
        <div className="col-lg-6 mb-3" key={item._id + "6"}>
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid"
          />
        </div>
        </>}
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
