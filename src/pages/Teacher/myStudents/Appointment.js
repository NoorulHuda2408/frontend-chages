import { Row, Col, Container } from "react-bootstrap";
import CardNotify from "../../../components/Cards/Notifycard/Notifycard";
import Navbar from "../../../components/Navbar/index";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";
import AppointmentCard from "../../../components/Cards/AppointmentCard/AppointmentCard";
import StudentsCard from "../../../components/Cards/studentsCards/StudentsCard";

export default function MyStudents() {
  const userData = useSelector((state) => state?.signin?.signInData?.data);
  const [loader, setLoader] = useState(false);
  const [hireShow, setHireShow] = useState();

  async function HireStudent() {
    setLoader(true);
    const res = await axios.get(
      `${API_URL}/api/myStudents/${userData?._id}`
    );
    console.log(res, "this is response");
    if (res.status === 200) {
      console.log(res.data, "this is res");
      setLoader(false);

      setHireShow(res.data);
    }
  }
  useEffect(() => {
    HireStudent();
  }, []);
  return (
    <>
      <Navbar />
      <Container className="Main-whole pb-5">
        <Row className="mt-5 mb-3  text-center">
          <h1 className="h1-notification">Yours Register Students</h1>
        </Row>

        <StudentsCard datas={hireShow} />
      </Container>
    </>
  );
}
