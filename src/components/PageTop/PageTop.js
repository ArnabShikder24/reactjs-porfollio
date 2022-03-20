import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                 <Container fluid={true} className='topFixedPage p-0'>
                    <div className='PageTopOverlay'>
                        <Container className='topPageContent'>
                            <Row>
                                <Col className='text-center'>
                                    <h4 className='topPageSubTitle'>{this.props.TopPageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;