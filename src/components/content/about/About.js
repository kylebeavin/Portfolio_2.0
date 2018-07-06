import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import aboutImage from '../../../assets/family2017.jpg';

class About extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Container>
                    <h1>About</h1>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</p>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={aboutImage} alt="Card image cap" />
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