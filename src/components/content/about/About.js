import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import aboutImage from '../../../assets/family2017_2.jpg';
import aboutImage_2 from '../../../assets/family2016.jpg';
import aboutImage_3 from '../../../assets/family_2015.jpg';

class About extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">   
                    <Container>
                    <h1>About</h1>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={aboutImage} alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={aboutImage_2} alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={aboutImage_3} alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default About;