import { Row, Col, Container } from "react-bootstrap";
import "./Viewprogress.css";
import Navbar from "../../../components/Navbar/index";
import Procard from "../../../components/Cards/Progresscard/CardProgress";
import { useState,useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";


export default function Viewprogress() {
  const [data, setData] = useState();
  const userData = useSelector((state) => state?.signin?.signInData?.data);

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
  async function getMarks() {
    try {
      const res = await axios.get(`${API_URL}/api/getMarks/${userData._id}`);
      if(res.status===200){
        setData(res.data);

      }
      console.log("marks ",res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMarks();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5">
          <h1 className="h1-pro">Progress Report</h1>
        </Row>
        <Row className="mt-4 mb-3">
          <Col lg={12} md={12}>
            <Procard data={data} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
