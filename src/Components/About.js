import React from "react";
import "../Style/about.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      {/* <div className="container" id="about">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="text-dark section-heading">About Us</h2>
            <p className="about-content">
              Established in 1997 under SI(Small Scale Ind.), V. P. S.
              Engineering Corp. first specialized in analyzing and developing
              the precision Molds and Dies. Located in Sector-37, Pace City-2,
              Gurugram, we give importance to safety, convenient work and serene
              surroundings.
            </p>
            <p className="about-content">
              V. P. S. Engineering Corp. has completed its{" "}
              {new Date().getFullYear() - 1997} years of successful services
              since its inception and feels proud to deal with many big
              companies in all over India. With competent engineers of varied
              skills, precised CNC milling, Drilling, Grinding, Lathe machining,
              EDM, Injection molding and we have pursued excellence and within a
              brief period of time we are able to cope up with the needs and
              specifications of our customers.
            </p>
            <p className="about-content">
              We are highly specialised in manufacturing best quality SWR Seals,
              Rubber and Plastic O Rings at a reasonable cost. Also the need of
              households and industrial products is being fulfilled in our plant
              since a long time. The constant search of new ideas enables us to
              deal with all desires of our customers.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img
              src={process.env.PUBLIC_URL + "/Home.jpg"}
              className="img-fluid rounded"
              alt="Logo"
            />
          </div>
        </div>
        <hr />
      </div> */}
      <section
        className="elementor-element elementor-element-472d33a elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section mb-4"
        data-id="472d33a"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
            <div
              className="elementor-element elementor-element-d7164ed elementor-column elementor-col-50 elementor-top-column"
              data-id="d7164ed"
              data-element_type="column"
            >
              <div className="elementor-column-wrap d-flex justify-content-center align-items-center  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-ad10da3 elementor-widget elementor-widget-heading"
                    data-id="ad10da3"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <p className="elementor-heading-title d-none elementor-size-default elementor-heading-title elementor-size-default elementor-align-after-mobile-center text-light">
                        About Us
                      </p>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-65ae103 elementor-widget elementor-widget-heading"
                    data-id="65ae103"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default elementor-heading-title elementor-size-default elementor-align-after-mobile-center">
                        Our Story
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-29e3e5c elementor-widget elementor-widget-text-editor"
                    data-id="29e3e5c"
                    data-element_type="widget"
                    data-widget_type="text-editor.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-text-editor elementor-clearfix">
                        <p className="text-light">
                          With a rich history dating back to 1997, we embarked
                          on our journey as a river, initially offering a
                          singular product line of welding machines. Fast
                          forward {new Date().getFullYear() - 1998}+ years, and we have evolved into a
                          formidable force in the industry. Our unwavering
                          commitment to excellence has paved the way for us to
                          collaborate with renowned brands, including Great
                          Yuva, Ralli Wolf, Stanvac Prime Limited, and more.
                        </p>
                        <p className="text-light">
                          Our tagline, "A Trusted Name in Welding Machines,"
                          stands as a testament to the unparalleled quality that
                          defines our brand. It is a reflection of the robust
                          work ethic and innovative spirit that have been the
                          cornerstones of our success. Our diverse and versatile
                          product range has been instrumental in forging
                          partnerships with esteemed names such as Hero
                          MotoCorp, Suzuki Motorcycles, Suzuki Powertrain, and
                          AG Industries.
                        </p>
                        <p className="text-light">
                          At our core, we are dedicated to delivering not just
                          products but solutions, ensuring that our customers
                          receive nothing short of excellence. With a track
                          record spanning over two decades, we invite you to
                          join us on this remarkable journey, where quality,
                          reliability, and innovation converge to create a
                          brighter future for welding solutions. Welcome to a
                          world where welding excellence knows no bounds.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-eb5c694 elementor-widget elementor-widget-sm-default-button"
                    data-id="eb5c694"
                    data-element_type="widget"
                    data-widget_type="sm-default-button.default"
                  >
                    <div className="elementor-widget-container">
                      <Link
                        to="/about"
                        className="btn bg-dark rounded text-light  "
                      >
                        Learn More <MdOutlineArrowRightAlt />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-a890f4b elementor-column elementor-col-50 elementor-top-column"
              data-id="a890f4b"
              data-element_type="column"
            >
              <div className="elementor-column-wrap  elementor-element-populated">
                <div className="elementor-widget-wrap">
                  <div
                    className="elementor-element elementor-element-f3a7c28 elementor-widget elementor-widget-image"
                    data-id="f3a7c28"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-image">
                        <img
                          width="668"
                          height="821"
                          alt="hru-our-story"
                          loading="lazy"
                          data-srcset={process.env.PUBLIC_URL + "/vpslogo2.png"}
                          sizes="(max-width: 668px) 100vw, 668px"
                          data-src={process.env.PUBLIC_URL + "/vpslogo2.png"}
                          className="attachment-large size-large lazyloaded"
                          src={process.env.PUBLIC_URL + "/vpslogo2.png"}
                          srcSet={process.env.PUBLIC_URL + "/vpslogo2.png"}
                        />
                        <noscript>
                          <img
                            width="668"
                            height="821"
                            src={process.env.PUBLIC_URL + "/vpslogo2.png"}
                            className="attachment-large size-large"
                            alt="hru-our-story"
                            loading="lazy"
                            srcSet={process.env.PUBLIC_URL + "/vpslogo2.png"}
                            sizes="(max-width: 668px) 100vw, 668px"
                          />
                        </noscript>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
