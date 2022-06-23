import "./App.css";
import {VideoListing} from "./pages/videoListing/videoListing"
import { Routes, Route } from "react-router";
import {Home} from "./pages/homePage/home";
import {LikesPage} from "./pages/likesPage/likesPage";
import {WatchVideo} from "./pages/watchVideo/watchVideo";
import {HistoryPage} from "./pages/historyPage/historyPage";
import {WatchLater} from "./pages/watchLater/watchLater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<VideoListing/>} />
        <Route path="/likesPage" element={<LikesPage/>} />
        <Route path="/watchVideo/:videoId" element={<WatchVideo/>} />
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/watchLater" element={<WatchLater/>} />
      </Routes>
    </div>
  );
}

export default App;
