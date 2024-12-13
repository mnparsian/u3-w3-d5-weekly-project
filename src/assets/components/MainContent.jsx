import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Albums from "./Albums";
import Player from "./Player";
import NavBar from "./NavBar";

const MainContent = () => {
  const query = useSelector((state) => state.search.query);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
          if (response.ok) {
            const { data } = await response.json();
            setSearchResults(data.slice(0, 10));
          }
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <>
      <Container fluid className="body-color pb-5">
        <NavBar />
        {query ? (
          <Albums genre="" title="Search Results" tracks={searchResults} />
        ) : (
          <>
            <Albums genre="rock" title="Rock Classics" />
            <Albums genre="pop" title="Pop Culture" />
            <Albums genre="hiphop" title="#HipHop" />
          </>
        )}
        <Player />
      </Container>
    </>
  );
};

export default MainContent;
