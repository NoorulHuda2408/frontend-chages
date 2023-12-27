import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../service/redux/middleware/sigin";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const formValidation = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(loginEmail);
    if (!loginEmail) {
      toast.error("Please enter email");
      return false;
    } else if (!isValidEmail) {
      toast.error("Please enter valid email");
      return false;
    } else if (!loginPassword) {
      toast.error("Please enter password");
      return false;
    }
  };

  const handleLogin = (e) => {
    e?.preventDefault();
    const res = formValidation();
    if (res === false) {
      return false;
    }

    const data = {
      email: loginEmail,
      password: loginPassword,
    };
    setLoader(true);
    dispatch(signin(data)).then((res) => {
      if (res?.payload?.status === 200) {
        setLoader(false);
        if (res?.payload?.data?.role === 0) {
          if (res?.payload?.data?.profileUpdated) {
            toast.success("Login Successfully");
            navigate("/");
          } else {
            toast.success("Profile Update Your Profile to Continue.");
            navigate("/StudentRegistration");

            // history.push("/personalInfo");
            toast.success(res?.payload?.data?.message);
          }
        } else if (res?.payload?.data?.role === 1) {
          if (res?.payload?.data?.profileUpdated) {
            toast.success("Login Susseccfully");
            navigate("/Notification");
          } else {
            toast.success("Profile Update Your Profile to Continue.");
            navigate("/teacherprofile");

            // history.push("/personalInfo");
            toast.success(res?.payload?.data?.message);
          }
        } else if (res?.payload?.data?.role === 2) {
          if (res?.payload?.data?.profileUpdated) {
            toast.success("Login Susseccfully");
            navigate("/");
          } else {
            toast.success("Profile Update Your Profile to Continue.");
            navigate("/StudentRegistration");

            // history.push("/personalInfo");
            toast.success(res?.payload?.data?.message);
          }
        }
      } else {
        toast.error(res?.payload?.message);
        setLoader(false);
      }
    });
  };
  return (
    <Form>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          Please Enter Your Credentials Carefully.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className="Label">Email</Form.Label>
        <Form.Control
          onChange={(e) => setLoginEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
          className="test"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="Label mt-3">Password</Form.Label>
        <Form.Control
          onChange={(e) => setLoginPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <div className="d-flex justify-content-between align-items-end mt-4">
        <div>
          {/* <p className="forget-p">Forget Password ?</p> */}
        </div>

        <div>
          <label className="rember-label">
            {" "}
            Remember Me <input type="checkbox" />
          </label>
        </div>
      </div>
      {/* <Form.Group className=" checkBox mb-3 d-flex justify-content-between " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <span >Forget Passwords</span>
      </Form.Group> */}
      <button
        onClick={handleLogin}
        variant="primary"
        type="submit"
        className="sign-btn"
      >
        <div style={{ marginRight: "10px" }}>Submit</div>
        {loader && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </button>
    </Form>
  );
}

export default Login;
