import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { API_CALL } from "./helpers";

const [nik, setNik] = useState("");
const [password, setPassword] = useState("");

const cekLogin = async (e) => {
  e.preventDefault();
  console.log(username, password);
  let options = {
    method: 'POST',
    url: 'auth/login',
    header: {
      'Content-Type': 'application/json'
    },
    data: {
      nik: nik,
      password: password
    }
  }
  try {
    let response = await API_CALL(options);
    localStorage.setItem('User_id', response.data.data.user_id);
    setPageActive("polling");
  } catch (error) {
    alert("Invalid Username Password");
  }


}
return (
  <Container>
    <Row className="justify-content-md-center">
      <Col lg="4">
        <Form onSubmit={cekLogin}>
          <Form.Group className="mb-3" controlId="formBasicNik">
            <Form.Label>Nik</Form.Label>
            <Form.Control type="text" onChange={(e) => { setNik(e.target.value) }} placeholder="Enter Nik" value={nik} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default LoginPage;