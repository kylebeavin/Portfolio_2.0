import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import depot1 from '../../../../assets/Depot_1.PNG';
import depot2 from '../../../../assets/Depot_2.PNG';
import depot3 from '../../../../assets/Depot_3.PNG';


const Project5 = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Container>
                    <h1 className="project5">The Depot</h1>
                    <Row className="project5">
                        <Col lg="9" md="6" xs="12">
                            <h6>The Depot is my first fullstack application. It has full C.R.U.D. capability. I built the depot with a PERN stack PostgreSQL, Express, React, Node. Although note taking apps are very common especially for learning new technologies this one I plan on continuing to build on.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                        <CardImg width="100%" src={depot1} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project5">
                        <Col lg="9" md="6" xs="12">
                            <h6>The Depot is a note sharing app geared towards students. I want to create a platform where students will document and submit all their notes, homework,tests and projects. All the data submitted will be stored in a blockchain and taken with the student throughout their educational journey. </h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={depot2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project5">
                        <Col lg="9" md="6" xs="12">
                            <h6>Technical Skills:<a href="https://kb-notesappclient.herokuapp.com/" target="blank">The Depot Notes App</a></h6>
                            <ul>
                                <li>React.JS, ReactStrap, ReactRouter, JavaScript, HTML, CSS</li>
                                <li>Node.JS, Express, Sequelize, PostgreSQL, JSON</li>
                                <li>Git, Full C.R.U.D., RESTful API's, Trello, Wireframing</li>
                                <li>Software Lifecycle Development</li>
                            </ul>
                        </Col>
                        <Col lg="3" className="project5-col3">
                            <Card inverse>
                                <CardImg width="100%" src={depot3} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project5;