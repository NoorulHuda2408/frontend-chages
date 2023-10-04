import { Row, Container, Col } from "react-bootstrap";
import "./Searchcard.css";
import Card from "react-bootstrap/Card";
import cardimg from "../../../assests/Card/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg";
import qualification from "../../../assests/Card/graduation-hat.png";
import location from "../../../assests/Card/placeholder (1).png";
import subject from "../../../assests/Card/stack-of-books.png";
import clock from "../../../assests/Card/clock.png";
import gender from "../../../assests/Card/male-and-female.png";
import name from "../../../assests/Card/user.png";
import {useNavigate} from 'react-router-dom'

export default function Card1() {
  const navigate = useNavigate();
  return (
    <Card className="card-main  mt-4">
      <Card.Body className="card3-body">
        <Row>
          <Col lg={3}>
            <img src={cardimg} alt="card-img" className="card-img " />
            <div className="btn-contain"> 
            <div className="mt-4 btn-12">
              <button className="btn-common btn-fr"  onClick={() => {navigate("/Packages")}}>Further Details</button>
              <button className="btn-common btn-hi">Hire Tutor</button>
            </div>

            <div className="btn-1">
              <button className="btn-common ">Chat With Tutor</button>
            </div>
            </div>
           
          </Col>
          <Col lg={9} >
            <div className="d-flex align-items-center mt-3 ">
            <img src={name} width="30px" className=" " />
              <h3 className="Sub-h3 ms-2">Name : </h3>
              <p className="sub-name ms-3">Alisbha</p>
            </div>
            <div className="d-flex align-items-center mt-3 ">
            <img src={gender} width="30px" className="mt-1 " />
              <h3 className="Sub-h3 ms-2">Gender : </h3>
              <p className="sub-name ms-3">Female</p>
            </div>

            <div className="d-flex align-items-start mt-3 ">
              <img src={qualification} width="30px" className="mt-2 " />
              <h3 className="Sub-h3 ms-2">Qualification: </h3>
              <p className="sub-name ms-3">
                MS Physics From Fatima Jinnah Women University, Rawalpindi
              </p>
            </div>
            <div className="d-flex align-items-start mt-3 ">
              <img src={subject} width="30px" className="mt-1" />
              <h3 className="Sub-h3 ms-2">Subjects: </h3>
              <p className="sub-name ms-3">
                Biology, Chemistry
              </p>
            </div>

            <div className="d-flex align-items-start mt-3 ">
              <img src={location} width="25px" className="mt-1"/>
              <h3 className="Sub-h3 ms-2">Area/Location: </h3>
              <p className="sub-name ms-3">Rawalpindi</p>
            </div>
            <div className="d-flex align-items-start mt-3 ">
              <img src={clock} width="25px" className="mt-1" />
              <h3 className="Sub-h3 ms-2">Available Time: </h3>
              <p className="sub-name ms-3">N/A</p>
            </div>
            <div className="d-flex align-items-start mt-3 ">
              <img src={location} width="25px"  className="mt-1"/>
              <h3 className="Sub-h3 ms-2">Available For: </h3>
              <p className="sub-name ms-3">Home Tuition</p>
            </div>
          </Col>
        </Row>
       
      </Card.Body>
    </Card>
  );
}
