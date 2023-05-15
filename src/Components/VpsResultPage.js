import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ContactUsForm from "./ContactUsForm";
import Vpsheader from "./Vpsheader";
import VpsFooter from "./VpsFooter";

import $ from "jquery";
export default function VpsResultPage() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  var url = "";
  var headers = {};
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    url =
      process.env.REACT_APP_VercelUrl + "/products" +
      `?title=` +
      location.state.searchText;
    getData();
  }, [location.state.searchText]);
  const getData = async () => {
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
        data = data.myData;
        setProducts(data);
      })
      .catch(function (error) {});
  };
  $("#searchMold").val(location.state.searchText);
  return (
    <>
      <Vpsheader />
      {products.length > 0 ? (
        products.map((item, index) => {
          return (
            <div className="container mt-4" key={item._id} id="about">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <img
                    src={item.image}
                    style={{ width: "100%" }}
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <h2 className="section-heading text-dark">{item.title}</h2>
                  <p className="about-content">{item.LongDescription}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container mt-4" id="about">
          <div className="row">
            <img
              src={process.env.PUBLIC_URL + "/noresult.jpg"}
              alt="Logo"
              height="50%"
              width="50%"
              style={{ width: "50%", position: "relative", left: "25%" }}
              className="d-inline-block "
            />
          </div>
        </div>
      )}
      <div className="container">
        <hr />
        <ContactUsForm />
        <hr />
      </div>
      <VpsFooter />
    </>
  );
}
