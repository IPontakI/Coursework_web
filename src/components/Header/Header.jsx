import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <Navbar expand='lg' className='bg-info'>
        <Container className='text-bold'>
          <Navbar.Brand className='me-auto'>
            <Link to='/'>
              <img className='imgSize' src={logo} alt='' />
              FukPontak
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/fukpage'>Про факультет</Link>
              <Link to='/gallery'>Галерея</Link>
              <Link to='/news'>Новини</Link>
              <Link to='/contacts'>Контакти</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
