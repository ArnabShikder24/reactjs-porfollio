import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'video-react/dist/video-react.css';
import {Player, BigPlayButton} from 'video-react';
import poster from '../../asset/image/cartoon.jpg';

class Video extends Component {


    constructor() {
        super()
        this.state = {
            show:false
        }
    }

    modalClose=()=> this.setState({show: false})
    modalOpen=()=> this.setState({show: true})

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <Row>
                        <Col lg={12} md={12} sm={12} className='videoCard'>
                            <div>
                                <h5 className='videoCardTitle'>How I Do</h5>
                                <p className='videoCardDes'>First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture. According to the planning I start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation I provide 6 month free bug fixing service for corresponding project.</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className='VideoplayBtn' icon={faPlayCircle}/></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player poster={poster}>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position='center' />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="info" onClick={this.modalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;