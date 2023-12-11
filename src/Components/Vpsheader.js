import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { BsPhone } from "react-icons/bs";
export default function Vpsheader() {
  const navigate = useNavigate();
  const showHideNavMenu = (event) => {
    const navigationMenu = document.getElementById("navbarTogglerDemo02");
    navigationMenu.classList.toggle("show");
    $("#navbarTogglerDemo02").find(".nav-link").removeClass("active");
    $(event.target).addClass("active");
  };
  useEffect(() => {
    $("#navbarTogglerDemo02").find(".nav-link").removeClass("active");
    // if (window.location.pathname.includes("/products")) {
    //   $(".products").addClass("active");
    // }
     if (window.location.pathname === "/contact") {
      $(".contact").addClass("active");
    } else if (window.location.pathname === "/about") {
      $(".about").addClass("active");
    } else if (window.location.pathname === "/facilities") {
      $(".facilities").addClass("active");
    } else if (window.location.pathname === "/manufacture") {
      $(".manufaturing").addClass("active");
    }
    else if(window.location.pathname.includes("/bosch")){
      $(".products").addClass("active");
      $(".bosch").addClass("active");
    }
    else if(window.location.pathname.includes("/forte")){
      $(".products").addClass("active");
      $(".forte").addClass("active");
    }
    else if(window.location.pathname.includes("/sandhu")){
      $(".products").addClass("active");
      $(".sandhu").addClass("active");
    }
    else if(window.location.pathname.includes("/greatyuva")){
      $(".products").addClass("active");
      $(".greatYuva").addClass("active");
    }
    else if(window.location.pathname.includes("/dura-shine")){
      $(".products").addClass("active");
      $(".dura").addClass("active");
    }
    else if(window.location.pathname.includes("/heapro")){
      $(".products").addClass("active");
      $(".heapro").addClass("active");
    }
    else if(window.location.pathname.includes("/ralli")){
      $(".products").addClass("active");
      $(".ralli").addClass("active");
    }
    else if(window.location.pathname.includes("/starblaze")){
      $(".products").addClass("active");
      $(".starblaze").addClass("active");
    }
    else if(window.location.pathname.includes("/warpp")){
      $(".products").addClass("active");
      $(".warpp").addClass("active");
    }
     else if(window.location.pathname === "/") {
      $(".home").addClass("active");
    }
  });
  const searchMold = (event) => {
    event.preventDefault();
    if ($("#searchMold").val() !== "") {
      $("#searchMold").removeClass("is-invalid")
      navigate("/searchResult", {
        state: {
          searchText: $("#searchMold").val(),
        },
      });
    }
    else{
      $("#searchMold").addClass("is-invalid")
      return false;
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-body-tertiary contactNav">
        <div className="container-fluid d-flex align-items-center">
          <ul className="navbar-nav flex-row justify-content-start">
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                to="/"
                // target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
          </ul>
          <Link
            className="navbar-brand d-flex align-items-center text-light headerNum"
            href="#"
          >
            Call Us: <BsPhone />
            +91-9810136997, 9810938527
          </Link>
        </div>
      </nav>

      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary vpsheader bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <img
              src={process.env.PUBLIC_URL + "/weldingmachine/logo.png"}
              alt="Logo"
              height="45"
              className="d-inline-block "
            />
            <strong className="m-2 text-light">
              Capital Machineries
            </strong>
          </Link>
          {/* <Link className="navbar-brand" href="#">VPS Engineering Corporation</Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
            style={{ justifyContent: "right" }}
          >
            <ul className="navbar-nav  mx-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link home active"
                  aria-current="page"
                  onClick={showHideNavMenu}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link about"
                  onClick={showHideNavMenu}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown productsli">
          <Link className="nav-link dropdown-toggle products" to="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Products
          </Link>
          <ul className="dropdown-menu productsList">
            <li className="px-3"><Link className="dropdown-item nav-link bosch" to="/products/bosch">Bosch</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link forte" to="/products/forte">Forte</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link sandhu" to="/products/sandhu">Sandhu</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link greatYuva" to="/products/greatyuva">Great Yuva</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link dura" to="/products/dura-shine">Dura Shine</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link heapro" to="/products/heapro">Heapro</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link ralli" to="/products/ralli">Ralli Wolf</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link starblaze" to="/products/starblaze">Star Blaze</Link></li>
            <li className="px-3"><Link className="dropdown-item nav-link warpp" to="/products/warpp">Warpp</Link></li>
          </ul>
        </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link products"
                  onClick={showHideNavMenu}
                  to="/products"
                >
                  Products
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className="nav-link facilities"
                  onClick={showHideNavMenu}
                  to="/facilities"
                >
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link manufaturing"
                  onClick={showHideNavMenu}
                  to="/manufacture"
                >
                  Manufacturing
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link contact"
                  onClick={showHideNavMenu}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                id="searchMold"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-primary"
                onClick={searchMold}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
