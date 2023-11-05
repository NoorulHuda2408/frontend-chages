import { Row, Col, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import "./StudentResult.css";
import Navbar from "../../../components/Navbar/index";
import Select from "react-select";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";

export default function StudentResult(props) {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");
  const [obtainMarks, setObtainMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState("");
  const [uploadNotes, setUploaseNotes] = useState("");
  const [studentId, setStudentId] = useState("");
  const userData = useSelector((state) => state?.signin?.signInData?.data);

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

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file.size >= 2872139) {
      toast.error("File cannot be greater than 3mbs");
    } else {
      var data = new FormData();
      data.append("files", file);
      if (file) {
        const responses = await axios.post(`${API_URL}/api/upload`, data);
        console.log("responses", responses);
        if (responses.status === 200) {
          toast.success("Image Upload Successfully.");
        }
        setUploaseNotes(responses?.data?.imageUrl);
      }
    }
  };

  const formValidation = () => {
    if (!subject) {
      toast.error("Please enter Subject");
      return false;
    } else if (!obtainMarks) {
      toast.error("Please enter obtain Marks");
      return false;
    } else if (!totalMarks) {
      toast.error("Please enter total marks");
      return false;
    } else if (!feedback) {
      toast.error("Please enter feedback");
      return false;
    } else if (!date) {
      toast.error("Please enter Date");
      return false;
    }
  };
  const handleChange = async (e) => {
    e.preventDefault();

    const res = formValidation();
    if (res === false) {
      return false;
    }

    const marksData = await axios.post(
      `${API_URL}/api/uploadMarks/${props.cardId}/${userData._id}`,
      {
        subject,
        obtainMarks,
        totalMarks,
        feedback,
        date,
        notes: uploadNotes,
      }
    );
    if (marksData.status === 200) {
      toast.success(marksData.data.message);
      props.onHide();
    }
    console.log(marksData, "this is the marks data");
  };

  return (
    <>
      {/* <Navbar /> */}
      <Modal size="lg" show={props.show}>
        <Row
          style={{ padding: "50px" }}
          className="justify-content-center align-items-center "
        >
          <h1 className="upload-h1">Upload Progress & Notes</h1>

          <form>
            <div className="mt-4">
              <label className="label-form required-label">Marks Summary</label>
              <Row>
                <Col lg={4} className="mt-md-3">
                  <input
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    type="text"
                    placeholder="Subject"
                    name="subject"
                  />
                </Col>

                <Col lg={4} className="mt-md-3">
                  <input
                    onChange={(e) => {
                      setObtainMarks(e.target.value);
                    }}
                    type="number"
                    placeholder="Obtained Marks"
                    name="score"
                  />
                </Col>
                <Col lg={4} className="mt-md-3">
                  <input
                    onChange={(e) => {
                      setTotalMarks(e.target.value);
                    }}
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
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
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
                <input
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  type="date"
                  placeholder="dd-mm-yyyy"
                  name="date"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="label-form required-label">Upload Notes</label>
              <div className="inputdiv">
                <input
                  onChange={(e) => {
                    handleImageUpload(e);
                  }}
                  type="file"
                  id="documentInput"
                  name="document"
                  accept=".pdf, .doc, .docx"
                />
              </div>
            </div>

            <button onClick={handleChange} className="formsubmitbutton ">
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        </Row>
      </Modal>
    </>
  );
}
