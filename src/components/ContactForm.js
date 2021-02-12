import React from 'react'

import $ from 'jquery';
import { Form, Button, Row, Col } from 'react-bootstrap/';


class ContactForm extends React.Component {

    render() {
    function submitForm() {
        console.log('works');
        alert('test');
        $('#gform *').fadeOut(2000);
        $('#gform').prepend('Your submission has been processed...');
    };

    return (
        <div>
            <Form onSubmit={function() {
                    $('#gform *').fadeTo("slow", 0);
                    $('#gform').prepend('Your submission has been processed...');
            }} name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSf3NrilY-fUAu99-kmCbBBLPWjXnNcx0I_1uW7a4L5jaTG04Q/formResponse?" target="hidden_iframe">
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Full Name" name="entry.1982356971" id="entry.1982356971" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="Company" name="entry.1356896028" id="entry.1356896028" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="entry.509745611" id="entry.509745611" />
                            <Form.Text className="text-muted">
                            Don't worry, your email is safe.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} name="entry.22088220" id="entry.22088220" />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            <iframe title="gform-iframe" name="hidden_iframe" style={{display: 'none'}} id="hidden_iframe" ></iframe>
        </div>
    )
}}

export default ContactForm;