import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';
import poster from '../../asset/image/cartoon.jpg';

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true} className='topFixedCourseDetailsPage p-0'>
                    <div className='CourseDetailsPageTopOverlay'>
                        <Container className='topCourseDetailsPageContent'>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3 className='CourseDetailsTitle'>Full Dynamic Website With Admin Panel</h3>
                                    <h2 className='countTitle'>Total Lecture = 30</h2>
                                    <h2 className='mt-0 countTitle'>Total Student = 100</h2>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className='CourseDetailsDescription'>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className='pt-5 pb-5'>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                            <h1 className='serviceTitle'>Skill You Get</h1>
                            <ul className='serviceDescription'>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                                <li>Unlimited Dynamic Product Category</li>
                            </ul>
                            <Button className='mb-3' variant='warning'>BUY NOW</Button>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <Player poster={poster}>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position='center' />
                            </Player>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;