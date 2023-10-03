import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css"
function Login() {
  return (
    <Form>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Text className="text-muted">
        Please Enter Your Credentials Carefully.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className="Label">UserName</Form.Label>
        <Form.Control  type="email" placeholder="Enter Username" className="test" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="Label mt-3" >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <div className="d-flex justify-content-between align-items-end mt-4">
          <div>
            <p
              className="forget-p"
              
            >
              Forget Password ?
            </p>
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
      <button variant="primary" type="submit" className='sign-btn'>
        Submit
      </button>
    </Form>
  );
}

export default Login;