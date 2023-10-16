import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { postSignUp } from "../../service/redux/middleware/postSingup";
import Spinner from "react-bootstrap/Spinner";
import { FadeLoader } from "react-spinners";
import "./signUp.css";
import { useState } from "react";
function SignUp() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const [loginData, setLoginData] = useState({
    firstName: "",
    lastName: "",
    loginEmail: "",
    userType: "0",
    loginPassword: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  console.log(loginData);

  const handleChange = (e) => {
    loginData[e.target.name] = e.target.value;
    setLoginData({ ...loginData });
  };

  const formValidation = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(loginData.loginEmail);
    const passwordRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const isPasswordValid = passwordRegex.test(loginData.loginPassword);
    const isPasswordValidLength = loginData.loginPassword.length < 8;

    if (!loginData.firstName) {
      toast.error("Please enter first name");
      return false;
    } else if (!loginData.lastName) {
      toast.error("Please enter last name");
      return false;
    } else if (!loginData.loginEmail) {
      toast.error("Please enter email");
      return false;
    } else if (!isValidEmail) {
      toast.error("Please enter valid email");
      return false;
    } else if (!loginData.loginPassword) {
      toast.error("Please enter password");
      return false;
    } else if (!isPasswordValid) {
      toast.error("password must have a special character");
      return false;
    } else if (isPasswordValidLength) {
      toast.error("password length must be 8");
      return false;
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const res = formValidation();
    if (res === false) {
      return false;
    }
    const ClearAll = () => {
      setLoginData({
        firstName: "",
        lastName: "",
        loginEmail: "",

        loginPassword: "",
        confirmPassword: "",
      });
    };
    const data = {
      firstName: loginData.firstName,
      lastName: loginData.lastName,
      email: loginData.loginEmail,
      role: parseInt(loginData.userType),
      password: loginData.loginPassword,
    };
    console.log(data);
    setLoader(true);
    dispatch(postSignUp(data)).then((res) => {
      if (res?.payload?.status === 200) {
        setLoader(true);
        toast.success("SignUp Successful. Please Login");
        // history.push("/signup");
        window.location.reload();
        // navigate("/login");
        ClearAll();
      } else {
        toast.error(res?.payload?.message);
        setLoader(false);
      }
    });
  };
  

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Register Yourself By Entering Your Required Details.
          </Form.Text>
        </Form.Group>

        <Form.Group className=" mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className="Label">First Name</Form.Label>
          <Form.Control
            value={loginData.firstName}
            name="firstName"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group className=" mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className="Label">Last Name</Form.Label>
          <Form.Control
            value={loginData.lastName}
            name="lastName"
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Enter Username"
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label className="Label mt-2">Email</Form.Label>
          <Form.Control
            value={loginData.loginEmail}
            name="loginEmail"
            onChange={(e) => handleChange(e)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="Label mt-2">Password</Form.Label>
          <Form.Control
            value={loginData.loginPassword}
            name="loginPassword"
            onChange={(e) => handleChange(e)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userTypeDropdown">
          <Form.Label className="Label mt-2">User Type</Form.Label>
          <Form.Control
            style={{ width: "100%" }}
            as="select"
            name="userType"
            onChange={(e) => handleChange(e)}
            value={loginData.userType}
          >
            <option value="0">Student</option>
            <option value="1">Teacher/Tution center</option>
            <option value="2">Parent</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group className="mb-3 d-flex justify-content-between " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <span>Forget Passwords</span>
      </Form.Group> */}
        <div className="">
          <button
            variant="primary"
            type="submit"
            className="me-auto submit-btn"
          >
            <div style={{ marginRight: "10px" }}>Register</div>
            {loader && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </button>
        </div>
      </Form>
    </>
  );
}

export default SignUp;
