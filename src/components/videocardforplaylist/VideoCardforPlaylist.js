import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import { usePlaylist } from "../../context/PlaylistContext";
import './videocardforplaylist.css';


const VideoCardforPlaylist = ({vid,thisplaylist}) => {
    const navigate = useNavigate();
    const {setlocalplaylists}=usePlaylist();
    
    const youtubelink = "http://i.ytimg.com/vi/"+vid._id+"/maxresdefault.jpg"
    var token = localStorage.getItem('TOKEN')
    const header = {authorization: token} 
    console.log(thisplaylist);
    const urltosend="/api/user/playlists/"+thisplaylist._id+'/'+vid._id
    console.log(urltosend);
    const removeVideofromPlaylist = () => {
        axios.delete(urltosend,{headers : header})
        .then((response)=>{
        
        setlocalplaylists(response.data.playlists)
        
        toast.success('video removed from playlist')
        },(error)=>{
        console.log("error from remove video from playlist api",error);
        })
    }

    

    return (
        <div className='video-card-for-playlist-parent'>
            <div  className="thumbnail" onClick={() => { navigate(`/watchVideo/${vid._id}`)}}
>
                <img src={youtubelink} alt={vid.title} />
            </div>
            <div className="video-details-for-playlist">
                {vid.title}
            </div>
            <div onClick={()=>removeVideofromPlaylist()} className="remove-from-playlist-icon">
            <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default VideoCardforPlaylist