import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./ModalAccept.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

import { API_URL } from "../../../service/client";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ModalFeedBack(props) {
  console.log(props.id);
  const [time, setTime] = useState("");
  const [feedback, setFeedback] = useState();
  const [session, setSession] = useState();

  const userData = useSelector((state) => state?.signin?.signInData?.data);

  // const formValidation = () => {
  //   if (!feedback) {
  //     toast.error("Please Add feedback messages");
  //     return false;
  //   }
  // };

  async function handleClick(e) {
    e.preventDefault();

    

    try {
      const data = await axios.post(`${API_URL}/api/addFeedback/${props.id}`, {
        feedback: feedback,
      });
      if (data.status === 200) {
        toast.success("Reported successfully");
        props.onHide(false);
      }
    } catch (e) {}
  }

  // /api/addMentorPkg/:id

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
           Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label className="label-txt ms-2">Add Feedback</Form.Label> */}
                {/* <Form.Control
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                  // type="datetime-local"
                  id="datetime"
                  name="datetime"
                  className="inpt-date"
                  autoFocus
                /> */}
                <div style={{display:"flex",marginBottom:"20px",alignItems:"center"}}>
                  <input name="behavior" style={{marginRight:"20px",width:"20px",backgroundColor:"none"}} type="radio" />
                  <p style={{marginLeft:"20px"}}>Bad Behaviour</p>
                </div>
                <div style={{display:"flex",marginBottom:"20px",alignItems:"center"}}>
                  <input name="behavior" style={{marginRight:"20px",width:"20px",backgroundColor:"none"}} type="radio" />
                  <p style={{marginLeft:"20px"}}>Not a good teacher</p>
                </div>
                <div style={{display:"flex",marginBottom:"20px",alignItems:"center"}}>
                  <input name="behavior" style={{marginRight:"20px",width:"20px",backgroundColor:"none"}} type="radio" />
                  <p style={{marginLeft:"20px"}}>Harasment</p>
                </div>
                <div style={{display:"flex",marginBottom:"20px",alignItems:"center"}}>
                  <input name="behavior" style={{marginRight:"20px",width:"20px",backgroundColor:"none"}} type="radio" />
                  <p style={{marginLeft:"20px"}}>Not punctual</p>
                </div>
                
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <div className="d-flex justify-content-end">
              <button className="btn-submit mt-3 " onClick={handleClick}>
                Submit
              </button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
