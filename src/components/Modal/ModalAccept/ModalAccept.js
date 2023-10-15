import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
import "./ModalAccept.css";
import Form from "react-bootstrap/Form";

export default function ModalAccept(props) {
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
              <button className="btn-submit mt-3 " onClick={props.onHide}>
                Submit
              </button>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
