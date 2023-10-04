import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import "./StudentResult.css";
import Navbar from "../../../components/Navbar/index";
import Select from "react-select";

export default function StudentResult() {
  const [loading, setLoading] = useState(false);

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
    { value: "Others", label: "Others" },
  ];

  return (
    <>
      <Navbar />
      <Container fluid className="Main-w pb-5">
        <div className="main-1">
          <Row className="justify-content-center align-items-center Form-main">
            <h1 className="upload-h1">Upload Progress & Notes</h1>

            <form>
              <div className="mt-4">
                <label className="label-form required-label">
                  Student Name
                </label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    name="name"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">Contact No</label>
                <div className="inputdiv">
                  <input
                    type="tel"
                    placeholder="Enter Phone No"
                    name="mobile"
                    onInput={(e) => {
                      // Remove any non-numeric characters from the input
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Enter Age"
                    name="age"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="label-form required-label">Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="xyz@gmail.com"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="label-form required-label">Gender</label>
                <div className="inputdiv">
                  <Select
                    options={genderOptions}
                    placeholder="Please select..."
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">Class</label>
                <div className="inputdiv">
                  <Select
                    options={optionsclass}
                    placeholder="Select a class..."
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">
                  Marks Summary
                </label>
                <Row>
                  <Col lg={4} className="mt-md-3">
                    <input type="text" placeholder="Subject" name="subject" />
                  </Col>

                  <Col lg={4} className="mt-md-3">
                    <input
                      type="number"
                      placeholder="Obtained Marks"
                      name="score"
                    />
                  </Col>
                  <Col lg={4} className="mt-md-3">
                    <input
                      type="number"
                      placeholder="Total Marks"
                      name="total"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mt-4">
                <label className="label-form required-label">Feedback</label>
                <div className="inputdiv">
                  <textarea
                    className="myTextarea"
                    id="myTextarea"
                    rows="4"
                    cols="50"
                    placeholder="Feedback"
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
                <label className="label-form required-label">Date</label>
                <div className="inputdiv">
                  <input type="date" placeholder="dd-mm-yyyy" name="date" />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">
                  Upload Notes
                </label>
                <div className="inputdiv">
                  <input
                    type="file"
                    id="documentInput"
                    name="document"
                    accept=".pdf, .doc, .docx"
                  />
                </div>
              </div>

              <button className="formsubmitbutton ">
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </Row>
        </div>
      </Container>
    </>
  );
}
