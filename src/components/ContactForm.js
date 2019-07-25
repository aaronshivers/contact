import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ContactForm = () => {
  const [ validated, setValidated ] = useState(false)

  const handleSubmit = event => {
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
      <Row>
        <Col sm={ 6 }>
          {/* Name */}
          <Form.Group controlId="name">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Name..."
              required
            />
          <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col sm={ 6 }>
          {/* Email */}
          <Form.Group controlId="email">
            <Form.Control
              size="lg"
              type="email"
              placeholder="Email..."
              required
            />
          <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* Subject */}
          <Form.Group controlId="subject">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Subject..."
              required
            />
          <Form.Control.Feedback type="invalid">Please enter the subject.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>


      <Row>
        <Col>
          {/* Message */}
          <Form.Group controlId="message">
            <Form.Control
              size="lg"
              as="textarea"
              rows="3"
              placeholder="Message..."
              required
            />
          <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col xs={ 3 }>
          {/* Button */}
          <Button size="lg" variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>

    </Form>
  )
}

export default ContactForm
