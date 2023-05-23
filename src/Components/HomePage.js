import React, { useEffect } from "react";
import About from "./About";
import ImageSlider from "./ImageSlider";
import VpsProductSlider from "./VpsProductSlider";
import Vpsheader from "./Vpsheader";
import Facilities from "./Facilities";
import Chooseus from "./Chooseus";
import VpsFooter from "./VpsFooter";
import VpsMachinery from "./VpsMachinery";
import $ from "jquery"
import { FiPlus } from "react-icons/fi";
import VpsProductView from "./VpsProductView";
export default function HomePage() {
  const obsOptions = {};
  useEffect(() => {
    const inViewport = (entries, observer) => {
      entries.forEach((entry) => {
        if(!$('#clientSection').hasClass('is-inViewport')){
          $('#clientSection .clientVal').text(0);
        }
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        const counters = document.querySelectorAll('.clientVal');
        const speed = 200;
        
        counters.forEach( counter => {
           const animate = () => {
              const value = +counter.getAttribute('clientnum');
              const data = +counter.innerText;
             
              const time = value / speed;
             if(data < value) {
                  counter.innerText = Math.ceil(data + time);
                  setTimeout(animate, 50);
                }else{
                  $(counter).html(value)
                  $('.clientVal:last').html(value + "+")
                }
             
           }
           
           animate();
        });
      });
    };
    const Obs = new IntersectionObserver(inViewport);
    const ELs_inViewport = document.querySelectorAll("#clientSection");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
  }, [obsOptions]);

  const counters = document.querySelectorAll('.clientVal');
const speed = 100;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('clientnum');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
      console.log($(counter));
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          $(counter).html(value)
          $('.clientVal:last').html(value + "+")
        }
     
   }
   
   animate();
});

  return (
    <>
      <Vpsheader />
      <ImageSlider />
      <About />
      {/* <VpsMachinery /> */}
      <VpsProductSlider />
      {/* <div className="container">
        <hr/>
      </div> */}
      <div className="container marketing mt-3 mb-5 pt-lg-5" id="clientSection">
        <div className="row">
          <div className="col-lg-4">
            {/* <img
              className="mb-4 mx-auto"
              src={process.env.PUBLIC_URL + "/idea.svg"}
              alt="Generic placeholder image"
              width="48"
            /> */}
            <h1 className="clientVal d-flex justify-content-center align-items-center" clientnum='100'>0</h1>
            <p className="d-flex justify-content-center align-items-center">Clients across India</p>
          </div>
          <div className="col-lg-4">
            {/* <img
              className="mb-4 mx-auto"
              src={process.env.PUBLIC_URL + "/award.svg"}
              alt="Generic placeholder image"
              width="48"
            /> */}
            <h1 className="clientVal d-flex justify-content-center align-items-center" clientnum='5000'>0<span><FiPlus /></span></h1>
            <p className="d-flex justify-content-center align-items-center">Mould Manufactured</p>
          </div>
          <div className="col-lg-4">
            {/* <img
              className="mb-4 mx-auto"
              src={process.env.PUBLIC_URL + "/team.svg"}
              alt="Generic placeholder image"
              width="48"
            /> */}
            <h1 className="d-flex justify-content-center align-items-center">{new Date().getFullYear() - 1997}</h1>
            <p className="d-flex justify-content-center align-items-center">Years in Industry</p>
          </div>
        </div>
      </div>
      {/* <Facilities /> */}
      {/* <Chooseus /> */}
      <VpsProductView/>
      
      <VpsFooter />
    </>
  );
}
