import './App.css';
import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import ContactUs from './Components/ContactUs';
import HomePage from './Components/HomePage';
import GoToTop from './Components/GoToTop';
import MemberLogin from './Components/MemberLogin';
import VpsMemberPortal from './Components/VpsMemberPortal';
import AddMachines from './Components/AddMachines';
import VpsBootstrapAboutus from './Components/VpsBootstrapAboutus';
import VpsResultPage from './Components/VpsResultPage';
import Comingsoon from './Components/Comingsoon';
import ProductDetail from './Components/ProductDetail';
import GreatYuvaProducts from './Components/GreatYuvaProducts';
import WarppProducts from './Components/WarppProducts';
import BoschProducts from './Components/BoschProducts';
import ForteProducts from './Components/ForteProducts';
import SandhuProducts from './Components/SandhuProducts';
import DuraProducts from './Components/DuraProducts';
import HeaproProducts from './Components/HeaproProducts';
import RalliProducts from './Components/RalliProducts';
import StarProducts from './Components/StarProducts';
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/singleProduct" element={<Comingsoon/>} />
    <Route exact path="/contact" element={<ContactUs/>} />
    <Route exact path="/memberlogin" element={<MemberLogin/>} />
    <Route exact path="/memberlogin/MemberPortal" element={<VpsMemberPortal/>} />
    <Route exact path="/products" element={<ProductDetail/>} />
    <Route exact path="/products/greatyuva" element={<GreatYuvaProducts/>} />
    <Route exact path="/products/bosch" element={<BoschProducts/>} />
    <Route exact path="/products/forte" element={<ForteProducts/>} />
    <Route exact path="/products/sandhu" element={<SandhuProducts/>} />
    <Route exact path="/products/dura-shine" element={<DuraProducts/>} />
    <Route exact path="/products/heapro" element={<HeaproProducts/>} />
    <Route exact path="/products/ralli" element={<RalliProducts/>} />
    <Route exact path="/products/starblaze" element={<StarProducts/>} />
    <Route exact path="/products/warpp" element={<WarppProducts/>} />
    <Route exact path="/about" element={<VpsBootstrapAboutus/>} />
    <Route exact path="/facilities" element={<Comingsoon/>} />
    <Route exact path="/manufacture" element={<Comingsoon />} />
    <Route exact path="/memberlogin/Addmachines" element={<AddMachines/>} />
    <Route exact path="/searchResult" element={<VpsResultPage/>} />
  </Routes>
  <GoToTop/>
    </Router>
    </>
  );
}

export default App;