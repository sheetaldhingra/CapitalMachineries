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
  var url = [];
  var headers = {};
  var products1 = [];
  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
    products1 = [];
    url.push(
      process.env.REACT_APP_VercelUrl + "/bosch" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/ralli" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/dura" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/forte" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/products" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/heapro" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/sandhu" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/star" +
      `?title=` +
      location.state.searchText,
      process.env.REACT_APP_VercelUrl + "/warpp" +
      `?title=` +
      location.state.searchText,
      );
      $(url).each(function(i,val){
        getData(i,val);
      })
  }, [location.state.searchText]);
  const getData = async (i,url1) => {
    const res = await fetch(url1, {
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
        products1.push(data);
        const uniqueMergedArray = Array.from(new Set(products1.flatMap(obj => Object.values(obj))));
        const ids = uniqueMergedArray.map(({ _id }) => _id);
        const filtered = uniqueMergedArray.filter(({ _id }, index) => !ids.includes(_id, index + 1));
        setProducts(filtered);
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
                    src={
                      item.image !== ""
                        ? item.image
                        : item.LongDescription.split(",")[0]
                    }
                    style={{ width: "100%" }}
                    className="img-fluid"
                    alt="logo"
                  />
                </div>
                <div className="col-sm-12 col-md-6">
                  <h2 className="section-heading text-dark">{item.title}</h2>
                  <ul className="list-group list-group-flush">
                {item.Specification1 !== "" && (
                  <>
                    <li className="list-group-item">{item.Specification1}</li>
                  </>
                )}
                {item.Value1 !== "" && (
                  <>
                    <li className="list-group-item">{item.Value1}</li>
                  </>
                )}
                {item.Specification2 !== "" && (
                  <>
                    <li className="list-group-item">{item.Specification2}</li>
                  </>
                )}
                {item.Value2 !== "" && (
                  <>
                    <li className="list-group-item">{item.Value2}</li>
                  </>
                )}
                {item.Specification3 !== "" && (
                  <>
                    <li className="list-group-item">{item.Specification3}</li>
                  </>
                )}
                {item.Value3 !== "" && (
                  <>
                    <li className="list-group-item">{item.Value3}</li>
                  </>
                )}
                {item.Specification4 !== "" && (
                  <>
                    <li className="list-group-item">{item.Specification4}</li>
                  </>
                )}
                {item.Value4 !== "" && (
                  <>
                    <li className="list-group-item">{item.Value4}</li>
                  </>
                )}
                {item.Specification5 !== "" && (
                  <>
                    <li className="list-group-item">{item.Specification5}</li>
                  </>
                )}
                {item.Value5 !== "" && (
                  <>
                    <li className="list-group-item">{item.Value5}</li>
                  </>
                )}
              </ul>
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
