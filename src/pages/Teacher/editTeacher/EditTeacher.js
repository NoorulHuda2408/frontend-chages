/* eslint-disable jsx-a11y/alt-text */

import { useState,useEffect } from "react";
import "./Teacherprofile.css";
import Navbar from "../../../components/Navbar/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

export default function EditTeacher() {
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
  const [data, setData] = useState("");
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
   
    setLoader(true);
    const datass = {
      
      imageUrl: image?image:data?.imageUrl,
      phoneNo: phoneNo?phoneNo:data?.phoneNo,
      age: age?age:data?.age,
      gender: gender?gender:data?.gender,
      cnic: cnic?cnic:data?.cnic,
      city: city?city:data.city,
      province: province?province:data?.province,
      address: address?address:data?.address,

      qualification: qualification?qualification:data?.qualification,
      experience: experience?experience:data?.experience,
      level: level?level:data?.level,
      skills: skill?skill:data?.skills,
      subject: subject?subject:data?.subject,
      bio: biography?biography:data?.bio,
    };

    try {
      await axios.put(`${API_URL}/api/updateTeacher/${userData?._id}`, datass).then((res) => {
        console.log("this is", res);

        setLoader(false);
        toast.success("Profile Updated Successfully");
        navigate("/Notification");
      });
    } catch (e) {
      setLoader(false);
      toast.error(e);
    }
  };

  async function getStudentData() {
    try {
      const dataa = await axios.get(
        `${API_URL}/api/viewMentorProfile/${userData._id}`
      );
      console.log(dataa, "this is the daat");
      setData(dataa?.data?.data);
    } catch (err) {}
  }
  useEffect(() => {
    getStudentData();
  },[]);

  return (
    <>
      <main className="py-6 bg-surface-secondary main-w2">
        <div className="wrapper main-w2">
          <div className="profile">
            <div className="content">
              <h1>View and Edit Profile</h1>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "100px",
                  }}
                  src={
                    data.imageUrl
                    ? data.imageUrl
                    : image ||
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
                       value={phoneNo ? phoneNo : data?.phoneNo}
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
                    value={age ? age : data?.age}
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
                    value={cnic ? cnic : data?.cnic}
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
                    value={city ? city : data?.city}
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
                   value={address ? address : data?.address}
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
                    value={qualification ? qualification : data?.qualification}
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
                    value={experience ? experience : data?.experience }
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
                     value={skill ? skill : data?.skill}
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

               
 
                <select
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  >
                   
                    <option value="Mathematics">Mathematics</option>
                    <option value="History">History</option>
                    <option value="Science">Science</option>
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>

                    <option value="Physical Education">Physical Education</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Geography">Geography</option>
                    <option value="Economics">Economics</option>
                    <option value="Psychology">Psychology</option>
                    <option value="Sociology">Sociology</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Japanese">Japanese</option>


                  </select>
                  {/* <textarea
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    name="myTextarea"
                    id="myTextarea"
                    rows="4"
                    cols="50"
                    placeholder="Enter your Subjects"
                  ></textarea> */}
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
                    value={biography ? biography : data?.bio}
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
