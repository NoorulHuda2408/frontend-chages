/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";
import "./Teacherprofile.css";
import Navbar from "../../../components/Navbar/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

export default function Teacherprofile() {
  const [qualification, setQualification] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [age, setage] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [biography, setBiography] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [province, setProvince] = useState("");
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.signin?.signInData?.data);
  const [loader, setLoader] = useState(false);

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

  const formValidation = () => {
    if (!phoneNo) {
      toast.error("Please Enter phone number");
      return false;
    } else if (!cnic) {
      toast.error("Please Enter Cnic");
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
    } else if (!skill) {
      toast.error("Please enter skill");
      return false;
    } else if (!gender) {
      toast.error("Please Select Gender");
      return false;
    } else if (!experience) {
      toast.error("Please enter your experience ");
      return false;
    } else if (!level) {
      toast.error("Please enter Teaching level");
      return false;
    } else if (!subject) {
      toast.error("Please enter Subject");
      return false;
    } else if (!biography) {
      toast.error("Please enter Biography");
      return false;
    } else if (!province) {
      toast.error("Please enter Privince");
      return false;
    }
  };

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
  const handleChange = async () => {
    const res = formValidation();
    if (res === false) {
      return false;
    }
    setLoader(true);
    const data = {
      teacherId: userData?._id,
      imageUrl: image,
      phoneNo: phoneNo,
      age: age,
      gender: gender,
      cnic: cnic,
      city: city,
      province: province,
      address: address,

      qualification: qualification,
      experience: experience,
      level: level,
      skills: skill,
      subject: subject,
      bio: biography,
    };

    try {
      await axios.post(`${API_URL}/api/mentorProfile`, data).then((res) => {
        console.log("this is", res);

        setLoader(false);
        toast.success("Profile Creates Successfully");
        navigate("/Notification");
      });
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <>
      <main className="py-6 bg-surface-secondary main-w2">
        <div className="wrapper main-w2">
          <div className="profile">
            <div className="content">
              <h1>Teacher Registration Form</h1>

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

              <fieldset>
                <div className="grid-35">
                  <label>Your Photo</label>
                </div>

                <div className="grid-65 ">
                  <input
                    accept="image/*"
                    onChange={(e) => {
                      handleImageUpload(e);
                    }}
                    type="file"
                    class="btn"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Phone No</label>
                </div>
                <div class="grid-65">
                  <input
                    value={phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                    type="tel"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Phone no"
                    onInput={(e) => {
                      // Remove any non-numeric characters from the input
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Age</label>
                </div>
                <div className="grid-65">
                  <input
                    value={age}
                    onChange={(e) => {
                      setage(e.target.value);
                    }}
                    type="number"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Age"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Gender</label>
                </div>
                <div className="grid-75">
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "2.5rem",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      type="radio"
                      name="gender"
                      value="male"
                      className="grid-75-input"
                    />
                    Male
                  </label>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "2rem",
                    }}
                  >
                    <input
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      type="radio"
                      name="gender"
                      value="female"
                      className="grid-75-input"
                    />
                    Female
                  </label>
                  <label style={{ display: "flex", alignItems: "center" }}>
                    <input
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      type="radio"
                      name="gender"
                      value="other"
                      className="grid-75-input"
                    />
                    Other
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">CNIC</label>
                </div>
                <div className="grid-65">
                  <input
                    value={cnic}
                    onChange={(e) => {
                      setCnic(e.target.value);
                    }}
                    type="number"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Cnic"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">City</label>
                </div>
                <div className="grid-65">
                  <input
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    type="text"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your City"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Province/Region</label>
                </div>
                <div className="grid-65">
                  <select
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  >
                    <option value="Federal Area">Federal Area</option>
                    <option value="Azad Kashmir">Azad Kashmir</option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="FANA">FANA</option>
                    <option value="FATA">FATA</option>
                    <option value="KPK">KPK</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                  </select>
                </div>
              </fieldset>
              <fieldset
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "30px 0px",
                  border: "none",
                }}
              >
                <div className="grid-35">
                  <label for="lname">Address</label>
                </div>
                <div className="grid-65">
                  <input
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    type="text"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Address"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Qualification</label>
                </div>
                <div className="grid-65">
                  <input
                    onChange={(e) => setQualification(e.target.value)}
                    value={qualification}
                    type="text"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Qualification"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Teaching Experience</label>
                </div>
                <div className="grid-65">
                  <input
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                    value={experience}
                    type="text"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Experience"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Teaching Level</label>
                </div>
                <div className="grid-65">
                  <select
                    onChange={(e) => {
                      setLevel(e.target.value);
                    }}
                  >
                    <option value="">Please Select</option>
                    <option value="primary">Primary School Level</option>
                    <option value="high school">High School Level</option>
                    <option value="college">College Level</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Skill</label>
                </div>
                <div className="grid-65">
                  <input
                    value={skill}
                    onChange={(e) => {
                      setSkill(e.target.value);
                    }}
                    type="text"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Skill"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="lname">Subjects</label>
                </div>
                <div className="grid-65">
                  <textarea
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    name="myTextarea"
                    id="myTextarea"
                    rows="4"
                    cols="50"
                    placeholder="Enter your Subjects"
                  ></textarea>
                  <br />
                </div>
              </fieldset>

              <fieldset
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "30px 0px",
                  border: "none",
                }}
              >
                <div className="grid-35">
                  <label for="lname">Biography</label>
                </div>
                <div className="grid-65">
                  <textarea
                    onChange={(e) => {
                      setBiography(e.target.value);
                    }}
                    name="myTextarea"
                    id="myTextarea"
                    rows="4"
                    cols="50"
                    placeholder="Enter your Bio"
                  ></textarea>
                  <br />
                </div>
              </fieldset>

              <fieldset>
                <button onClick={handleChange}  className="Btn">
                  <div style={{ marginRight: "10px" }}>Save Changes</div>
                  {loader && (
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  )}
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
