import { Row, Container, Col } from "react-bootstrap";
import "./Notifycard.css";
import Card from "react-bootstrap/Card";
import cardimg from "../../../assests/Card/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modalview from "../../Modal/ModalView/Modalview";
import Modalaccept from "../../Modal/ModalAccept/ModalAccept";

export default function Notifycard() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [modalaccept, setModalAccept] = useState(false);
  return (
    <Card className="card-main  mt-4">
      <Card.Body className="card3-body">
        <div className="img-contain">
          <img
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "100px",
            }}
            src={cardimg}
          />
        </div>

        <div>
          <div className="ms-2 ps-2 mt-4">
            <div className="d-flex align-items-center mt-3 ">
              <h3 className="Subject-h5">Name : </h3>
              <p className="subject-name ms-3">Alisbha</p>
            </div>
            <div className="d-flex align-items-center mt-3 ">
              <h3 className="Subject-h5">Subject : </h3>
              <p className="subject-name ms-3">Biology</p>
            </div>
            <div className="d-flex align-items-center mt-3 ">
              <h3 className="Subject-h5">Class : </h3>
              <p className="subject-name ms-3"> 12</p>
            </div>

            <div className="d-flex align-items-center mt-3 ">
              <h3 className="Subject-h5">Study Mode : </h3>
              <p className="subject-name ms-3"> Online</p>
            </div>
            <hr className="hr-notify"></hr>
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn-profile mt-3 "
                onClick={() => setModalShow(true)}
              >
                View Profile
              </button>
            </div>
            <Modalview show={modalShow} onHide={() => setModalShow(false)} />
            <hr className="hr-notify"></hr>

            <div className="d-flex align-items-center justify-content-evenly mt-3">
              <button
                className="btn-learn mt-3"
                onClick={() => setModalAccept(true)}
              >
                Accept
              </button>
              <button className="btn-learn mt-3">Reject</button>
            </div>
            <Modalaccept
              show={modalaccept}
              onHide={() => setModalAccept(false)}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
