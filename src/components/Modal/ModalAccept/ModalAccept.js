import React, { useState } from "react";
import { Modal, Row, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../../service/client";

export default function ModalAccept(props) {
  const [time, setTime] = useState("");

  async function approved() {
    if (!time) {
      toast.error("Please add appointment time");
      return false;
    }

    const res = await axios.post(
      `${API_URL}/api/approveNotification/${props?.id}`,
      {
        time: time,
      }
    );

    if (res.status === 200) {
      toast.success("Approved successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate >= currentDate) {
      setTime(e.target.value);
    } else {
      toast.error("Please select today or a future date.");
    }
  };

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
            className="ms-auto text-center"
          >
            Time Slot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="label-txt ms-2">
                  Available Time
                </Form.Label>
                <Form.Control
                  onChange={handleDateChange}
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
                className="btn-submit mt-3"
                onClick={() => {
                  props.onHide();
                  approved();
                }}
              >
                Submit
              </button>
              <button
                className="btn-submit mt-3"
                onClick={() => {
                  props.onHide();
                  approved();
                }}
              >
                cancel
              </button>

              {/* <button
                className="btn-cancel mt-3 me-2"
                onClick={props.onHide}
              >
                Cancel
              </button>
              
                className="btn-submit mt-3"
                onClick={() => {
                  props.onHide();
                  approved();
                }}




               */}
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
