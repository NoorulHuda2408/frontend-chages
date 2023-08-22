import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./signUp.css"
function SignUp() {
  return (
    <Form>
     <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className=" mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className='Label'>UserName</Form.Label>
        <Form.Control  type="email" placeholder="Enter email"  />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label className='Label'>UserName</Form.Label>
        <Form.Control  type="userName" placeholder="Enter email" />
      
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='Label'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3 d-flex justify-content-between " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
        <span>Forget Passwords</span>
      </Form.Group> */}
      <div className=''>
      <Button variant="primary" type="submit" className='me-auto'>
        Submit
      </Button>
      </div>
      
    </Form>
  );
}

export default SignUp;