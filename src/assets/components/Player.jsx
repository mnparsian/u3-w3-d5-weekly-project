import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import shuffle from "../playerbuttons/shuffle.png";
import prev from "../playerbuttons/prev.png";
import play from "../playerbuttons/play.png";
import next from "../playerbuttons/next.png";
import repeat from "../playerbuttons/repeat.png";

const Player = () => {
  const currentTrack = useSelector((state) => state.player.currentTrack);

  return (
    <Container fluid className="bg-container gutter-x-0 position-fixed bottom-0 py-2 mt-4">
      <Row className="w-100 align-items-center">
        <Col xs={2} className="d-flex align-items-center">
          {currentTrack ? (
            <>
              <Image
                src={currentTrack.album.cover_small}
                alt={currentTrack.title}
                className="me-3"
                style={{ width: "60px", height: "60px", borderRadius: "4px" }}
              />
              <div className="text-white">
                <h6 className="mb-0">{currentTrack.title}</h6>
                <small className="text-muted">{currentTrack.artist.name}</small>
              </div>
            </>
          ) : (
            <p className="text-white mb-0">No track selected</p>
          )}
        </Col>

        <Col xs={10} className="d-flex flex-column align-items-center playerControls">
          <div className="d-flex justify-content-start align-items-start mb-2">
            <a href="#" className="mx-3">
              <Image src={shuffle} alt="shuffle" />
            </a>
            <a href="#" className="mx-3">
              <Image src={prev} alt="previous" />
            </a>
            <a href="#" className="mx-3">
              <Image src={play} alt="play" />
            </a>
            <a href="#" className="mx-3">
              <Image src={next} alt="next" />
            </a>
            <a href="#" className="mx-3">
              <Image src={repeat} alt="repeat" />
            </a>
          </div>
          <div className="progress w-30 d-flex justify-content-center" style={{ height: "4px", backgroundColor: "#555" }}>
            <div className="progress-bar" role="progressbar" style={{ width: "40%", backgroundColor: "#1db954" }}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
