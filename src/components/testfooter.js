import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

export default class FooterPage extends Component {
    render(){
        return(
          <div className="footer-wrapper">
            <Footer color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                  <Row className="my-4">
                    <Col md="4" lg="4">
                      <h5 className="text-uppercase mb-4 font-weight-bold">Our Story</h5>
                      <p>Our Sensuous Sandwich Shop started out in 2017 after a realization that our local community didn't have a Local Sandwich Shop with a passion for making healthy sandwiches using only the freshest ingredients around. </p>
                      <p>Give us a call to place your order as we offer Free Delivery or have us Cater your next party! </p>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2" lg="2" className="ml-auto">
                      <ul className="list-unstyled">
                      </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="5" lg="3">
                      <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
                      <p><i className="fa fa-phone mr-3"></i> (801) 980-3664</p>
                      <p><i className="fa fa-envelope mr-3"></i> sensuoussandwich@bottega.com</p>
                      <p><i className="fa fa-home mr-3"></i> 2912 Executive Pkwy Lehi, UT 84043</p>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2" lg="2" className="text-center">
                      <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
                      <div className="mt-2 ">
                        <a type="button" className="btn-floating btn-small btn-fb"><i className="fa fa-facebook"></i></a>
                        <a type="button" className="btn-floating btn-small btn-tw"><i className="fa fa-twitter"></i></a>
                        <a type="button" className="btn-floating btn-small btn-gplus"><i className="fa fa-google-plus"></i></a>
                        <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      </div>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                  </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                  <Container fluid>
                      &copy; {(new Date().getFullYear())} Copyright: <a href="https://bottega.tech/"> https://bottega.tech/ </a>
                  </Container>
                </div>
            </Footer>
          </div>
        );
    }
}
