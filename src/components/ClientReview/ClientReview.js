import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container, Row, Col} from 'react-bootstrap';
import ClientImg from '../../asset/image/Client.png'


class ClientReview extends Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 3500,
            dots: true,
            infinite: true,
            speed: 3500,
            onSwipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <Fragment>
                <Container className='text-center mb-5 pb-5'>
                    <h1 className='haddingTitle'>CLient SAYS</h1>
                    <Slider {...settings}>
                      <Row>
                        <Col>
                            <img className='clientImg' src={ClientImg}/>
                            <h4 className='clientTitle'>Web Development</h4>
                            <p className='clientDes'>First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture.</p>                        
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                            <img className='clientImg' src={ClientImg}/>
                            <h4 className='clientTitle'>Web Development</h4>
                            <p className='clientDes'>First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture.</p>                        
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                            <img className='clientImg' src={ClientImg}/>
                            <h4 className='clientTitle'>Web Development</h4>
                            <p className='clientDes'>First anlysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture.</p>                        
                        </Col>
                      </Row>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;