import React from 'react';
import { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
                    <h1>Contact</h1>
                    <Form action="https://formspree.io/kylebeavin@gmail.com" method="POST">
                        <FormGroup>
                            <Label for="exampleName">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input type="textarea" name="message" id="exampleText" onChange={this.handleChange}/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>

                </div>
            </div>
        )
    }
}

export default Contact;