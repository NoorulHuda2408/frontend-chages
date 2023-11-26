import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./ModalAccept.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { API_URL } from "../../../service/client";
import { useState, useEffect } from "react";

export default function ModalChatTeacher(props) {
  console.log(props);
  const [msg, setMsg] = useState("");
  const userData = useSelector((state) => state?.signin?.signInData?.data);
  const [data, setData] = useState();

  console.log("idssss", props.id);

  async function sendMessage() {
    try {
      const res = await axios.post(`${API_URL}/api/send-message`, {
        tutorId: userData.role===1? userData?._id:props?.id,
        studentId:  userData.role===1? props?.id:userData?._id,
        message: msg,
        sender: userData.role===1?"tutor":"student",
      });
      console.log(res);
      setMsg("");
      props.onHide();
    } catch (e) {}
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="modal-main">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className=" ms-auto text-center"
          >
            Chat
          </Modal.Title>
        </Modal.Header>
        <div
          style={{
            height: "40vh",
            background: "gray",
            overflow: "auto",
            padding: "20px",
          }}
        >
          {props?.datass?.length > 0 &&
            props?.datass?.map((item, index) => {
              if (item?.sender !== "student") {
                return (
                  <>
                    <div
                      style={{
                        background: "#49bbbd",
                        padding: "10px",
                        borderRadius: "20px",
                        marginBottom: "20px",
                        textAlign: "right",
                      }}
                    >
                      {item?.message}
                    </div>
                  </>
                );
              } else {
                return (
                  <>
                    <div
                      style={{
                        background: "#49bbbd",
                        padding: "10px",
                        borderRadius: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      {item?.message}
                    </div>
                  </>
                );
              }
            })}
        </div>
        <Modal.Body style={{ background: "gray" }}>
          <Row>
            <Form>
              <Form.Group
                // className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Message"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <div className="d-flex justify-content-end">
              <button
                className="btn-submit mt-3 "
                onClick={() => {
                  sendMessage();
                }}
              >
                Send Message
              </button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
