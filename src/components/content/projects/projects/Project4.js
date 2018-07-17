import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import bomb1 from '../../../../assets/Bomboard_1.PNG';
import bomb2 from '../../../../assets/Bomboard_2.PNG';
import bomb3 from '../../../../assets/Bomboard_3.PNG';

const Project4 = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Container>
                    <h1 className="project4">Bomboard Superstore</h1>
                    <Row className="project4">
                        <Col lg="9" md="6" xs="12" className="project4-col1">
                            <h6>I made this storefront website using the Angular Tour of Heroes Tutorial. This was my first experience working with googles Angular2 Framework. Styling was kept to a minimum, learning this new framework was my priority because I had a bigger project coming very quickly.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={bomb1} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project4">
                        <Col lg="9" md="6" xs="12">
                            <h6>Learning something new is always fun that is why I included this in my projects section.It was really cool learning Observables and Dependency Injection!</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={bomb2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project4">
                        <Col lg="9" md="6" xs="12" className="project4-col1">
                            <h6>Technical Skills:<a href="https://bomboard-1934c.firebaseapp.com" target="blank">Bomboard Superstore</a></h6>
                            <ul>
                                <li>Angular5, JavaScript, HTML, CSS</li>
                            </ul>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={bomb3} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project4;