import "./App.css";
import {VideoListing} from "./pages/videoListing/videoListing"
import { Routes, Route } from "react-router";
import {Home} from "./pages/homePage/home";
import {LikesPage} from "./pages/likesPage/likesPage";
import {WatchVideo} from "./pages/watchVideo/watchVideo";
import {HistoryPage} from "./pages/historyPage/historyPage";
import {WatchLater} from "./pages/watchLater/watchLater";
import {LoginPage} from "./pages/loginPage/login";
import {SignupPage} from "./pages/signupPage/signupPage";
import { RequiresAuth } from "./context/RequiresAuth";
import Playlists from "./pages/playlistPage/Playlists";
import SinglePlaylist from "./pages/singleplaylist/SinglePlaylist";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<VideoListing/>} />
        
        <Route path="/watchVideo/:videoId" element={<WatchVideo/>} />

        <Route path="/playlists" element={<Playlists />} />
        <Route path="/singleplaylist/:id" element={<SinglePlaylist />} />

        <Route path="/history" element={
                  <RequiresAuth>
                    <HistoryPage/>
                  </RequiresAuth>} />

        <Route path="/watchLater" element={
        <RequiresAuth>
          <WatchLater/>
        </RequiresAuth>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />

        <Route
          path="/likesPage"
          element={
            <RequiresAuth>
              <LikesPage />
            </RequiresAuth>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
