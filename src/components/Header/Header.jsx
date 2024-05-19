import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react'
import logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <header>
      <Navbar expand='lg' className='bg-info'>
        <Container className='text-bold'>
          <Navbar.Brand href='#home'>
            <img className='imgSize' src={logo} alt='' />
            FukPontak
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#link'>Про факультет</Nav.Link>
              <Nav.Link href='#link'>Галерея</Nav.Link>
              <Nav.Link href='#link'>Новини</Nav.Link>
              <Nav.Link href='#link'>Контакти</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
