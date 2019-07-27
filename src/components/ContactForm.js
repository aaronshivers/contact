import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import SuccessSplash from './SuccessSplash'
import { startAddMessage } from '../actions/messages'

const ContactForm = () => {
  const [ validated, setValidated ] = useState(false)
  const [ message, setMessage ] = useState([])
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    setValidated(true)

    if (validated) {
      setMessage([{ name, email, title, body }])
      startAddMessage(message)
      console.log(message)
    }
  }

  useEffect(() => console.log(message.length > 0))

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
              value={ name }
              onChange={ e => setName(e.target.value) }
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
              value={ email }
              onChange={ e => setEmail(e.target.value) }
              required
            />
          <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          {/* Title */}
          <Form.Group controlId="title">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Title..."
              value={ title }
              onChange={ e => setTitle(e.target.value) }
              required
            />
          <Form.Control.Feedback type="invalid">Please enter the title.</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>


      <Row>
        <Col>
          {/* Body */}
          <Form.Group controlId="body">
            <Form.Control
              size="lg"
              as="textarea"
              rows="3"
              placeholder="Body..."
              value={ body }
              onChange={ e => setBody(e.target.value) }
              required
            />
          <Form.Control.Feedback type="invalid">Please enter a body.</Form.Control.Feedback>
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
