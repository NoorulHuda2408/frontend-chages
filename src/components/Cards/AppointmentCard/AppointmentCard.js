import { Row, Container, Col } from "react-bootstrap";
import "./Notifycard.css";
import Card from "react-bootstrap/Card";
import cardimg from "../../../assests/Card/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modalview from "../../Modal/ModalView/Modalview";
import Modalaccept from "../../Modal/ModalAccept/ModalAccept";

export default function AppointmentCard({ datas }) {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [modalaccept, setModalAccept] = useState(false);
  const [student, setStudent] = useState();
  const [time, setTime] = useState("");
  const [cardId, setCardId] = useState();

  console.log("cardId", cardId);

  return (
    <>
      <Row>
        {datas?.length > 0
          ? datas?.map((data) => {
              console.log(data);
              return (
                <Col lg={4}>
                  <Card className="card-main  mt-4">
                    <Card.Body className="card3-body">
                      <div className="img-contain">
                        <img
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "100px",
                          }}
                          src={
                            data?.profile?.classStudy
                              ? data?.profile?.classStudy
                              : cardimg
                          }
                        />
                      </div>

                      <div>
                        <div className="ms-2 ps-2 mt-4">
                          <div className="d-flex align-items-center mt-3 ">
                            <h3 className="Subject-h5">Name : </h3>
                            <p className="subject-name ms-3">
                              {data?.studentdata?.firstName}{" "}
                              {data?.studentdata?.lastName}
                            </p>
                          </div>
                          <div className="d-flex align-items-center mt-3 ">
                            <h3 className="Subject-h5">Gender : </h3>
                            <p className="subject-name ms-3">
                              {data?.profile?.gender}
                            </p>
                          </div>
                          <div className="d-flex align-items-center mt-3 ">
                            <h3 className="Subject-h5">Appoint : </h3>
                            <p className="subject-name ms-3">
                              {data?.student?.time}
                            </p>
                          </div>
                          {/* <div className="d-flex align-items-center mt-3 ">
                          <h3 className="Subject-h5">Class : </h3>
                          <p className="subject-name ms-3">
                            {" "}
                           
                          </p>
                        </div> */}

                          {/* <div className="d-flex align-items-center mt-3 ">
                          <h3 className="Subject-h5">Study Mode : </h3>
                          <p className="subject-name ms-3">
                            {" "}
                            {data?.profile?.mode}
                          </p>
                        </div> */}
                          <hr className="hr-notify"></hr>
                          <div className="d-flex justify-content-center mt-3">
                            <button
                              className="btn-profile mt-3 "
                              onClick={() => {
                                setModalShow(true);
                                setStudent(data);
                              }}
                            >
                              View Profile
                            </button>
                          </div>
                          <Modalview
                            student={student}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                          />
                          <hr className="hr-notify"></hr>

                          <div className="d-flex align-items-center justify-content-evenly mt-3">
                            <button className="btn-learn mt-3">
                              Helping Material
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : "No data found"}
      </Row>
    </>
  );
}
