import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card, CardImg } from 'reactstrap';
import family1 from '../../../assets/family1.jpg';

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <Container>
                        <h1>Contact</h1>
                        <Row>
                            <Col lg="9" md="6" xs="12">
                                <Form action="https://formspree.io/kylebeavin@gmail.com" method="POST">
                                    <FormGroup>
                                        <Label for="exampleName">Name</Label>
                                        <Input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Message</Label>
                                        <Input type="textarea" name="message" id="exampleText" onChange={this.handleChange} placeholder="Questions or Comments"/>
                                    </FormGroup>
                                    <Button>Submit</Button> 
                                </Form>
                            </Col>
                            <Col>
                                <Card inverse>
                                    <CardImg width="100%" src={family1} alt="Card image cap" />
                                </Card>
                                <br/>
                                <h6 style={{ textAlign: "right" }}>Kyle Beavin</h6>
                                <h6 style={{ textAlign: "right" }}>614-507-9548</h6>
                                <h6 style={{ textAlign: "right" }}>kylebeavin@gmail.com</h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Contact;