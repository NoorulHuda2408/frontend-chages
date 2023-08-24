import React from "react";
import "./Cloud.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import cardicon from "../../assests/cardIcon.svg"
const Cloud = () => {
  return (
    <div className="Cloudsection mt-5 ">
      <div className="Cloud-text row text-center">
        <h1 className="CloudHeading  ">
          All-In-One <span style={{ color: "#00CBB8" }}> Cloud Software.</span>{" "}
        </h1>
        <p1 className=" CloudHeadingPara text-center mt-3">
          TOTC is one powerful online software suite that combines all the tools
          <br /> needed to run a successful school or office.
        </p1>
      </div>
      <Row className="cardMain justify-content-evenly align-items-center mt-2 ">
        <Col md={3} sm={8} xs={8} className="eachCard mt-5 border p-md-5 position-relative">
        <img src={cardicon} alt="icon" className=" cardIconA  " />
        <h1 className=" cardheading1 text-center mt-3 ">
            Online Billing, <br />
            Invoicing, & Contracts
          </h1>
          <p className='CloudHeadingPara mt-3'>Simple and secure control of your organization’s financial and legal transactions.Send customized invoices and contracts</p>
        </Col>
        <Col md={3} sm={8} xs={8} className="eachCard mt-5  border p-md-5 position-relative">
        <img src={cardicon} alt="icon" className=" cardIconA  " />
        <h1 className=" cardheading1 text-center mt-3 ">
            Online Billing, <br />
            Invoicing, & Contracts
          </h1>
          <p className='CloudHeadingPara mt-3'>Simple and secure control of your organization’s financial and legal transactions.Send customized invoices and contracts</p>
        </Col>
        <Col md={3} sm={8} xs={8} className="eachCard mt-5  border p-md-5 position-relative">
        <img src={cardicon} alt="icon" className=" cardIconA  " />
        <h1 className=" cardheading1 text-center mt-3 ">
            Online Billing, <br />
            Invoicing, & Contracts
          </h1>
          <p className='CloudHeadingPara mt-3'>Simple and secure control of your organization’s financial and legal transactions.Send customized invoices and contracts</p>
        </Col>
      
      </Row>
      {/* <div className="row border mt-3  ">
        <div classsName=" col-md-4">
          <h1 className="  text-center text-wrap">
            Online Billing, <br />
            Invoicing, & Contracts
          </h1>
          <p className=''>Simple and secure control of your<br/> organization’s financial and legal transactions.<br/> Send customized invoices and contracts</p>
        </div>
        <div classsName=" col-md-4 ">
          <h1 className="  text-center">
            Online Billing,
            <br /> Invoicing, & Contracts
          </h1>
        </div>
        <div classsName=" col-md-4">
          <h1 className="  text-center">
            Online Billing,
            <br /> Invoicing, & Contracts
          </h1>
        </div>
      </div> */}
    </div>
  );
};

export default Cloud;
