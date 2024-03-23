import React from 'react'
import Vpsheader from './Vpsheader'
import VpsProducts from './VpsProducts'
import VpsFooter from './VpsFooter'
import { Helmet } from "react-helmet";

export default function StarProducts() {
  return (
    <>
    <Vpsheader/>
    <Helmet>
          <meta charset="utf-8" />
          <title>
            Star Blaze Welding Rods: Igniting Excellence in Welding
          </title>
          <meta
            name="description"
            content="Discover the brilliance of Star Blaze welding rods, crafted to ignite excellence in every weld. Trusted by professionals for their superior quality and performance, Star Blaze rods ensure precise and durable welds. Explore our range and experience the radiant difference with Star Blaze welding rods."
          />
          <meta
            name="keywords"
            content="Welding machine, Drill machine, Grinder, Mig, Tig"
          />
          <meta name="author" content="Capital Machineries" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="CapitalMachineries" />
          <meta
            name="twitter:title"
            content="Star Blaze Welding Rods: Igniting Excellence in Welding"
          />
          <meta
            name="twitter:description"
            content="Discover the brilliance of Star Blaze welding rods, crafted to ignite excellence in every weld. Trusted by professionals for their superior quality and performance, Star Blaze rods ensure precise and durable welds. Explore our range and experience the radiant difference with Star Blaze welding rods."
          />
          <meta name="twitter:creator" content="CapitalMachineries" />
          <meta
            name="twitter:image"
            content="https://www.capitalmachineries.com/weldingmachine/logo.png"
          />
          <link rel="canonical" href="https://www.capitalmachineries.com/" />
          <meta
            property="og:title"
            content="Star Blaze Welding Rods: Igniting Excellence in Welding"
          />
          <meta
            property="og:url"
            content="https://www.capitalmachineries.com/"
          />
          <meta
            property="og:image"
            content="https://www.capitalmachineries.com/weldingmachine/logo.png"
          />
          <meta
            property="og:description"
            content="Discover the brilliance of Star Blaze welding rods, crafted to ignite excellence in every weld. Trusted by professionals for their superior quality and performance, Star Blaze rods ensure precise and durable welds. Explore our range and experience the radiant difference with Star Blaze welding rods."
          />
          <meta property="og:site_name" content="CapitalMachineries" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
          />
          <meta http-equiv="Cache-Control" content="no-cache" />
        </Helmet>
    <h1 className='d-flex align-items-center justify-content-center m-3'>Star Blaze Products</h1>
    <div className="border-bottom mb-2"></div>
    <div
        className="container d-flex justify-content-center my-5 moldLoader"
        key="loadingparent"
      >
        <div
          className="spinner-grow spinner-grow-sm mx-1"
          role="status"
          key="loading1"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow spinner-grow-sm mx-1"
          role="status"
          key="loading2"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow spinner-grow-sm mx-1"
          role="status"
          key="loading3"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow spinner-grow-sm mx-1"
          role="status"
          key="loading4"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow spinner-grow-sm mx-1"
          role="status"
          key="loading5"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow spinner-grow-sm mx-1"
          role="status"
          key="loading6"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    <VpsProducts url="star"/>
    <VpsFooter />
    </>
  )
}
