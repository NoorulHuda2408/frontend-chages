import { Row, Container, Col } from "react-bootstrap";
import "./Notifycard.css";
import Card from "react-bootstrap/Card";
import cardimg from "../../../assests/Card/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalChatTeacher from "../../Modal/ModalChatTeacher/ModalChatTeacher";
import Modalaccept from "../../Modal/ModalAccept/ModalAccept";
import { useSelector } from "react-redux";
export default function ChartCard({ datas, HireStudent }) {
  const userData = useSelector((state) => state?.signin?.signInData?.data);

  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [modalaccept, setModalAccept] = useState(false);
  const [time, setTime] = useState("");
  const [cardId, setCardId] = useState();
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState();
  const [messages, setMessages] = useState();

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
                      <div>
                        <div className="ms-2 ps-2 mt-4">
                          {/* <div className="d-flex align-items-center mt-3 ">
                            <h3 className="Subject-h5">Name : </h3>
                            <p className="subject-name ms-3">
                              {data?.student.firstName}{" "}
                             
                            </p>
                          </div> */}

                          <p className="subject-name">
                            Your Just Recieve a message from{" "}
                            {userData?.role === 1
                              ? data?.student.firstName
                              : data?.tutor.firstName}{" "}
                            please click below to check the message
                          </p>

                          <hr className="hr-notify"></hr>

                          <div className="d-flex align-items-center justify-content-evenly mt-3">
                            <button
                              onClick={() => {
                                setShow(true);
                                setMessages(data?.messages);
                                setStudent( userData?.role === 1?data?.student?._id:data?.tutor?._id);
                                HireStudent();
                              }}
                              className="btn-learn mt-3"
                            >
                              View Message
                            </button>
                          </div>
                          <ModalChatTeacher
                            datass={messages}
                            show={show}
                            id={student}
                            onHide={() => setShow(false)}
                          />
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
