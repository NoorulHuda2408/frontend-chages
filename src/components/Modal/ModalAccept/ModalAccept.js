import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./ModalAccept.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

import { API_URL } from "../../../service/client";
import { useState } from "react";

export default function ModalAccept(props) {
  console.log(props)
  const [time, setTime] = useState("");
  async function approved() {
    if (!time) {
      toast.error("please add appiontment time");
      return false;
    }
    const res = await axios.post(
      `${API_URL}/api/approveNotification/${props?.id}`,
      {
        time: time,
      }
    );
    console.log(res);
    if (res.status === 200) {
      console.log(res);
      console.log("Approved successfully");
      toast.success("Approved successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
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
            Time Slot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="label-txt ms-2">
                  Available Time
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  className="inpt-date"
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
                  props.onHide();
                  approved();
                }}
              >
                Submit
              </button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
