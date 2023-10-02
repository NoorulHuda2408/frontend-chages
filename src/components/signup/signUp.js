import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./signUp.css";
function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          Register Yourself By Entering Your Required Details.
        </Form.Text>
      </Form.Group>

      <Form.Group className=" mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className="Label">UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className="Label mt-2">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="Label mt-2">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3 d-flex justify-content-between " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <span>Forget Passwords</span>
      </Form.Group> */}
      <div className="">
        <button variant="primary" type="submit" className="me-auto submit-btn">
          Register
        </button>
      </div>
    </Form>
  );
}

export default SignUp;
