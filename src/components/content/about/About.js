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
                                <h6>The first time I discovered programming was right at the beginning of middleschool. A friend of mine made me download an MS-DOS game called ZZT. It was actually a game editor that came with a couple games pre-installed. I would spend days designing boards and using a primitive markdown language to interact with objects. I even took it on our family vacation so I could keep testing my code!</h6>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={aboutImage} alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h6>I spent a decade pouring myself into my work, doing manual labor eventually working up the management chain. There was something else calling me though. In the summer of 2017 is when I started trying to teach myself to code. I would stay up late studying C++ and Python syntaxes and OOP principles. Then one day I discovered Eleven Fifty Academy. They put me through an intense learning program to develop my web building skills.</h6>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={aboutImage_2} alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h6>The most important tool I have now is the ability to teach myself. I am not afraid to jump right in, be vulnerable, take constructive criticism or take the lead. Checkout The links below and connect with me on LinkedIn </h6>
                                <ul>
                                    <li><a href="https://github.com/kylebeavin" target="blank">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/kyle-beavin-62758a78" target="blank">LinkedIn</a></li>
                                    <li><a href="https://drive.google.com/open?id=1CftfNskaZCpKwZSFqzlsQZwH0Hw94LJj" target="blank"> My Resume PDF</a></li>
                                </ul>
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