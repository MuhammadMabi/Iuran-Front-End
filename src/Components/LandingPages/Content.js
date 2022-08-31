import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Pages/Login";
import Logo from "../../asset/image/connect.png";

function Content() {
  return (
    <>
      {/* <div  className="topbar">
        <div style={{ width: "100%" }}>
          <p>IURAN RT</p>
        </div>
        <div style={{ width: "100%" }}>
          <Button style={{ marginLeft: "100px" }}>
            Login
          </Button>{" "}
          <Button>Login</Button>{" "}
        </div>
      </div> */}

      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand className="irt">Iuran RT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <div className="d-flex">
                <Button variant="primary" className="RegisterB">
                  Register
                </Button>
                <Button variant="primary" className="RegisterB">
                  Login
                  {/* <Router>
                    <Link to="/Login">Login</Link>
                    <Routes>
                      <Route path="/Login" element={<Login />} />
                    </Routes>
                  </Router> */}
                </Button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="body">
        <div className="main-content">
          <div className="left-content">
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>
              Bagaimana kami dapat <br /> membantu anda?
            </p>
            <p style={{ fontSize: "24px" }}>
              Kami membuat beberapa kategori <br /> yang mungkin memudahkan!
            </p>
          </div>
          <div className="right-content">
            <img src={Logo} className="img-logo" />
          </div>
        </div>
        <div className="part-body">
          <span>Kategory</span>
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Content;
