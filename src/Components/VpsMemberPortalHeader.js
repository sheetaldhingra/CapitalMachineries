import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'; 

export default function VpsMemberPortalHeader() {
    const showHideNavMenu = (event) =>{
        const navigationMenu = document.getElementById('navbarTogglerDemo02');
        navigationMenu.classList.toggle('show');
        $('#navbarTogglerDemo02').find('.nav-link').removeClass('active');
        $(event.target).addClass('active');
      }
      useEffect(()=>{
        $('#navbarTogglerDemo02').find('.nav-link').removeClass('active');
        if(window.location.pathname === '/memberlogin/MemberPortal'){
          $('.addProduct').addClass('active')
        }
        else if(window.location.pathname === '/memberlogin/Addmachines'){
          $('.addMachine').addClass('active')
        }
        else{
          $('.home').addClass('active')
        }
      })
  return (
    <>
    
<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
  <Link className="navbar-brand"  to="/memberlogin/MemberPortal">
      <img src={process.env.PUBLIC_URL + '/vpslogo.png'} alt="Logo"  height="45" className="d-inline-block " />
      <strong className="m-1 text-light">VPS Engineering Corporation</strong>
    </Link>
    {/* <Link className="navbar-brand" href="#">VPS Engineering Corporation</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{justifyContent:"right"}}>
      <ul className="navbar-nav  mx-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link home addProduct active" aria-current="page" onClick={showHideNavMenu} to="/memberlogin/MemberPortal">Add Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link addMachine" onClick={showHideNavMenu} to="/memberlogin/Addmachines">Add Machines</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link products" onClick={showHideNavMenu} to="/memberlogin/MemberPortal">Products</Link>
        </li>
		<li className="nav-item">
          <Link className="nav-link" onClick={showHideNavMenu} to="/memberlogin/MemberPortal">Facilities</Link>
        </li>
		<li className="nav-item">
          <Link className="nav-link contact" onClick={showHideNavMenu} to="/memberlogin/MemberPortal">Contact Us</Link>
        </li> */}
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
