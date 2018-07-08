import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import movie1 from '../../../../assets/MovieProDB_1.PNG';
import movie2 from '../../../../assets/MovieProDB_2.png';
import movie3 from '../../../../assets/MovieProDB_3.jpg';
import movie4 from '../../../../assets/MovieProDB_4.PNG';

const Project2 = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Container>
                    <h1>Movie Pro DB</h1>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={movie4} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={movie2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices gravida. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Odio aenean sed adipiscing diam donec adipiscing tristique.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={movie3} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project2;