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
                    <h1 className="project3">The Grass Roots</h1>
                    <Row className="project3">
                        <Col lg="9" md="6" xs="12" >
                            <h6>This Project was a fast paced challenge. The Movie Pro DB team developed this overnight to practice our Team Git skills and familiarize ourselves with Angular. We gave a presentation the next day to prepare us for working with our real client.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={grass1} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row >
                    <Row className="project3">
                        <Col lg="9" md="6" xs="12">
                            <h6>It was a team building excercise to make a static website for grassroots gardening using Angular. The only requirements were to have a home page an about page and a products page, not very difficult but we had alot of fun with it.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={grass2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project3">
                        <Col lg="9" md="6" xs="12">
                            <h6>Technical Skills:<a href="https://grassroots-732ce.firebaseapp.com" target="blank">The Grass Roots</a></h6>
                            <ul>
                                <li>Angular5, JavaScript, HTML</li>
                                <li>Angular Material, CSS, UI/UX</li>
                                <li>Git, Team Git, Agile</li>
                            </ul>
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