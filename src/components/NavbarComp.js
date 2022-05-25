import React, { Component } from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

export default class NavbarComp extends Component {
  render() {
    return (
      <div className='navCss'>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Healthful</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#sobre">Sobre</Nav.Link>
              <Nav.Link href="#contato">Contato</Nav.Link>
              <Nav.Link href="#info">Info</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
}
