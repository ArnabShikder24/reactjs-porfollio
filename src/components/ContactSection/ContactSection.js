import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5 mb-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <h4 className='footerTitle'>Quick Connect</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label className='footerAddress'>Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='footerAddress'>Email Address</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='footerAddress'>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                                <Button variant="info" type="submit">
                                    Submit
                                </Button>
                        </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                        <h4 className='footerTitle'>Discuss Now</h4>
                         <p className='footerAddress'>Agrabad C/A, Agrabad, Chattogram, Bangladesh.</p>
                            <p className='footerAddress'><FontAwesomeIcon className='socialIcon inbox' icon={faEnvelope} />arnabshikder2001@gmail.com</p>
                            <p className='footerAddress'><FontAwesomeIcon className='socialIcon call' icon={faPhone} />+8801855449413</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;