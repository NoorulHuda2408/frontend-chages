import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";
import Button from "react-bootstrap/esm/Button";
import logo from "../../assests/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarCustom = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.signin?.signInData?.data);
  console.log(userData);
  return (
    <div className="container-fluid NavbarSection ">
      <Navbar expand="lg" className="NavbarA ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt=""
              width="200"
              height="100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
             
                className="ms-md-5 NavItems"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              {!userData && (
                <>
                 
                  <Nav.Link onClick={() => {
                  navigate("/about");
                }}href="#link" className="ms-md-3 NavItems">
                   Contact Us
                  </Nav.Link>
                  
                  
                  <Nav.Link  onClick={() => {
                  navigate("/about");
                }}  className="ms-md-3 NavItems">
                    About Us
                  </Nav.Link>
                </>
              )}
              {userData?.role === 1 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/Notification");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Notification
                </Nav.Link>
              ) : userData?.role === 0 || userData?.role === 2 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/ViewProgress");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Progress
                </Nav.Link>
              ) : (
                ""
              )}
              {userData?.role === 1 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/myStudents");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Students
                </Nav.Link>
              ) : userData?.role === 0 || userData?.role === 2 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/Searchtutor");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Search Teacher
                </Nav.Link>
              ) : (
                ""
              )}

              {userData?.role === 0 || userData?.role === 2 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/appointment");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Appointment
                </Nav.Link>
              ) : (
                ""
              )}
              {userData?.role === 0 || userData?.role === 2 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/appointment");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Register Teachers
                </Nav.Link>
              ) : (
                ""
              )}

              {userData?.role === 1 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/editMentor");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Edit Profile
                </Nav.Link>
              ) : userData?.role === 0 || userData?.role === 2 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/editProfile");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Edit Profile
                </Nav.Link>
              ) : (
                ""
              )}

              {userData?.role === 1 ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/teacherPacakages");
                  }}
                  className="ms-md-3 NavItems"
                >
                  Packages
                </Nav.Link>
              ) : (
                ""
              )}
               {userData?._id ? (
                <Nav.Link
                  onClick={() => {
                    navigate("/messages");
                  }}
                  className="ms-md-3 NavItems"
                >
                 Massages
                </Nav.Link>
              ) : (
                ""
              )}

              {/* <NavDropdown
                title="Teacher"
                id="basic-nav-dropdown"
                className="navbar-drop"
              >
                <NavDropdown.Item
                  href=""
                  onClick={() => {
                    navigate("/teacherprofile");
                  }}
                >
                  Create Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#"
                  onClick={() => {
                    navigate("/Notification");
                  }}
                >
                  Notification
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  onClick={() => {
                    navigate("/StudentResult");
                  }}
                >
                  Upload Result
                </NavDropdown.Item>

               
              </NavDropdown> */}

              {/* <NavDropdown
                title="Student"
                id="basic-nav-dropdown"
                className="navbar-drop"
              >
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/StudentRegistration");
                  }}
                >
                  Create Student Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/Searchtutor");
                  }}
                >
                  Search Tutor
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  onClick={() => {
                    navigate("/ViewProgress");
                  }}
                >
                  View Progress Report
                </NavDropdown.Item>

               
              </NavDropdown> */}

              {!userData ? (
                <div className="NavbarButton  d-flex justify-content-between ms-md-5">
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    type="button"
                    className="dasLoginButton ms-md-5"
                  >
                    Login{" "}
                  </button>
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    type="button"
                    className="dasSignButton ms-md-3"
                  >
                    Sign Up
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    localStorage.clear();

                    navigate("/");
                    window.location.reload();
                  }}
                  type="button"
                  className="dasSignButton ms-md-3"
                >
                  Logout
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarCustom;
