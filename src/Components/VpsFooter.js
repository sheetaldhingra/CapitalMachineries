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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">FAQ</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5><strong>Products</strong></h5>
            <ul className="list-unstyled">
              <li><Link to="/products/bosch">Bosch</Link></li>
              <li><Link to="/products/forte">Forte</Link></li>
              <li><Link to="/products/sandhu">Sandhu</Link></li>
              <li><Link to="/products/greatyuva">Great Yuva</Link></li>
              <li><Link to="/products/dura-shine">Dura Shine</Link></li>
              <li><Link to="/products/heapro">Heapro</Link></li>
              <li><Link to="/products/ralli">Ralli Wolf</Link></li>
              <li><Link to="/products/starblaze">Star Blaze</Link></li>
              <li><Link to="/products/warpp">Warpp</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5><strong>Stay Connected</strong></h5>
            <ul className="list-unstyled d-flex social-icons">
              <li className="m-2"><Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
              <li className="m-2"><Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
              <li className="m-2"><Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
            </ul>
            <p className="d-none about-content">Subscribe to our newsletter to get the latest news and updates</p>
            <form>
              <div className="d-none form-group mb-2">
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
