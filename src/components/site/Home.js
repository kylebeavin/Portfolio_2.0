import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Container>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <h1>Kyle Beavin</h1>
                            </Col>
                            <Col lg="3">
                                <Card inverse>
                                    <CardImg width="100%" className="homeImage" src="https://avatars2.githubusercontent.com/u/36934353?s=460&v=4" alt="Card image cap" />
                                    <CardImgOverlay>
                                        <CardTitle>Card Title</CardTitle>
                                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                        <CardText>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </CardText>
                                    </CardImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}