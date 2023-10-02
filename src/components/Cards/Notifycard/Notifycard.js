import { Row, Container, Col } from "react-bootstrap";
import "./Notifycard.css";
import Card from "react-bootstrap/Card";
import cardimg from "../../../assests/Card/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg";
export default function Notifycard() {
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

            <div className="d-flex align-items-center justify-content-around mt-3">
              <button className="btn-learn mt-3">Accept</button>
              <button className="btn-learn mt-3">Reject</button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
