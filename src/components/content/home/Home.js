import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import kyle1 from '../../../assets/kyle1_1.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Container>
                                <h1>Kyle Beavin</h1>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h3>Aspiring Software Developer</h3>
                                <h4>Loving Husband & Father</h4>
                                <h5>Self-Proclaimed Grill Master</h5>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src="https://avatars2.githubusercontent.com/u/36934353?s=460&v=4" alt="Card image cap" />
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h6>
                                    Thank you for visiting my portfolio site! This is my version 2.0 built using React Facebooks javascript library.
                                    Here I will share with you a little bit about myself, my style and some of the work i've done.
                                </h6>
                                <br/>
                                <h6>
                                    I have also provided a contact form that goes straight to my email! Be sure to checkout
                                    my social media and resume down below, or just give me a call my cell number is in the contact 
                                    section.
                                </h6>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" src={kyle1} alt="Card image cap" />
                                </Card>
                            </Col>                        
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}