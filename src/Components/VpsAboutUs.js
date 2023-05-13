import React from "react";
import Vpsheader from "./Vpsheader";
import { Container, Row, Col } from "react-bootstrap";
import VpsFooter from "./VpsFooter";

export default function VpsAboutUs() {
  return (
    <>
      <Vpsheader />
      <section className="py-5 bg-dark">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mb-4">Who We Are</h2>
              <p className="lead">
                VPS Engineering Corporation is a leading engineering firm that
                specializes in providing innovative solutions to complex
                engineering problems. Our team of highly skilled engineers has
                extensive experience in a wide range of engineering disciplines,
                including mechanical, electrical, civil, and structural
                engineering.
              </p>
              <p className="lead">
                At VPS Engineering Corporation, we are committed to delivering
                exceptional service and quality to our clients. We pride
                ourselves on our ability to deliver projects on time and on
                budget, while exceeding our clients' expectations.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={process.env.PUBLIC_URL + "/Home.jpg"}
                alt="VPS Engineering Corporation"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="container">
        <hr />
      </div>
      <section className="py-3 bg-dark">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center mb-4">Meet Our Team</h2>
            </Col>
            <Col md={4}>
              <div className="card shadow-sm mb-4">
                <div className="card-img-top position-relative">
                  <img
                    src={process.env.PUBLIC_URL + "/avatar.png"}
                    alt="Jane Doe"
                    className="img-fluid"
                  />
                  <h3
                    className="text-center text-light text-dark position-absolute w-100"
                    style={{ bottom: "20px" }}
                  >
                    John Smith
                  </h3>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-dark">Mechanical Engineer</h5>
                  <p className="card-text text-dark">
                    John is a mechanical engineer with over 10 years of
                    experience in designing and analyzing complex mechanical
                    systems. He holds a Bachelor of Science in Mechanical
                    Engineering from the University of Michigan.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card shadow-sm mb-4">
                <div className="card-img-top position-relative">
                  <img
                    src={process.env.PUBLIC_URL + "/avatar.png"}
                    alt="Jane Doe"
                    className="img-fluid"
                  />
                  <h3
                    className="text-center text-light text-dark position-absolute w-100"
                    style={{ bottom: "20px" }}
                  >
                    Jane Doe
                  </h3>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Civil Engineer</h5>
                  <p className="card-text text-dark">
                    Jane is a civil engineer with over 8 years of experience in
                    designing and analyzing complex civil infrastructure. She
                    holds a Bachelor of Science in Civil Engineering from the
                    University of California, Los Angeles.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card shadow-sm mb-4">
                <div className="card-img-top position-relative">
                  <img
                    src={process.env.PUBLIC_URL + "/avatar.png"}
                    alt="Jane Doe"
                    className="img-fluid"
                  />
                  <h3
                    className="text-center text-light text-dark position-absolute w-100"
                    style={{ bottom: "20px" }}
                  >
                    Bob Johnson
                  </h3>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Electrical Engineer</h5>
                  <p className="card-text text-dark">
                    Jane is a civil engineer with over 8 years of experience in
                    designing and analyzing complex civil infrastructure. She
                    holds a Bachelor of Science in Civil Engineering from the
                    University of California, Los Angeles.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="container">
        <hr />
      </div>
      <VpsFooter />
    </>
  );
}
