import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
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
                            <h6>Movie Pro DB is a prototype myself and two other developers built for our client. It is an administrative application for movie production companies. They will be able to enter product and merchandise information into a database.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={movie4} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9" md="6" xs="12" className="project2-col2">
                            <h6>Our team started by building a server and connecting it to our database using node.js and PostgreSQL. We built our client facing side using Angular5. My responsibilities were writing and testing the code for the user authentication, user controllers and user models for the front and back end.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg width="100%" src={movie2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="9" md="6" xs="12">
                            <h6>Technical skills:<a href="https://movieprodb.firebaseapp.com/landing-page" target="blank">Movie Pro DB</a></h6>
                            <ul>
                                <li>Angular5, Angular Material, JavaScript, HTML, CSS</li>
                                <li>Node.js, Express, Sequelize, PostgreSQL</li>
                                <li>BitBucket, RESTful API's, Team Git, Agile </li>
                            </ul>
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