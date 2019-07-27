import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'

const App = () => (
  <div>
    <Container className="mb-3" >
      <h1 className="display-3 text-center">contact</h1>
      <ContactForm />
    </Container>
  </div>
)

export default App
