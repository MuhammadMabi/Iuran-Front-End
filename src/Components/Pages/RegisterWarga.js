import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import register from "../../asset/image/register.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from 'react-bootstrap/InputGroup';

function RegisterWarga() {
  return (
    <div className="content-login">
      <div className="col-md-12">
        <div className="col-md-8" style={{ display: "inline-block" }}>
          <img
            src={register}
            className="img-logo"
            style={{ width: "100%", height: "962px", background: "#E8F9FD" }}
          />
        </div>
        <div
          className="col-md-4 login-right"
          style={{ float: "right", height: "100%" }}
        >
          <div style={{ marginTop: "10px", margin: "auto" }}>
            <div style={{ width: "25rem" }}>
              <Card.Body style={{ marginTop: "0px" }}>
                <Card.Title style={{ fontSize: "36px", fontWeight: "700", color: "#003a66" }}>
                  Register
                </Card.Title>
                <Card.Text style={{marginTop: "10px", color:"#5c7b93"}}>
                  Create your citizen account!
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupNik">
                    <Form.Label style={{color:"#5c7b93"}}>NIK</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupNokk">
                    <Form.Label style={{color:"#5c7b93"}}>No Kartu Keluarga</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupNama">
                    <Form.Label style={{color:"#5c7b93"}}>Nama</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupTanggalLahir">
                    <Form.Label style={{color:"#5c7b93"}}>Tanggal Lahir</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupJenisKelamin">
                    <Form.Label style={{color:"#5c7b93"}}>Jenis Kelamin</Form.Label>
                    <Form.Control type="check-box" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label style={{color:"#5c7b93"}}>Password</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupRole">
                    <Form.Label style={{color:"#5c7b93"}}>Role</Form.Label>
                    <Form.Control type="text"  />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Button
                variant="primary"
                style={{ marginTop: "20px", width: "405px", backgroundColor:"#3fa1ec" }}
              >
                Register
              </Button>
              <h6 style={{ marginTop: "20px", textAlign: "center", color:"#5c7b93"}}>
                Sudah punya akun?{" "}
                <a href="" style={{ textDecoration: "none", color:"#3fa1ec" }}>
                  Login
                </a>
              </h6>
              <h6 style={{ marginTop: "20px", textAlign: "center" }}>
                <a href="" style={{ textDecoration: "none", color:"#3fa1ec" }}>
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

export default RegisterWarga;
