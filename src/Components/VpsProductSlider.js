import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCardSlider from "react-card-slider-component";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function VpsProductSlider() {
  const [slideData, setSlideData] = useState([]);
  const navigate = useNavigate();
  var slides = [];
  var slideClick = [];
  const sliderClick = (index) => {
    navigate("/singleProduct", {
      state: {
        name: slideClick[index].title,
        description: slideClick[index].description,
        image: slideClick[index].image,
      },
    });
    $("#navbarTogglerDemo02").find(".nav-link").removeClass("active");
    $("#navbarTogglerDemo02").find(".products").addClass("active");
  };
  const headers = {};
  
  const search = "";
  const getProductsData = async () => {
    $('.moldLoader').addClass('d-flex').removeClass('d-none');
    $('.moldContent').removeClass('d-flex').addClass('d-none');
    // const res = await fetch(process.env.REACT_APP_LocalUrl + "/products?isShow=1", {
    const res = await fetch(process.env.REACT_APP_VercelUrl + "/products?isShow=1", {
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
        slides = [];
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            setSlideData(slides);
          }
        });
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
      <h1
        className="d-flex align-items-center justify-content-center mb-4"
        id="moldRange"
      >
        Molds manufactured for parts...
      </h1>
      <div className="container d-flex justify-content-center my-5 moldLoader">
        <div className="spinner-grow spinner-grow-sm mx-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-sm mx-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-center align-items-center moldContent" style={{display:'none'}}>
        <ReactCardSlider className="sdd" slides={slideData} />
      </div>
      <div className="container d-flex justify-content-center my-5">
        <Link className="btn btn-primary text-light" to="/products">
          READ MORE ABOUT MOLDS
        </Link>
      </div>
    </>
  );
}
// export default function VpsProductSlider() {
//   const [slideData, setSlideData] = useState([]);
//   const navigate = useNavigate();
//   const sliderClick = (index) => {
//     navigate("/singleProduct", {
//       state: {
//         name: slides[index].title,
//         description: slides[index].Description,
//         image: slides[index].image,
//       },
//     });
//     $("#navbarTogglerDemo02").find(".nav-link").removeClass("active");
//     $("#navbarTogglerDemo02").find(".products").addClass("active");
//   };
//   const headers = {};
//   var slides = [];
//   const search = '';
//   const getProductsData = async () => {
//     const res = await fetch(process.env.REACT_APP_VercelUrl + "/machines", {
//       method: "GET",
//       headers: headers,
//     })
//       .then((response) => {
//         if (!response.ok) {
//         }
//         return response.json();
//       })
//       .then((data) => {
//         slides = [];
//         $(data.myData).each(function (pr, prod) {
//           if (prod.Active || prod.Active === "true") {
//             slides.push({
//               image: prod.image,
//               title: prod.title,
//               description: prod.Description,
//               clickEvent: () => sliderClick(pr),
//             });
//             setSlideData(slides);
//           }
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   useEffect(() => {
//     getProductsData();
//   }, [search]);
//   return (
//     <>
//     <h1 className="d-flex align-items-center justify-content-center" id="moldRange">Our Mold Range</h1>
//     <div
//       className="mt-4"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >

//       <ReactCardSlider className="sdd" slides={slideData} />
//     </div>
//     <div className="container d-flex justify-content-center mt-4">
//     <Link className="btn btn-primary text-light" to='/products'>READ MORE ABOUT MOLDS</Link>
//     </div>
//     </>
//   );
// }
