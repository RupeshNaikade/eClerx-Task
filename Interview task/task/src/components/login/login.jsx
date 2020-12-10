import React, { useState } from "react";
import loginImg from "./login.jpg";
import './login.css';
import { Redirect } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import history from '../history';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = (val) => /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/i.test(val);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (email === "admin@xyz.com" && password === "Admin_007") {
      store.addNotification({
        title: "Admin login successful!",
        message: 'Now you have a admin privileges',
        type: "success",
        container: 'top-right',
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
          showIcon: true
        }
      })
      history.push("/admin");
      window.location.reload(false);
    } else if (email === "user@xyz.com" && password === "User_007") {
      store.addNotification({
        title: "User login successful!",
        message: 'Now you have a user privileges',
        type: "success",
        container: 'top-right',
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
          showIcon: true
        }
      })
      history.push("/user");
      window.location.reload(false);
    } else {
      store.addNotification({
        title: "Invalid credentials",
        message: 'Enter a valid credentials!',
        type: "danger",
        container: 'top-right',
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 3000,
          showIcon: true
        }
      })
    }
  }
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-4 mt-5' >
          <FadeTransform
            in
            transformProps={{
              exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card className="frm">
              <div className="text-center mt-4 mb-4"><h1 className="">Login</h1></div>
              <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                  <div className="form-group">
                    <Row><Col className="col-md-4 offset-md-1">
                      <Form.Label>Email Id:</Form.Label></Col>
                      <Col className="col-md-6">
                        <Control.text
                          autoComplete="off"
                          model=".email"
                          id="email"
                          className="form-control"
                          placeholder="Enter Your Email Id"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          validators={{
                            required, validEmail
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".email"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            validEmail: 'Enter a valid email address!'
                          }}
                        />
                      </Col></Row>
                  </div>
                  <Row><Col>
                    <div className="form-group">
                      <Row><Col className="col-md-4 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                        <Col className="col-md-6">
                          <Control.text
                            autoComplete="off"
                            model=".password"
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            validators={{
                              required, minLength: minLength(8), validPassword
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                              validPassword: "Password must be accept 8-20 characters and it must be accept number, alphabet and symbol."
                            }}
                          />
                        </Col></Row>

                    </div></Col></Row>

                  <div className="text-center mt-4">
                    <Button variant="primary" type="submit">Login</Button>
                  </div>
                </LocalForm>
              </Card.Body>
            </Card></FadeTransform>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

