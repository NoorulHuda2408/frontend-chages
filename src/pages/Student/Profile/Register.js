import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import "./Register.css";
import Navbar from "../../../components/Navbar/index";
import Select from "react-select";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const City = [
    "Taxila",
    "Rawalpindi",
    "Islamabad",
    "Sialkot",
    "Jehlum",
    "Wah Cantt",
    "Multan",
  ];
  const Cityoption = City.map((subject) => ({
    value: subject,
    label: subject,
  }));

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const provinceOptions = [
    { value: "Federal Area", label: "Federal Area" },
    { value: "Azad Kashmir", label: "Azad Kashmir" },
    { value: "Balochistan", label: "Balochistan" },
    { value: "FATA", label: "FATA" },
    { value: "KPK", label: "KPK" },
    { value: "Punjab", label: "Punjab" },
    { value: "Sindh", label: "Sindh" },
  ];
  const studyOptions = [
    { value: "Tuition Center", label: "Tuition Center" },
    { value: "Home Tuition", label: "Home Tuition" },
  ];

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

  const optionsclass = classes.map((subject) => ({
    value: subject,
    label: subject,
  }));

  const handleChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
    
    
      <Container fluid className="Main-w pb-5">
        <div className="main-1">
          <Row className="justify-content-center align-items-center Form-main">
            <h1 className="upload-h1 mb-4">Student Registration Form</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "100px",
                }}
                src={
                  selectedImage ||
                  "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg"
                }
                alt="Profile"
              />
            </div>
            <form>
              <div className="mt-4">
                <label className="label-form ">Profile Picture:</label>
                <div className="inputdiv">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="label-form required-label">
                  Student Name
                </label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    name="fname"
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
                <label className="label-form required-label">Gender</label>
                <div className="inputdiv">
                  <Select
                    options={genderOptions}
                    placeholder="Please select..."
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">
                  Province/Region
                </label>
                <div className="inputdiv">
                  <Select
                    options={provinceOptions}
                    placeholder="Select Your Province/Region"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="label-form required-label">
                  City
                </label>
                <div className="inputdiv">
                  <Select
                    options={Cityoption}
                    placeholder="Select Your City"
                  />
                </div>
              </div>

              {/* <div className="mt-4">
                <label className="label-form required-label">City</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Enter Your City"
                    name="email"
                    required
                  />
                </div>
              </div> */}
              <div className="mt-4">
                <label className="label-form required-label">Address</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    name="address"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">
                  Institue Name
                </label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Enter Your School/College/University Name"
                    name="institute"
                    required
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
                  Select Subjects:
                </label>
                <Select
                  isMulti
                  options={options}
                  value={selectedOptions}
                  onChange={handleChange}
                  placeholder="Select Subjects"
                />
              </div>

              <div className="mt-4">
                <label className="label-form required-label">
                  Mode Of Study
                </label>
                <Select
                  options={studyOptions}
                  placeholder="Choose Your Mode of Study"
                />
              </div>

              <div className="mt-4">
                <label className="label-form ">Additional Information</label>
                <div className="inputdiv">
                  <textarea
                    className="myTextarea"
                    id="myTextarea"
                    rows="5"
                    cols="50"
                    placeholder="Extra Detail If any"
                  ></textarea>
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
