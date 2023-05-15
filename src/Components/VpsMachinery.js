import React, { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";
import "../Style/Machinery.css";

export default function VpsMachinery() {
  const [slideData, setSlideData] = useState([]);
  const headers = {};
  const search = "";
  const getMachinesData = async () => {
    const res = await fetch(process.env.REACT_APP_VercelUrl + "/machines", {
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
    getMachinesData();
  }, [search]);
  return (
    <div
      className="album  bg-body-dark"
      data-inviewport="scale-in"
      id="Machinery_div"
    >
      <div className="container" data-inviewport="fade-rotate">
        <h2 className="d-flex justify-content-center mb-4">Machinery</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {slideData.map((item, index) => {
            return (
              <div key={item._id} className="col">
                <div className="card shadow-sm">
                  <img
                    src={item.image}
                    alt="VPS Engineering Corporation"
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                  />
                  <div className="card-body">
                    <h2 className="d-flex justify-content-center align-items-center">
                      {item.title}
                    </h2>
                    <p className="card-text text-dark">{item.Description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
}
