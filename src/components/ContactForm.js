import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ContactForm = () => (
  <Form>
    <Row>
      <Col sm={ 6 }>
        {/* Name */}
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
      </Col>

      <Col sm={ 6 }>
        {/* Email */}
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col>
        {/* Subject */}
        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="text" placeholder="Enter subject" />
        </Form.Group>
      </Col>
    </Row>


    <Row>
      <Col>
        {/* Message */}
        <Form.Group controlId="message">
          <Form.Label>message</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Enter message" />
        </Form.Group>
      </Col>
    </Row>

    <Row>
      <Col xs={ 3 }>
        {/* Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Row>

  </Form>
)

export default ContactForm
