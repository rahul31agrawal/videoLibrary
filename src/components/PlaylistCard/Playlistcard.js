import React from 'react'
import { useNavigate } from 'react-router-dom';
import { usePlaylist } from "../../context/PlaylistContext";
import axios from 'axios'

import './playlistcard.css'


const Playlistcard = ({playlist}) => {
  
  const {setlocalplaylists} = usePlaylist();
  const navigate = useNavigate();
  console.log(playlist);
  
  var token = localStorage.getItem('TOKEN')
  const header = {authorization: token} 
  
  const deletePlaylist = () =>{
      const urltosend = "/api/user/playlists/"+playlist._id
      axios.delete(urltosend,{headers : header})
      .then((response)=>{
      console.log('response from delete playlist api',response);
      setlocalplaylists(response.data.playlists)
      alert("Playlist deleted")
      },(error)=>{
      console.log("error from delete playlist api",error);
      })
  }
  return (
    <div  className='playlist-main-card'>
      
      <div onClick={()=>navigate(`/singleplaylist/${playlist._id}`)} className="playlist-card-title">
      {playlist.title}
      </div>
      
      <div className="playlist-card-video-count">
      {playlist.videos.length}
      </div>
      
      <div onClick={()=>deletePlaylist()} className="delete-playlist">
      <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  )
}

export default Playlistcard