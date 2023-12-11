import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
    $(".moldLoader").addClass("d-flex").removeClass("d-none");
    $(".moldContent").removeClass("d-flex").addClass("d-none");
    slides = [];
    // const res = await fetch(process.env.REACT_APP_LocalUrl + "/products?isShow=1&page=1&limit=4", {
    const Boschres = await fetch(
      process.env.REACT_APP_VercelUrl +
        "/bosch?isShow=1&page=1&limit=4&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const forteres = await fetch(
      process.env.REACT_APP_VercelUrl + "/forte?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const sandhures = await fetch(
      process.env.REACT_APP_VercelUrl + "/sandhu?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const durares = await fetch(
      process.env.REACT_APP_VercelUrl + "/dura?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const heaprores = await fetch(
      process.env.REACT_APP_VercelUrl + "/heapro?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const starres = await fetch(
      process.env.REACT_APP_VercelUrl + "/star?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const rallires = await fetch(
      process.env.REACT_APP_VercelUrl + "/ralli?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const warppres = await fetch(
      process.env.REACT_APP_VercelUrl + "/warpp?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            //setSlideData(slides);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    const res = await fetch(
      process.env.REACT_APP_VercelUrl + "/products?isShow=1&page=1&limit=4",
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (!response.ok) {
        }
        $(".moldLoader").removeClass("d-flex").addClass("d-none");
        $(".moldContent").addClass("d-flex").removeClass("d-none");
        return response.json();
      })
      .then((data) => {
        $(".moldLoader").removeClass("d-flex").addClass("d-none");
        $(".moldContent").addClass("d-flex").removeClass("d-none");
        $(data.myData).each(function (pr, prod) {
          if (
            (prod.IsShow || prod.IsShow === "true") &&
            (prod.Active || prod.Active === "true")
          ) {
            slides.push({
              image: prod.image,
              title: prod.title,
              description: prod.ShortDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slideClick.push({
              image: prod.image,
              title: prod.title,
              description: prod.LongDescription,
              LongDescription: prod.LongDescription,
              clickEvent: () => sliderClick(pr),
            });
            slides = slides.filter(
              (arr, index, self) =>
                index === self.findIndex((t) => t.title === arr.title)
            );
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
  const breakpoints = {
    768: {
      perPage: 1, // Show 1 slide per page on screens with width <= 768px (phones)
    },
    992: {
      perPage: 3, // Show 3 slides per page on screens with width <= 992px (tablets)
    },
    1200: {
      perPage: 4, // Show 4 slides per page on screens with width > 992px (desktops)
    },
  };
  function sliderClick1(index) {
    if (index !== undefined && slideClick.length > 0) {
      navigate("/singleProduct", {
        state: {
          name: slideClick[index].title,
          description: slideClick[index].description,
          image: slideClick[index].image,
        },
      });
      $("#navbarTogglerDemo02").find(".nav-link").removeClass("active");
      $("#navbarTogglerDemo02").find(".products").addClass("active");
    }
  }
  return (
    <>
      <h1
        className="d-flex align-items-center justify-content-center mb-4"
        id="moldRange"
      >
        We Deal In...
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
      <div className="container">
        <div className="row">
          <div className="col">
            <Splide
              options={{
                rewind: true,
                perPage: 4,
                perMove: 1,
                focus: 0,
                omitEnd: true,
                wheel: false,
                pagination: false,
                breakpoints: breakpoints,
              }}
              aria-label="React Splide Example"
            >
              {slideData.map((slide, index) => (
                <SplideSlide
                  key={index}
                  className="splide__slide"
                  slide_id={index}
                  onClick={sliderClick1(index)}
                >
                  <Link to="/singleProduct" state={{name: `${slide.title}`, image: `${slide.LongDescription.split(",")[0]}`, description: `${slide.description}`}}>
                  <div onClick={sliderClick1(index)}>
                    <img
                      src={slide.LongDescription.split(",")[0]}
                      alt={`Slide ${index}`}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className="slide-content">
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                  </Link>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
      {/* <div className="container d-flex justify-content-center my-5"> */}
      <div className="container d-none justify-content-center my-5">
        <Link className="btn btn-primary text-light" to="/products">
          READ MORE ABOUT MACHINES
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
