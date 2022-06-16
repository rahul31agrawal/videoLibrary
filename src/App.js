import "./App.css";
import {VideoListing} from "./pages/videoListing/videoListing"
import { Routes, Route } from "react-router";
import {Home} from "./pages/homePage/home";
import {LikesPage} from "./pages/likesPage/likesPage";
import {WatchVideo} from "./pages/watchVideo/watchVideo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<VideoListing/>} />
        <Route path="/LikesPage" element={<LikesPage/>} />
        <Route path="/watchVideo/:videoId" element={<WatchVideo/>} />
      </Routes>
    </div>
  );
}

export default App;
