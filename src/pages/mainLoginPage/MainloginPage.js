import React, { useState } from "react";
import loginpageImg from "../../assests/loginImage.svg";
import loginImage from "../../assests/login.svg";
import "./MainloginPage.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Login from "../../components/login/login";
import SignUp from "../../components/signup/signUp";
const MainloginPage = () => {
  const [login, setLogin] = useState(true);
  const clickHandler = () => {
    setLogin(!login);
  };
  return (
    <div className="login_Wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-12 col-md-6 ">
            {login ? (
              <img
                src={loginpageImg}
                className="img-fluid"
                alt="loginpageImg"
              />
            ) : (
              <img src={loginImage} className="img-fluid" alt="loginpageImg" />
            )}
          </div>
          <div className="col-sm-12 col-md-5 ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className=" justify-content-center ">
                <Col className="col-12  col-md-9 mt-5">
                  <Nav
                    variant="pills"
                    className="flex-row  Toggler justify-content-center border"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first" onClick={clickHandler}>
                        Sign in
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" onClick={clickHandler}>
                        Sign Up
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12} md={12} className=" mt-4">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Login />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <SignUp />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainloginPage;
