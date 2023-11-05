import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./Modalview.css";
import imageLink from "../../../assests/Card/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg";
export default function Modalview(props) {
  console.log(props.student);
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="main-section">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className=" ms-auto text-center"
          >
            Profile Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <div
                style={{
                  padding: "10px 10px 10px 10px",
                }}
              >
                <img
                  alt="profile pic"
                  style={{ borderRadius: "100px" }}
                  width={200}
                  height={200}
                  src={props?.student?.profile?.imageUrl
                    ?props?.student?.profile?.imageUrl:imageLink}
                />
              </div>
            </Col>
            <Col md={8}>
              <div
                style={{
                  padding: "30px",
                }}
              >
                <Row>
                  <Col md={4}>
                    <p className="label-p">Full Name</p>
                  </Col>
                  <Col md={8}>
                    <p className="">{props?.student?.studentdata?.firstName} {props?.student?.studentdata?.lastName}</p>
                  </Col>
                </Row>

                <hr />
                <Row>
                  <Col md={4}>
                    <p className="label-p">Contact No</p>
                  </Col>
                  <Col md={8}>
                    <p className="text-muted mb-0">{props?.student?.profile?.phoneNo}</p>
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col md={4}>
                    <p className="label-p">Age</p>
                  </Col>
                  <Col md={8}>
                    <p className="mb-0">{props?.student?.profile?.age}</p>
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col md={4}>
                    <p className="label-p">Gender</p>
                  </Col>
                  <Col md={8}>
                    <p className=" mb-0">{props?.student?.profile?.gender}</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={4}>
                    <p className="label-p">Email</p>
                  </Col>
                  <Col md={8}>
                    <p className=" mb-0">{props?.student?.studentdata?.email}</p>
                  </Col>
                </Row>
                <hr style={{ color: "black" }} />
                <Row>
                  <Col md={4}>
                    <p className="label-p">City</p>
                  </Col>
                  <Col md={8}>
                    <p className="text-muted mb-0">{props?.student?.profile?.city}</p>
                  </Col>
                </Row>
                {/* <hr /> */}
                {/* <Row>
                  <Col md={4}>
                    <p className="label-p">Address</p>
                  </Col>
                  <Col md={8}>
                    <p className="text-muted mb-0">
                      Benazir Colony, Street 2, House no A67
                    </p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={4}>
                    <p className="label-p">Institute Name</p>
                  </Col>
                  <Col md={8}>
                    <p className="text-muted mb-0">Punjab Group Of College</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={4}>
                    <p className="label-p">Class</p>
                  </Col>
                  <Col md={8}>
                    <p className=" mb-0">12</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={4}>
                    <p className="label-p">Subject</p>
                  </Col>
                  <Col md={8}>
                    <p className="text-muted mb-0">Biology</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={4}>
                    <p className="label-p">Study Mode</p>
                  </Col>
                  <Col md={8}>
                    <p className="text-muted mb-0">Online</p>
                  </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
