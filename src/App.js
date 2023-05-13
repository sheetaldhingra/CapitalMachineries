import './App.css';
import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import HomePage from './Components/HomePage';
import GoToTop from './Components/GoToTop';
import VpsSingleProduct from './Components/VpsSingleProduct';
import MemberLogin from './Components/MemberLogin';
import VpsMemberPortal from './Components/VpsMemberPortal';
import VpsProducts from './Components/VpsProducts';
import VpsAboutUs from './Components/VpsAboutUs';
import VpsProductsBootStrap from './Components/VpsProductsBootStrap';
import VpsFacilities from './Components/VpsFacilities';
import AddMachines from './Components/AddMachines';
import VpsBootstrapAboutus from './Components/VpsBootstrapAboutus';
import VpsManufacturing from './Components/VpsManufacturing';
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/singleProduct" element={<VpsSingleProduct/>} />
    <Route exact path="/contact" element={<ContactUs/>} />
    <Route exact path="/memberlogin" element={<MemberLogin/>} />
    <Route exact path="/memberlogin/MemberPortal" element={<VpsMemberPortal/>} />
    <Route exact path="/products" element={<VpsProductsBootStrap/>} />
    {/* <Route exact path="/products" element={<VpsProductsBootStrap/>} /> */}
    {/* <Route exact path="/about" element={<VpsAboutUs/>} /> */}
    <Route exact path="/about" element={<VpsBootstrapAboutus/>} />
    <Route exact path="/facilities" element={<VpsFacilities/>} />
    <Route exact path="/manufacture" element={<VpsManufacturing/>} />
    <Route exact path="/memberlogin/Addmachines" element={<AddMachines/>} />
  </Routes>
  <GoToTop/>
    </Router>
    </>
  );
}

export default App;