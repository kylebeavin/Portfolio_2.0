import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import grass1 from '../../../../assets/GrassRoots_1.PNG';
import grass2 from '../../../../assets/GrassRoots_2.PNG';
import grass3 from '../../../../assets/GrassRoots_3.PNG';

const Project3 = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Container>
                    <h1>The Grass Roots</h1>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={grass1} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={grass2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={grass3} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project3;