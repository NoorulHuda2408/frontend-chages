import { Row, Col, Container } from "react-bootstrap";
import CardNotify from "../../../components/Cards/Notifycard/Notifycard";
import Navbar from "../../../components/Navbar/index";

export default function Request() {
  return (
    <>
      <Navbar />
      <Container className="Main-whole pb-5">
        <Row className="mt-5 mb-3  text-center">
          <h1 className="h1-notification">Notification</h1>
        </Row>

        <Row>
          <Col>
            <CardNotify />
          </Col>
          <Col>
            <CardNotify />
          </Col>
          <Col>
            <CardNotify />
          </Col>
        </Row>
      </Container>
    </>
  );
}
