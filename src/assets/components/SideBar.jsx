import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import logo from "../logo/logo.png";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/slices/searchSlice";
import { Link } from "react-router-dom";
import { setActiveComponent } from "../../redux/slices/uiSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <Container className="bg-black text-white d-flex flex-column align-items-center p-4" style={{ height: "100vh" }}>
      <Row className="mb-5 w-100">
        <Col className="d-flex align-items-center">
          <Image src={logo} alt="Spotify Logo" width="120" className="me-auto" />
        </Col>
      </Row>

      <Row className="flex-column mb-5 w-100">
        <Col className="mb-3">
          <Link to="/" className="d-flex align-items-center text-decoration-none text-white">
            <i className="bi bi-house-door-fill me-2"></i> Home
          </Link>
        </Col>
        <Col className="mb-3">
          <Link to="/library" onClick={() => dispatch(setActiveComponent("likedTracks"))} className="d-flex align-items-center text-decoration-none text-white">
            <i className="bi bi-book-fill me-2"></i> Your Library
          </Link>
        </Col>
      </Row>

      <Row className="mb-5 w-200">
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(e) => dispatch(setQuery(e.target.value))}
              className="me-2"
              style={{
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            />
            <Button
              variant="light"
              style={{
                borderRadius: "5px",
                color: "white",
                backgroundColor: "transparent",
                border: "1px solid white"
              }}
            >
              GO
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-auto mb-4 w-100 text-center">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Button
            variant="light"
            className="my-2"
            style={{
              borderRadius: "10px",
              color: "black",
              fontWeight: "bold",
              width: "200px"
            }}
          >
            Sign Up
          </Button>
          <Button
            variant="outline-light"
            style={{
              borderRadius: "10px",
              fontWeight: "bold",
              width: "200px"
            }}
          >
            Login
          </Button>
        </Col>
      </Row>

      <Row className="text-center w-100">
        <Col>
          <small>
            <a href="#" className="text-white text-decoration-none me-2">
              Cookie Policy
            </a>
            |
            <a href="#" className="text-white text-decoration-none ms-2">
              Privacy
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
