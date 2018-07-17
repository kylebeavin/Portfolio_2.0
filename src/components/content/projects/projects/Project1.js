import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import elevennote1 from "../../../../assets/elevennote1.PNG";
import elevennote2 from "../../../../assets/elevennote2.PNG";
import elevennote3 from "../../../../assets/elevennote3.PNG";

const Project1 = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <Container>
                    <h1 className="project1">ElevenNote</h1>
                    <Row className="project1">
                        <Col lg="9" md="6" xs="12">
                            <h6>This is an enterprise level n-tier application using C# and the .Net framework. I built out this project specifically to learn a new language, higher level architecture, Object Oriented Programming and an IDE.</h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg className="imageScale" width="100%" src={elevennote1}alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project1">
                        <Col lg="9" md="6" xs="12">
                            <h6>ElevenNote logs notes into a MSSQL database. it is a fullstack Create, Read, Update and Delete app. It utilizes EntityFramework ORM, MVC pattern and a Web API. </h6>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg className="imageScale" width="100%" src={elevennote2} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="project1">
                        <Col lg="9" md="6" xs="12">
                            <h6>Technical Skills:</h6>
                            <ul>
                                <li>C#, .Net framework, ASP.Net, WebMVC, Razor</li>
                                <li>Web API, EntityFramework, LINQ, MSSQL</li>
                                <li>Visual Studio, N tier, SQL Server</li>
                            </ul>
                        </Col>
                        <Col lg="3">
                            <Card inverse>
                                <CardImg className="imageScale" width="100%" src={elevennote3} alt="Card image cap" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Project1;