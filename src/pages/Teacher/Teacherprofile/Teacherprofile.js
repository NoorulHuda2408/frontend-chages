/* eslint-disable jsx-a11y/alt-text */

import { useState } from "react";
import "./Teacherprofile.css";
import Navbar from "../../../components/Navbar/index";
import { useNavigate } from "react-router-dom";

export default function Teacherprofile() {
  const [firstName, setFirstName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [cnic, setCnic] = useState("");
  const [age, setage] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

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
      <main className="py-6 bg-surface-secondary main-w2">
        <Navbar />
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
                    selectedImage ||
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
                    onChange={handleImageChange}
                    type="file"
                    class="btn"
                  />
                </div>
              </fieldset>

              <fieldset>
                <div className="grid-35">
                  <label for="fname">Name</label>
                </div>
                <div className="grid-65">
                  <input
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    type="text"
                    id="fname"
                    tabindex="1"
                    placeholder="Enter Your Name"
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
                  <label for="lname">Email</label>
                </div>
                <div className="grid-65">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    id="lname"
                    tabindex="2"
                    placeholder="Enter Your Email"
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
                      type="radio"
                      name="gender"
                      value="female"
                      className="grid-75-input"
                    />
                    Female
                  </label>
                  <label style={{ display: "flex", alignItems: "center" }}>
                    <input
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
                  <select>
                    <option value="">Please Select</option>
                    <option value="8">Federal Area</option>
                    <option value="7">Azad Kashmir</option>
                    <option value="6">Balochistan</option>
                    <option value="5">FANA</option>
                    <option value="4">FATA</option>
                    <option value="3">KPK</option>
                    <option value="2">Punjab</option>
                    <option value="1">Sindh</option>
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
                  <select>
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
                <input type="submit" className="Btn" value="Save Changes" />

                <input
                  type="button"
                  class="Btn cancel"
                  value="Cancel"
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </fieldset>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
