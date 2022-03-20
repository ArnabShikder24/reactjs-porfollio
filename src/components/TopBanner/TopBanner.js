import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topFixedBanner p-0'>
                    <div className='topBannerOverlay'>
                        <Container className='topContent'>
                            <Row>
                                <Col className='text-center'>
                                    <h1 className='topTitle' >ARNAB SHIKDER</h1>
                                    <h4 className='topSubTitle'>Web Designer & Developer</h4>
                                    <Link to='/about'><Button variant="info">More Info</Button></Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;