import "./Searchtutor.css";
import { Row, Col, Container } from "react-bootstrap";
import Navbar from "../../../components/Navbar/index";
import Select from "react-select";
import { useState } from "react";
import Card1 from "../../../components/Cards/Searchcard/Searchcard";

export default function Searchtutor() {
  const classes = [
    "Class 1 to 5",
    "Class 6 to 8",
    "Matric",
    "FSC (Pre-engineering",
    "FSC(Pre-Medical)",
    "ICS",
    "BSC",
    "Intermediate",
    "Masters",
    "O/A Level",
  ];
  const optionsclass = classes.map((subject) => ({
    value: subject,
    label: subject,
  }));

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const studyOptions = [
    { value: "Tuition Center", label: "Tuition Center" },
    { value: "Home Tuition", label: "Home Tuition" },
  ];

  const commonCity = [
    "Taxila",
    "Rawalpindi",
    "Islamabad",
    "Sialkot",
    "Jehlum",
    "Wah Cantt",
    "Multan",
  ];
  const Cityoptions = commonCity.map((subject) => ({
    value: subject,
    label: subject,
  }));

  const commonSubjects = [
    "Mathematics",
    "English",
    "History",
    "Science",
    "Art",
    "Music",
    "Physical Education",
    "Biology",
    "Chemistry",
    "Physics",
    "Computer Science",
    "Geography",
    "Economics",
    "Psychology",
    "Sociology",
    "Literature",
    "Spanish",
    "French",
    "German",
    "Japanese",
  ];

  const options = commonSubjects.map((subject) => ({
    value: subject,
    label: subject,
  }));

  return (
    <>
      <Navbar />

      <Container fluid>
        <Container>
          <Row className="mt-5">
            <h3>Search Tutor</h3>
            <p className="p1 mt-2">
              Unleash the potential of our search filters to find your perfect
              tutor match. Customize your search by subjects and locations to
              meet your needs. If you can't find the right tutor, don't worry –
              we're here to assist you in your learning journey. Reach out to
              us, and we'll handle the rest.
            </p>
          </Row>
          <Row className="search-main pb-3 mt-3">
            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select options={optionsclass} placeholder="Class" />
              </div>
            </Col>

            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select options={options} placeholder="Subjects" />
              </div>
            </Col>

            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select options={Cityoptions} placeholder="City" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select options={genderOptions} placeholder="Gender" />
              </div>
            </Col>

            <Col lg={4}>
              <div className="mt-4">
                <Select options={studyOptions} placeholder="Tuition Mode" />
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-center ">
                <div className="mt-4 ">
                  <button className="searchbtn ">Search</button>
                </div>
                <div className="mt-4">
                  <button className="searchbtn ms-4">Reset</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4 pb-5">
            <Col lg={12}>
              <Card1 />
            </Col>
            <Col lg={12}>
              <Card1 />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
