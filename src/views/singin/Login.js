import React from "react";
import {
  Button,
  Label,
  Input,
  Form,
} from "reactstrap";
function handleSubmit(event) {
  event.preventDefault();
}
function Login() {
  return (
    <div className="login-form">
      <Form name="form" onSubmit={handleSubmit}>
      <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
        <h4 className="modal-title">Login to Your Account</h4>
          <div className="form-group">
              <Input type="text" name="username" className="form-control" placeholder="Username" required="required"/>
          </div>
          <div className="form-group">
              <Input type="password" name="password" className="form-control" placeholder="Password" required="required"/>
          </div>
          <div className="form-group small clearfix">
              <Label className="checkbox-inline">
                <Input type="checkbox"/>Remember me</Label>
              <a href="#" className="forgot-link">Forgot Password?</a>
          </div> 
          <Button type="submit" className="btn btn-primary btn-block btn-lg">Login</Button>              
      </Form>			
      {/* <div className="text-center small">Don't have an account? <a href="#">Sign up</a></div> */}
  </div>
  );
}

export default Login;
