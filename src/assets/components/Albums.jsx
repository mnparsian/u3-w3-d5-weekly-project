// src/components/Albums.jsx
import React, { useEffect, useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../redux/slices/likesSlice";
import { setCurrentTrack } from "../../redux/slices/playerSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Albums = ({ genre, title, tracks: externalTracks }) => {
  const [tracks, setTracks] = useState([]);
  const likedTracks = useSelector((state) => state.likes.likedTracks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!externalTracks && genre) {
      const fetchTracks = async () => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${genre}`);
          if (response.ok) {
            const { data } = await response.json();
            setTracks(data.slice(0, 4)); // Limit to 4 tracks
          }
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      };

      fetchTracks();
    } else {
      setTracks(externalTracks || []);
    }
  }, [genre, externalTracks]);

  return (
    <Container>
      <h2 className="text-white">{title}</h2>
      <Row>
        {tracks.map((track) => (
          <Col xs={12} md={3} key={track.id} className="text-center">
            <img className="img-fluid" src={track.album.cover_medium} alt={track.title} onClick={() => dispatch(setCurrentTrack(track))} />
            <p className="text-white">
              Track: "{track.title}"<br />
              Artist: {track.artist.name}
            </p>
            <div onClick={() => dispatch(toggleLike(track.id))} style={{ cursor: "pointer", fontSize: "24px" }}>
              {likedTracks.includes(track.id) ? <AiFillHeart color="red" /> : <AiOutlineHeart color="white" />}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;
