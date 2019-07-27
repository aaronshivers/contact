import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import SuccessSplash from './SuccessSplash'
import { startAddMessage } from '../actions/messages'

const ContactForm = () => {
  const [ validated, setValidated ] = useState(false)
  const [ completed, setCompleted ] = useState(false)
  const [ message, setMessage ] = useState([])
  // const [ name, setName ] = useState('')
  // const [ email, setEmail ] = useState('')
  // const [ title, setTitle ] = useState('')
  // const [ body, setBody ] = useState('')

  // const handleNameChange = e => {
  //   console.log(e.target)
  //   if (typeof e.target.elements.name.value !== 'string') return
  //   setName(e.target.elements.name.value.replace(/[^\w]/g, ''))
  // }

  // const handleEmailChange = e => {
  //   if (typeof e.target.elements.email.value !== 'string') return
  //   const validEmail = e.target.elements.email.value
  //   setName(validEmail.replace(/[^\w]/g, ''))
  // }

  const validateData = (data) => {
    let isValidData = true

    for (const prop of data) {
      // console.log(prop.id, prop.value)

      if (typeof prop.value !== 'string') isValidData = false
      
      // if (prop.value.length === 0) isValidData = false
    }

    return isValidData
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    setValidated(true)

    const dataValidated = validateData(event.target.elements)

    // const { elements: { name } } = event.target
    // const { id } = event.target.elements

    const data = [{
      username: username.value,
      email: email.value,
      title: title.value,
      body: body.value
    }]

    if (dataValidated) console.log(data)

    if (dataValidated) setMessage(data)

    
  }

  // useEffect(() => {
  //   console.log('this should only run once')
  // }, [])

  // useEffect(() => {
    
  //   console.log('useEffect ran')

  //   if (name !== '' && email !== '' && title !== '' && body !== '') {
  //     console.log('no emtpy fields')
  //     setMessage([{ name, email, title, body }])
  //   }

  // }, [name, email, title, body])

  // useEffect(() => {
  //   console.log('validated', validated)
  // }, [validated])

  useEffect(() => {
    if (message[0]) {
      startAddMessage(message)
      console.log('message added to db', message)
    }
  }, [message])

  return (
    <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
      <Row>
        <Col sm={ 6 }>
          {/* Name */}
          <Form.Group controlId="username">
            <Form.Control
              name="username"
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
              name="email"
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
          {/* Title */}
          <Form.Group controlId="title">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Title..."
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
