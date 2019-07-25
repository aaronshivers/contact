import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'

const App = () => (
  <div>
    <Container>
      <h1 className="display-4 text-center">contact</h1>
      <ContactForm />
    </Container>
  </div>
)

export default App
