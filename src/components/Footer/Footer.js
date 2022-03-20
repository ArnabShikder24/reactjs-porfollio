import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='text-center footer'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h4 className='footerTitle'>Follow Me</h4>
                            <a className='facebook' href="#"><FontAwesomeIcon className='socialIcon' icon={faFacebook} />Facebook</a><br/>
                            <a className='youtube' href="#"><FontAwesomeIcon className='socialIcon' icon={faYoutube} />YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h4 className='footerTitle'>Address</h4>
                            <p className='footerAddress'>Agrabad C/A, Agrabad, Chattogram, Bangladesh.</p>
                            <p className='footerAddress'><FontAwesomeIcon className='socialIcon inbox' icon={faEnvelope} />arnabshikder2001@gmail.com</p>
                            <p className='footerAddress'><FontAwesomeIcon className='socialIcon call' icon={faPhone} />+8801855449413</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h4 className='footerTitle'>Information</h4>
                            <Link className='footerLink' to="/about">About Me</Link><br/>
                            <Link className='footerLink' to='/contact'>Contact Me</Link> 
                        </Col>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h4 className='footerTitle'>Legal</h4>
                            <Link className='footerLink' to="/Refund">Refund Policy</Link><br/>
                            <Link className='footerLink' to="/Terms">Terms & Condition</Link><br/>
                            <Link className='footerLink' to="/Privacy">Privacy Policy</Link> 
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center bg-info p-2'>
                    <div>
                        <p className='text-light underFooter mb-0'>ArnabShikder &copy; 2021-2022</p>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;