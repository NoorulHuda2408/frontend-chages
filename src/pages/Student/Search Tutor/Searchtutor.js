import "./Searchtutor.css";
import { Row, Col, Container } from "react-bootstrap";
import Navbar from "../../../components/Navbar/index";
import Select from "react-select";
import { useState, useEffect } from "react";
import Card1 from "../../../components/Cards/Searchcard/Searchcard";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";

export default function Searchtutor() {
  const [teachersData, setTeachersData] = useState();
  const [originalData, setOriginalData] = useState();
  const [parent, setParent] = useState(false);
  const [classStudy, setClassStudy] = useState();
  const [subject, setSubject] = useState();

  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [mode, setMode] = useState();

  const userData = useSelector((state) => state?.signin?.signInData?.data);
  console.log(userData, "this is user data");
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

  const resetFilters = () => {
    setSubject("");
    setCity("");
    setGender("");
    setMode("");
    setTeachersData(originalData); // Reset to the original data
  };

  async function getStudentProfile() {
    const res = await axios.get(
      `${API_URL}/api/getStudentProfile/${userData?._id}`
    );
    if (res?.data?.classStudy === "Class 1 to 5") {
      setParent(true);
    }
  }
  const applyFilters = () => {
    const filteredData = teachersData.filter((teacher) => {
      // Convert teacher properties to lowercase for case-insensitive comparison
      const teacherSubject = teacher.subject
        ? teacher.subject.toLowerCase()
        : "";
      const teacherCity = teacher.city ? teacher.city.toLowerCase() : "";
      const teacherGender = teacher.gender ? teacher.gender.toLowerCase() : "";
      const teacherMode = teacher.mode ? teacher.mode.toLowerCase() : "";

      // Convert filter values to lowercase for consistent comparison
      const filterSubject = subject ? subject.toLowerCase() : "";
      const filterCity = city ? city.toLowerCase() : "";
      const filterGender = gender ? gender.toLowerCase() : "";
      const filterMode = mode ? mode.toLowerCase() : "";

      // Apply filters individually or in combination
      const subjectMatch = !filterSubject || teacherSubject === filterSubject;
      const cityMatch = !filterCity || teacherCity === filterCity;
      const genderMatch = !filterGender || teacherGender === filterGender;
      const modeMatch = !filterMode || teacherMode === filterMode;

      // If any of the filter conditions are not met, exclude the teacher
      if (!subjectMatch || !cityMatch || !genderMatch || !modeMatch) {
        return false;
      }

      return true;
    });

    setTeachersData(filteredData);
  };

  async function getTeachers() {
    const res = await axios.get(`${API_URL}/api/getTeachers`);
    console.log(res.data);
    setTeachersData(res?.data);
    setOriginalData(res?.data);
  }

  useEffect(() => {
    getTeachers();
    getStudentProfile();
  }, [subject, city, gender, mode]);

  return (
    <>
      <Navbar />

      <Container fluid>
        <Container>
          <Row className="mt-5">
            <Col style={{ marginBottom: "50px" }} lg={12}>
              <h3>
                Welcome {parent && "the parents of"} {userData?.firstName}{" "}
                {userData?.lastName}{" "}
              </h3>
            </Col>
            <Col lg={12}>
              <h3>Search Tutor</h3>
              <p className="p1 mt-2">
                Unleash the potential of our search filters to find your perfect
                tutor match. Customize your search by subjects and locations to
                meet your needs. If you can't find the right tutor, don't worry
                – we're here to assist you in your learning journey. Reach out
                to us, and we'll handle the rest.
              </p>
            </Col>
          </Row>
          <Row className="search-main pb-3 mt-3">
            {/* <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select
                  onChange={(e) => {
                    setClassStudy(e.value);
                  }}
                  options={optionsclass}
                  placeholder="Class"
                />
              </div>
            </Col> */}

            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select
                  onChange={(e) => {
                    setSubject(e.value);
                  }}
                  options={options}
                  placeholder="Subjects"
                />
              </div>
            </Col>

            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select
                  onChange={(e) => {
                    setCity(e.value);
                  }}
                  options={Cityoptions}
                  placeholder="City"
                />
              </div>
            </Col>
            <Col lg={4}>
              <div className="mt-4 inputdiv">
                <Select
                  onChange={(e) => {
                    setGender(e.value);
                  }}
                  options={genderOptions}
                  placeholder="Gender"
                />
              </div>
            </Col>

            <Col lg={4}>
              <div className="mt-4">
                <Select
                  onChange={(e) => {
                    setMode(e.value);
                  }}
                  options={studyOptions}
                  placeholder="Tuition Mode"
                />
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex align-items-center justify-content-center ">
                <div className="mt-4 ">
                  <button onClick={applyFilters} className="searchbtn ">
                    Search
                  </button>
                </div>
                <div className="mt-4">
                  <button onClick={resetFilters} className="searchbtn ms-4">
                    Reset
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <Card1 data={teachersData} />
        </Container>
      </Container>
    </>
  );
}
