import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./assets/components/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LikedTracks from "./assets/components/LikedTracks.";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<LikedTracks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
