import "./Footer.css";
import footerImg from "../../assests/logo.png";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="FooterSection d-flex flex-column align-items-center justfify-content-center">
      <div className="">
        <div className="footerIcon d-flex flex-row align-items-center mt-3 mx-5 mb-5">
          <img src={footerImg} alt="aa" className="footerimageA ms-4 " />
        </div>

        <Form className="footSearch d-flex flex-row align-items-center ms-5 mt-5 mb-5">
          <Form.Group className=" ms-3" controlId="formBasicEmail">
            {/* <Form.Label className='Label'>UserName</Form.Label> */}
            <Form.Control
              className="heeloo "
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <div className="">
            {/* <Button variant="primary" type="submit" className=''>
        Submit
      </Button> */}
            <button type="button" className="dasSignButtonFoot ms-2 ms-md-3">
              Suscribe
            </button>
          </div>
        </Form>

        <div className="lastLine mt-3">
          career Privacy Policy Terms & Conditions
        </div>
        <div className="end">© 2021 Class Technologies Inc. </div>
      </div>
    </div>
  );
};

export default Footer;
