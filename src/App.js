import "./App.css";
import {VideoListing} from "./pages/videoListing/videoListing"
import { Routes, Route } from "react-router";
import {Home} from "./pages/homePage/home";
import {LikesPage} from "./pages/likesPage/likesPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<VideoListing/>} />
        <Route path="/LikesPage" element={<LikesPage/>} />
      </Routes>
    </div>
  );
}

export default App;
