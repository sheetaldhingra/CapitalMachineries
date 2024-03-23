import React from 'react'
import Vpsheader from './Vpsheader'
import VpsProducts from './VpsProducts'
import VpsFooter from './VpsFooter'
import { Helmet } from "react-helmet";

export default function SandhuProducts() {
  return (
    <>
    <Vpsheader/>
    <Helmet>
          <meta charset="utf-8" />
          <title>
            Sandhu Precision Drilling: Powering Your Projects with Excellence
          </title>
          <meta
            name="description"
            content="Discover Sandhu's renowned drill machines, trusted by professionals worldwide for their precision and reliability. Explore our curated selection of Sandhu drill machines, meticulously engineered for superior performance and durability. With Sandhu, take your drilling projects to new heights of efficiency and precision."
          />
          <meta
            name="keywords"
            content="Welding machine, Drill machine, Grinder, Mig, Tig, Sandhu, Sandhu products, Sandhu drill machine"
          />
          <meta name="author" content="Capital Machineries" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="CapitalMachineries" />
          <meta
            name="twitter:title"
            content="Sandhu Precision Drilling: Powering Your Projects with Excellence"
          />
          <meta
            name="twitter:description"
            content="Discover Sandhu's renowned drill machines, trusted by professionals worldwide for their precision and reliability. Explore our curated selection of Sandhu drill machines, meticulously engineered for superior performance and durability. With Sandhu, take your drilling projects to new heights of efficiency and precision."
          />
          <meta name="twitter:creator" content="CapitalMachineries" />
          <meta
            name="twitter:image"
            content="https://www.capitalmachineries.com/weldingmachine/logo.png"
          />
          <link rel="canonical" href="https://www.capitalmachineries.com/" />
          <meta
            property="og:title"
            content="Sandhu Precision Drilling: Powering Your Projects with Excellence"
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
            content="Discover Sandhu's renowned drill machines, trusted by professionals worldwide for their precision and reliability. Explore our curated selection of Sandhu drill machines, meticulously engineered for superior performance and durability. With Sandhu, take your drilling projects to new heights of efficiency and precision."
          />
          <meta property="og:site_name" content="CapitalMachineries" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
          />
          <meta http-equiv="Cache-Control" content="no-cache" />
        </Helmet>
    <h1 className='d-flex align-items-center justify-content-center m-3'>Sandhu Products</h1>
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
    <VpsProducts url="sandhu"/>
    <VpsFooter />
    </>
  )
}
