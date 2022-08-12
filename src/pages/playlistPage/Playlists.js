import React from 'react'
import { ToastContainer } from 'react-toastify';
import Playlistcard from "../../components/PlaylistCard/Playlistcard";
import {Navbar} from "../../components/navbar/nav";
import { usePlaylist } from "../../context/PlaylistContext";

import './playlists.css'

const Playlists = () => {
  

  const {localplaylists} = usePlaylist();
  
  return (


    <div className='playlist-parent'>
      <Navbar/>
      

      <div className='login-title-section'>
          <div className='grid-title'>
             Playlists
          </div>
          <div className="hr-div-long"></div>
          <div className="playlist-container">
          <div className='playlist-table-title-container'>
            <div className='playlistpage-table-titles'>
              Playlist name
            </div>
            <div className='playlistpage-table-titles'>
              Video Count
            </div>
            <div className='playlistpage-table-titles'>
              Delete 
            </div>
          </div>
          
            {localplaylists.length === 0 ? null:localplaylists.map((playlist)=><div className='playlist-card-renderer'><Playlistcard playlist={playlist}/></div>)}
          </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Playlists