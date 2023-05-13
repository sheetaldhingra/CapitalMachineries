import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ContactUsForm from './ContactUsForm';
import Vpsheader from './Vpsheader';
import VpsFooter from './VpsFooter';
export default function VpsSingleProduct(props) {
    const location = useLocation();
    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant", // Optional if you want to skip the scrolling animation
        });
      }, [location]);
  return (
    <>
    <Vpsheader />
    <div className="container mt-4" id="about">
  <div className="row">
    <div className="col-sm-12 col-md-6">
      <img src={location.state.image} style={{width:'100%'}}  className="img-fluid" alt="logo" />
    </div>
    <div className="col-sm-12 col-md-6">
    <h2 className="gradient-heading section-heading">{location.state.name}</h2>
      <p className="about-content">{location.state.description}</p>
    </div>
  </div>
  <hr/> 
  
  <ContactUsForm/>
  <hr/>
</div>
<VpsFooter/>
</>
  )
}
