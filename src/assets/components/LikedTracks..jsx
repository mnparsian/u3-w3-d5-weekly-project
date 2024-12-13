// src/components/LikedTracks.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setCurrentTrack } from "../../redux/slices/playerSlice";
import { AiFillHeart } from "react-icons/ai";

const LikedTracks = () => {
  const likedTracks = useSelector((state) => state.likes.likedTracks);
  const dispatch = useDispatch();

  if (likedTracks.length === 0) {
    return (
      <Container className="text-center text-white">
        <h2>Your Library</h2>
        <p>No liked tracks yet!</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="text-white">Your Liked Tracks</h2>
      <Row>
        {likedTracks.map((track) => (
          <Col xs={12} md={3} key={track.id} className="text-center">
            <img className="img-fluid" src={track.album.cover_medium} alt={track.title} onClick={() => dispatch(setCurrentTrack(track))} />
            <p className="text-white">
              Track: "{track.title}"<br />
              Artist: {track.artist.name}
            </p>
            <div style={{ fontSize: "24px", color: "red" }}>
              <AiFillHeart />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LikedTracks;
