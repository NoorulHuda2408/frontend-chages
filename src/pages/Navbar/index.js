import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./index.css"
import Button from 'react-bootstrap/esm/Button';
import logo from"../../assests/logo.svg"
import {useNavigate} from 'react-router-dom'

const NavbarCustom = () => {
  const navigate = useNavigate();
  return (
    <div className='container-fluid NavbarSection '>  
    <Navbar expand="lg" className="NavbarA " >
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} className="d-inline-block align-top" alt="" width="60" height="60" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className='ms-md-5 NavItems'>Home</Nav.Link>
          <Nav.Link href="#link" className='ms-md-3 NavItems'>Courses</Nav.Link>
          <Nav.Link href="#home" className='ms-md-3 NavItems'>Careers</Nav.Link>
          <Nav.Link href="#link" className='ms-md-3 NavItems'>Blogs</Nav.Link>
          <Nav.Link href="#link" className='ms-md-3 NavItems'>About Us</Nav.Link>


          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
            {/* <Nav variant="pills" className="flex-row   border">
            <Nav.Item  >
              <Nav.Link eventKey="first" >Sign in</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" >Sign Up</Nav.Link>
            </Nav.Item>
          </Nav> */}
          <div className="NavbarButton  d-flex justify-content-between ms-md-5">
         <button onClick={()=>{navigate("/login")}} type="button" className="dasLoginButton ms-md-5" >Login </button>
         <button onClick={()=>{navigate("/login")}} type="button" className="dasSignButton ms-md-3" >Sign Up</button>

          </div>
        </Nav>
      
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
    
  )
}

export default NavbarCustom