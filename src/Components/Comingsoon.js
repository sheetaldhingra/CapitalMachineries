import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Vpsheader from "./Vpsheader";
import VpsFooter from "./VpsFooter";

export default function Comingsoon() {
  //const Comingsoon = () => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    // Set the countdown date
    const countdownDate = new Date("September 1, 2023 00:00:00").getTime();

    // Update the countdown every 1 second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      const distance = countdownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the countdown string
      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Update the countdown state
      setCountdown(countdownString);

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Website is now live!");
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Vpsheader />
      <div className="coming-soon mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/comingsoon.webp"}
                alt="Coming Soon"
              />
              {/* <h1 className="section-heading">Coming Soon</h1>
              <p className="section-description">
                We're working hard to bring you our manufacturing website. Stay
                tuned!
              </p>
              <div className="countdown">{countdown}</div> */}
            </Col>
          </Row>
        </Container>
      </div>
      <VpsFooter />
    </>
  );
  //}
}
