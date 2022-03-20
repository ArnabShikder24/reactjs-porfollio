import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Details from '../../asset/image/details.png';

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5 mb-5'>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className='courseImg' src={Details}  />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className='serviceTitle'>Projects Template</h2>
                            <p className="serviceDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                                <ul>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                    <li className="serviceDescription">Unlimited Dynamic Product Category</li>
                                </ul>
                                <Button variant="info">Live Preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;