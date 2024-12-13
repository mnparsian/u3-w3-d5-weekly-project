// src/components/Library.jsx
import React from "react";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import Player from "./Player";
import LikedTracks from "./LikedTracks";
import { Container, Row, Col } from "react-bootstrap";

const Library = () => {
  return (
    <Container fluid className="vh-100 body-color pb-5 mainContent">
      <Row>
        {/* Sidebar */}
        <Col md={2} className="p-0 bg-dark position-fixed vh-100" style={{ zIndex: 1 }}>
          <Sidebar />
        </Col>

        {/* MainContent */}
        <Col md={{ span: 10, offset: 2 }} className="p-0 overflow-auto vh-100">
          <NavBar />
          <LikedTracks />
          <Player />
        </Col>
      </Row>
    </Container>
  );
};

export default Library;
