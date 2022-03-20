import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import coursesImg from '../../asset/image/courses.jpg'

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
            <Container className='text-center mt-5 mb-5'>
                <Row>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='p-2'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='p-2'>
                                <img className='courseImg' src={coursesImg}  />
                            </Col>
                            <Col className='text-justify p-2' lg={6} md={6} sm={12}>
                                <h5 className='courseTitle'>Web Development</h5>
                                <p className='courseDes'>I build native and cross platfrom mobile app for your business with respect.</p>
                                <Link className='courseLink' to='/CourseDetails'>Details</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default AllCourses;