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
    //$(".moldLoader").addClass("d-flex").removeClass("d-none");
    //$(".moldContent").removeClass("d-flex").addClass("d-none");
    slides = [];

    slides.push({
      image: '/Bosch/BoschLogo.webp',
      title: 'Bosch',
      description: 'Bosch',
      LongDescription: 'Bosch',
      url:'/products/bosch'
    });
    slides.push({
      image: '/Forte/forte.png',
      title: 'Forte',
      description: 'Forte',
      LongDescription: 'Forte',
      url:'/products/forte'
    });
    slides.push({
      image: '/Sandhu/sandhu.png',
      title: 'Sandhu',
      description: 'Sandhu',
      LongDescription: 'Sandhu',
      url:'/products/sandhu'
    });
    slides.push({
      image: '/great_yuva/greatyuva.png',
      title: 'Great Yuva',
      description: 'Great Yuva',
      LongDescription: 'Great Yuva',
      url:'/products/greatyuva'
    });
    slides.push({
      image: '/RalliWolf/ralliwolf.png',
      title: 'Ralli Wolf',
      description: 'Ralli Wolf',
      LongDescription: 'Ralli Wolf',
      url:'/products/ralli',
      color:'#df0202'
    });
    slides.push({
      image: '/StarBlaze/starblazelogo.svg',
      title: 'Star Blaze',
      description: 'Star Blaze',
      LongDescription: 'Star Blaze',
      url:'/products/starblaze'
    });
    slides.push({
      image: '/Warpp/warpp.png',
      title: 'Warpp',
      description: 'Warpp',
      LongDescription: 'Warpp',
      url:'/products/warpp'
    });
    setSlideData(slides);

    $(".moldLoader").addClass("d-none").removeClass("d-none");
    $(".moldContent").removeClass("d-none").addClass("d-flex");
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
                  className="splide__slide px-1"
                  slide_id={index}
                  onClick={sliderClick1(index)}
                >
                  <Link to={slide.url} target="_blank" state={{name: `${slide.title}`, image: `${slide.LongDescription.split(",")[0]}`, description: `${slide.description}`}}>
                  <div onClick={sliderClick1(index)}>
                    <img
                      className="text-center"
                      src={slide.image}
                      alt={`Slide ${index}`}
                      style={{ width: "100%", height: "auto", backgroundColor: (slide.color !== undefined ? slide.color : "") }}
                    />
                    <div className="slide-content">
                      <h3 className="text-center py-4">{slide.title}</h3>
                      {/* <p>{slide.description}</p> */}
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
