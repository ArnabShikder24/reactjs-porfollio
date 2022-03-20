import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import projectsImg from '../../asset/image/projects.jpg';

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
              <Container className='text-center '>
                  <h1 className='haddingTitle'>RECENT PROJECTS</h1>
                  <Row>
                      <Col lg={4} md={6} sm={12} className='p-2'>
                        <Card className='projectCard'>
                        <Card.Img variant="top" src={projectsImg} />
                        <Card.Body>
                            <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                            <Card.Text className='projectCardDes'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to='/ProjectDetails'><Button variant="info">Details</Button></Link>
                        </Card.Body>
                        </Card>      
                      </Col>
                      <Col lg={4} md={6} sm={12} className='p-2'>
                        <Card className='projectCard'>
                        <Card.Img variant="top" src={projectsImg} />
                        <Card.Body>
                            <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                            <Card.Text className='projectCardDes'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to='/ProjectDetails'><Button variant="info">Details</Button></Link>
                        </Card.Body>
                        </Card>
                      </Col>
                      <Col lg={4} md={6} sm={12} className='p-2'>
                        <Card className='projectCard'>
                        <Card.Img variant="top" src={projectsImg} />
                        <Card.Body>
                            <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                            <Card.Text className='projectCardDes'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Link to='/ProjectDetails'><Button variant="info">Details</Button></Link>
                        </Card.Body>
                        </Card>
                      </Col>
                  </Row>
              </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;