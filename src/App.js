import "./App.css";
import {VideoListing} from "./pages/videoListing/videoListing"
import { Routes, Route } from "react-router";
import {Home} from "./pages/homePage/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<VideoListing/>} />
      </Routes>
    </div>
  );
}

export default App;
