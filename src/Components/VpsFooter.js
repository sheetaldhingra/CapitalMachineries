import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
export default function VpsFooter() {
  return (
    <footer className="footer py-2">
      <Container>
        <Row>
          <Col md={4}>
            <h5><strong>Company</strong></h5>
            <ul className="list-unstyled">
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5><strong>Facilities</strong></h5>
            <ul className="list-unstyled">
              <li><Link to="/facilities">Laser Engraving</Link></li>
              <li><Link to="/facilities">CNC EDM</Link></li>
              <li><Link to="/facilities">Surface Grinding</Link></li>
              <li><Link to="/facilities">Injection Moulding</Link></li>
              <li><Link to="/facilities">Blow Moulding</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5><strong>Stay Connected</strong></h5>
            <ul className="list-unstyled d-flex social-icons">
              <li className="m-2"><Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
              <li className="m-2"><Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
              <li className="m-2"><Link to="https://www.instagram.com/vpsecorp/?igshid=YmMyMTA2M2Y%3D" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link></li>
            </ul>
            <p className="about-content">Subscribe to our newsletter to get the latest news and updates</p>
            <form>
              <div className="form-group mb-2">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="about-content">© 2023 All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
