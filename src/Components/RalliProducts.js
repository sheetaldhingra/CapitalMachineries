import React from 'react'
import Vpsheader from './Vpsheader'
import VpsProductsBootStrap from './VpsProductsBootStrap'
import VpsFooter from './VpsFooter'
import { Helmet } from "react-helmet";

export default function RalliProducts() {
  return (
    <>
    <Vpsheader/>
    <Helmet>
          <meta charset="utf-8" />
          <title>
            Ralli Wolf Precision Power Tools: Unleash Efficiency in Every Task
          </title>
          <meta
            name="description"
            content="Welcome to Ralli Wolf, the epitome of precision power tools. Explore our renowned collection of drills, grinders, cutters, and saws, trusted by professionals worldwide. With Ralli Wolf, experience unmatched efficiency and reliability in every task. Elevate your projects with Ralli Wolf precision power tools today."
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
            content="Ralli Wolf Precision Power Tools: Unleash Efficiency in Every Task"
          />
          <meta
            name="twitter:description"
            content="Welcome to Ralli Wolf, the epitome of precision power tools. Explore our renowned collection of drills, grinders, cutters, and saws, trusted by professionals worldwide. With Ralli Wolf, experience unmatched efficiency and reliability in every task. Elevate your projects with Ralli Wolf precision power tools today."
          />
          <meta name="twitter:creator" content="CapitalMachineries" />
          <meta
            name="twitter:image"
            content="https://www.capitalmachineries.com/weldingmachine/logo.png"
          />
          <link rel="canonical" href="https://www.capitalmachineries.com/" />
          <meta
            property="og:title"
            content="Ralli Wolf Precision Power Tools: Unleash Efficiency in Every Task"
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
            content="Welcome to Ralli Wolf, the epitome of precision power tools. Explore our renowned collection of drills, grinders, cutters, and saws, trusted by professionals worldwide. With Ralli Wolf, experience unmatched efficiency and reliability in every task. Elevate your projects with Ralli Wolf precision power tools today."
          />
          <meta property="og:site_name" content="CapitalMachineries" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5"
          />
          <meta http-equiv="Cache-Control" content="no-cache" />
        </Helmet>
    <h1 className='d-flex align-items-center justify-content-center m-3'>Ralli Wolf Products</h1>
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
    {/* <VpsProducts url="ralli"/> */}
    <VpsProductsBootStrap url="ralli" />
    <VpsFooter />
    </>
  )
}
