import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import login from "../../asset/image/logins.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Login() {
  return (
    <div className="content-login">
      <div className="col-md-12">
        <div className="col-md-8" style={{ display: "inline-block" }}>
          <img
            src={login}
            className="img-logo"
            style={{ width: "100%", height: "962px", background: "#E8F9FD" }}
          />
        </div>
        <div
          className="col-md-4 login-right"
          style={{ float: "right", height: "100%" }}
        >
          <div style={{ marginTop: "20px", margin: "auto" }}>
            <div style={{ width: "25rem" }}>
              <Card.Body style={{ marginTop: "50px" }}>
                <Card.Title style={{ fontSize: "36px", fontWeight: "700" }}>
                  Login
                </Card.Title>
                <Card.Text>
                  Please sign-in to your account and start the adventure
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupNik">
                    <Form.Label>NIK</Form.Label>
                    <Form.Control type="number" placeholder="Enter NIK" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Button
                variant="primary"
                style={{ marginTop: "20px", width: "405px" }}
              >
                Login
              </Button>
              <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                Belum punya akun?{" "}
                <a href="" style={{ textDecoration: "none" }}>
                  Buat akun
                </a>
              </h6>
              <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                <a href="" style={{ textDecoration: "none" }}>
                  Back to landingpage
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
