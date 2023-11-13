import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./ModalAccept.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";

import { API_URL } from "../../../service/client";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function Modalpkg(props) {
  console.log(props)
  const [time, setTime] = useState("");
  const [price, setPrice] = useState()
  const [session, setSession] = useState()

  const userData = useSelector((state) => state?.signin?.signInData?.data);


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
            Add Packages
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
                Price
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  // type="datetime-local"
                  id="datetime"
                  name="datetime"
                  className="inpt-date"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="label-txt ms-2">
                Session (Monthly/weekly)
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setSession(e.target.value);
                  }}
                  // type="datetime-local"
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
