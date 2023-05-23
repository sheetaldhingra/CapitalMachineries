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
    if (window.location.pathname === "/products") {
      $(".products").addClass("active");
    } else if (window.location.pathname === "/contact") {
      $(".contact").addClass("active");
    } else if (window.location.pathname === "/about") {
      $(".about").addClass("active");
    } else if (window.location.pathname === "/facilities") {
      $(".facilities").addClass("active");
    } else if (window.location.pathname === "/manufacture") {
      $(".manufaturing").addClass("active");
    } else if(window.location.pathname === "/") {
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
                to="https://www.instagram.com/vpsecorp/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
          </ul>
          <Link
            className="navbar-brand d-flex align-items-center text-light"
            href="#"
          >
            Call Us: <BsPhone />
            +91-8826484591
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
              src={process.env.PUBLIC_URL + "/vpslogo.png"}
              alt="Logo"
              height="45"
              className="d-inline-block "
            />
            <strong className="m-2 text-light">
              V.P.S Engineering Corporation
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
              <li className="nav-item">
                <Link
                  className="nav-link products"
                  onClick={showHideNavMenu}
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
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
              </li>
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
