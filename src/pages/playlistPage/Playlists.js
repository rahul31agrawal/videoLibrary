import React from "react";
import { ToastContainer } from "react-toastify";
import Playlistcard from "../../components/PlaylistCard/Playlistcard";
import { Navbar } from "../../components/navbar/nav";
import { usePlaylist } from "../../context/PlaylistContext";
import { Sidebar } from "../../components/sideBar/sideBar";

import "./playlists.css";

const Playlists = () => {
  const { localplaylists } = usePlaylist();

  return (
    <>
      <Navbar />
      <div className="sidebarHolder">
        <Sidebar />
      </div>

      <div className="videoGrid">
        {localplaylists.length === 0
          ? null
          : localplaylists.map((playlist) => (
              <div className="playlist-card-renderer">
                <Playlistcard playlist={playlist} />
              </div>
            ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Playlists;
