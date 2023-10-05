import { Row, Col, Container } from "react-bootstrap";
import "./Viewprogress.css";
import Navbar from "../../../components/Navbar/index";
import Procard from "../../../components/Cards/Progresscard/CardProgress";

export default function Viewprogress() {
  const reportData = [
    {
      course: "Mathematics",
      grade: "A",
      comment: "Excellent performance in mathematics.",
    },
    {
      course: "Science",
      grade: "B",
      comment: "Good effort in science class.",
    },
    {
      course: "History",
      grade: "C",
      comment: "Average performance in history.",
    },
  ];
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5">
          <h1 className="h1-pro">Progress Report</h1>
        </Row>
        <Row className="mt-4 mb-3">
          <Col lg={12} md={12}>
            <Procard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
