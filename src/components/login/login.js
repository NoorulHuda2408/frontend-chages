import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css"
function Login() {
  return (
    <Form>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className="Label">UserName</Form.Label>
        <Form.Control  type="email" splaceholder="Enter email" className="test" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="Label" >Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className=" checkBox mb-3 d-flex justify-content-between " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <span >Forget Passwords</span>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;