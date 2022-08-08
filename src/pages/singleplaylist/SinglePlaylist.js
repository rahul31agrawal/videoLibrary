import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import {Navbar} from "../../components/navbar/nav";
import VideoCardforPlaylist from "../../components/videocardforplaylist/VideoCardforPlaylist";

import { usePlaylist } from '../../context/PlaylistContext';
import './singleplaylist.css'



const SinglePlaylist = () => {
    

    const playlistid= useParams();
    const navigate = useNavigate();
    const {localplaylists} =usePlaylist();
    console.log(playlistid.id);
    const thisplaylist = localplaylists.find(obj=> obj._id === playlistid.id)
    if(thisplaylist === undefined){
        navigate('/Listvideos')
    }
    console.log('what playlist are we showing: ',thisplaylist);
    
  return (
    <div className='single-playlist-page-parent'>
        <Navbar pagetype="not-home"/>
         
      
        
        <div className="single-playlist-page-container">
            <div className='single-playlist-title-section'>
                <div className='grid-title'>
                 Playlist Detials
                </div>
                <div className="hr-div-long"></div> 
            </div>  
            <div className="playlist-title">
            <h1>Playlist Name :{thisplaylist.title}</h1>
            
            </div>      
            <div className="playlist-video-listing-section">
                Videos in playlist :<br/>
                {thisplaylist.videos.length===0? null :thisplaylist.videos.map((vid)=><VideoCardforPlaylist thisplaylist={thisplaylist} vid= {vid} />)}
            </div>
             
        </div>
        
        
    </div>
  )
}

export default SinglePlaylist