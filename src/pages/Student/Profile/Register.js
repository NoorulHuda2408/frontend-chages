import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import "./Register.css";
import Navbar from "../../../components/Navbar/index";
import Select from "react-select";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [age, setage] = useState("");
  const [gender, setGender] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [institute, setInstituate] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [modeStudy, setModeStudy] = useState("");
  const [addsitional, setAdditional] = useState("");
  const userData = useSelector((state) => state?.signin?.signInData?.data);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

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
        setImage(responses?.data?.imageUrl);
      }
    }
  };

  const formValidation = () => {
    if (!phoneNo) {
      toast.error("Please Enter phone number");
      return false;
    } else if (!age) {
      toast.error("Please enter age");
      return false;
    } else if (!city) {
      toast.error("Please enter password");
      return false;
    } else if (!address) {
      toast.error("Please enter address");
      return false;
    } else if (!gender) {
      toast.error("Please Select Gender");
      return false;
    } else if (!province) {
      toast.error("Please enter Privince");
      return false;
    } else if (!institute) {
      toast.error("Please enter Instituate");
      return false;
    } else if (!className) {
      toast.error("Please enter Class");
      return false;
    } else if (!modeStudy) {
      toast.error("Please enter Modeof study");
      return false;
    } else if (!addsitional) {
      toast.error("Please enter Additional Infro");
      return false;
    }
  };

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
  const classessss = ["Class 1 to 5"];
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

  const optionsclassssss = classessss.map((subject) => ({
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

  const handleChangeRegister = async (e) => {
    e.preventDefault();

    const res = formValidation();
    if (res === false) {
      return false;
    }
    setLoader(true);
    const data = {
      studentId: userData?._id,
      imageUrl: image,
      phoneNo: phoneNo,
      age: age,
      gender: gender,
      // cnic: String,
      province: province,
      city: city,
      address: address,
      instiute: institute,
      classStudy: className,
      subject: subject,
      mode: modeStudy,
      information: addsitional,
    };

    try {
      await axios.post(`${API_URL}/api/studentProfile`, data).then((res) => {
        console.log("this is", res);

        setLoader(false);
        toast.success("Profile Creates Successfully");
        navigate("/Searchtutor");
      });
    } catch (e) {
      setLoader(false);
      toast.error(e.message);
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
                  image ||
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
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              {/* <div className="mt-4">
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
              </div> */}

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
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
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
                    onChange={(e) => {
                      setage(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">Gender</label>
                <div className="inputdiv">
                  <Select
                    options={genderOptions}
                    placeholder="Please select..."
                    onChange={(e) => {
                      setGender(e.value);
                    }}
                  />
                </div>
              </div>

              {/* <div className="mt-4">
                <label className="label-form required-label">Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    required
                  />
                </div>
              </div> */}

              <div className="mt-4">
                <label className="label-form required-label">
                  Province/Region
                </label>
                <div className="inputdiv">
                  <Select
                    options={provinceOptions}
                    placeholder="Select Your Province/Region"
                    onChange={(e) => {
                      setProvince(e.value);
                    }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">City</label>
                <div className="inputdiv">
                  <Select
                    options={Cityoption}
                    placeholder="Select Your City"
                    onChange={(e) => {
                      setCity(e.value);
                    }}
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
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setInstituate(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">Class</label>
                <div className="inputdiv">
                  {userData?.role === 2 ? (
                    <Select
                      options={optionsclassssss}
                      placeholder="Select a class..."
                      onChange={(e) => {
                        setClassName(e.value);
                      }}
                    />
                  ) : (
                    <Select
                      options={optionsclass}
                      placeholder="Select a class..."
                      onChange={(e) => {
                        setClassName(e.value);
                      }}
                    />
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="label-form required-label">
                  Select Subjects:
                </label>
                <Select
                  isMulti
                  options={options}
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.value);
                  }}
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
                  onChange={(e) => {
                    setModeStudy(e.value);
                  }}
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
                    onChange={(e) => {
                      setAdditional(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleChangeRegister}
                className="formsubmitbutton "
              >
                <div style={{ marginRight: "10px" }}>Submit</div>
                {loader && (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </button>
            </form>
          </Row>
        </div>
      </Container>
    </>
  );
}
