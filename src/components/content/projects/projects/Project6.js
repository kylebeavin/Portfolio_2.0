import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import spa1 from '../../../../assets/ReactSPA_1.PNG';
import spa2 from '../../../../assets/ReactSPA_2.PNG';
import spa3 from '../../../../assets/ReactSPA_3.PNG';


const Project6 = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Container>
                    <h1 className="project6">React Fundamentals SPA</h1>
                    <Row className="project6">
                        <Col lg="9" md="6" xs="12">
                            <h6>This is a GitBook created by Eleven Fifty Academy. It is a React tutorial teaching many fundamentals and React concepts. What is so cool about it was the learning experience involved. You start by cloning their SPA boilerplate.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={spa1} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project6">
                        <Col lg="9" md="6" xs="12">
                            <h6>With every lesson you add a new link for each concept you learn,while utilizing that concept in each one. It really is alot of fun to watch this app grow while you build it.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={spa2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project6">
                        <Col lg="9" md="6" xs="12">
                            <h6>Technical Skills:</h6>
                            <ul>
                                <li>React.JS, ReactStrap, ReactRouter, JavaScript, HTML, CSS</li>
                                <li>Single Page Application, ECMAScript2015(ES6) </li>
                            </ul>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={spa3} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project6;