import React from "react";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ImageSlider() {
  function scroll() {
    var ele = document.getElementById("moldRange");
    window.scrollTo({
      left: ele.offsetLeft,
      top: ele.offsetTop,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "relative" }}
      >
        <h1
          className="rounded z-2 "
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        ></h1>
        <h1
          className="rounded z-2 moldtxt"
          style={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          We manufacture molds with high class quality
        </h1>
        <button
          className="rounded z-2 btn viewmoldbtn"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={scroll}
        >
          View Molds
        </button>
        <div className="mb-4 carousel slide carousel-fade">
          <Carousel className="mb-4" fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Home.jpg"}
                alt="First slide"
              />
              {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p className="about-content">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Home (2).jpg"}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Haas VM 3.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/MILACRON N SERIES 200.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/20230422_114556.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/ACCUTE X CNC EDM.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Hantian ma1200.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/KENT 510 SURFACE GRENDER.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/KG VMC.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/KINGSTEN VMC.jpg"}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/LOKESH CNC.jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
            <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/MILACRON.jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
            {/* <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img12.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img13.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img14.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img15.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img16.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img17.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img18.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/img19.jpg'}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className="about-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
      {/* <div className="container">
    <hr />
    </div> */}
    </>
  );
}
